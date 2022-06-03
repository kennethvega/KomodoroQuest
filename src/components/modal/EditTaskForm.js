import React, { useEffect, useState } from "react";
import FormAddModal from "./FormAddModal";
import styles from "./FormAddEdit.module.scss";

import { useAuthContext } from "../../hooks/useAuthContext";
// firebase imports
import { db } from "../../firebase/config";
import { doc, getDoc, updateDoc } from "firebase/firestore";

function EditTaskForm({ onCloseModal, id }) {
  // get a single document to use for the useState

  const ref = doc(db, "tasks", id);
  // const docSnap = getDoc(ref);
  // console.log(docSnap.data());
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDoc(ref);
      setTaskName(data.data().taskName);
      setDurationHours(data.data().durationHours);
      setDurationMinutes(data.data().durationMinutes);
      setAlarmMinutes(data.data().alarmMinutes);
      setShortBreakMinutes(data.data().shortBreakMinutes);
      setLongBreakMinutes(data.data().longBreakMinutes);
    };
    fetchData();
  }, []);

  const [taskName, setTaskName] = useState("");
  const [durationHours, setDurationHours] = useState("");
  const [durationMinutes, setDurationMinutes] = useState("");
  // alarm
  const [alarmMinutes, setAlarmMinutes] = useState("");
  // short break
  const [shortBreakMinutes, setShortBreakMinutes] = useState("");
  // long break
  const [longBreakMinutes, setLongBreakMinutes] = useState("");
  const { user } = useAuthContext();

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (user) {
      onCloseModal();
      await updateDoc(ref, {
        taskName,
        durationHours,
        durationMinutes,
        alarmMinutes,
        shortBreakMinutes,
        longBreakMinutes,
      });
    }
  };

  return (
    <FormAddModal onCloseModal={onCloseModal}>
      <form onSubmit={handleUpdate} className={styles.form}>
        <h2>Edit task:</h2>
        <h2 className={styles.close} onClick={onCloseModal}>
          X
        </h2>
        <label>
          <span>Task name:</span>
          <input
            maxLength={15}
            type="text"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
        </label>
        {/* duration task */}
        <div className={styles["label-container"]}>
          <label>
            <span>Duration of task</span>
            <div className={styles["input-container"]}>
              <input
                type="number"
                placeholder="hours"
                onChange={(e) => setDurationHours(e.target.value)}
                value={durationHours}
              />
              <input
                type="number"
                placeholder="mins"
                onChange={(e) => setDurationMinutes(e.target.value)}
                value={durationMinutes}
              />
            </div>
          </label>
        </div>
        {/* breaks */}
        <div className={styles["label-container"]}>
          <label>
            <span>Short break</span>
            <div className={styles["input-container"]}>
              <input
                type="number"
                placeholder="mins"
                onChange={(e) => setShortBreakMinutes(e.target.value)}
                value={shortBreakMinutes}
              />
            </div>
          </label>

          <label>
            <span>Long break</span>
            <div className={styles["input-container"]}>
              <input
                type="number"
                placeholder="mins"
                onChange={(e) => setLongBreakMinutes(e.target.value)}
                value={longBreakMinutes}
              />
            </div>
          </label>
        </div>
        <button className="btn">Edit</button>
      </form>
    </FormAddModal>
  );
}

export default EditTaskForm;
