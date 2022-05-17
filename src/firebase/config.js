import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjnb_kwJaJl0li2KNkksJDqDOs8UWj-qE",
  authDomain: "pomodoroquest.firebaseapp.com",
  projectId: "pomodoroquest",
  storageBucket: "pomodoroquest.appspot.com",
  messagingSenderId: "133196721784",
  appId: "1:133196721784:web:6174b5191b28476372078d",
};
initializeApp(firebaseConfig);
// init firestore
const db = getFirestore();
// init firebase auth
const auth = getAuth();

export { db, auth };
