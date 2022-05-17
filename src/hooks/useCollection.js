import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/config";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

export const useCollection = (c, _q) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  // set up query
  const q = useRef(_q).current;
  useEffect(() => {
    let ref = collection(db, c);

    if (q) {
      ref = query(ref, where(...q), orderBy("createdAt", "desc"));
    }
    const unsub = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Could not fetch the data");
      }
    );
    return () => unsub();
  }, [c, q]);

  return { documents, error };
};
