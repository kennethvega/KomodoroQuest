import React, { useState } from "react";
import FormAddModal from "./FormAddModal";
import styles from "./FormAddEdit.module.scss";
import Select from "react-select";
import { useAuthContext } from "../../hooks/useAuthContext";
// firebase imports
import { db } from "../../firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import TaskList from "../TaskList";

// dummy categories

function AddForm({ onCloseModal }) {
  const { user } = useAuthContext();
  const [taskName, setTaskName] = useState("");
  const [durationHours, setDurationHours] = useState("");
  const [durationMinutes, setDurationMinutes] = useState("");
  // alarm
  const [alarmMinutes, setAlarmMinutes] = useState("");
  // short break
  const [shortBreakMinutes, setShortBreakMinutes] = useState("");
  // long break
  const [longBreakMinutes, setLongBreakMinutes] = useState("");

  const reset = () => {
    setTaskName("");
    setDurationHours("");
    setDurationMinutes("");
    setAlarmMinutes("");
    setShortBreakMinutes("");
    setLongBreakMinutes("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ref = collection(db, "tasks");
    if (user) {
      onCloseModal();
      await addDoc(ref, {
        taskName,
        durationHours,
        durationMinutes,
        alarmMinutes,
        shortBreakMinutes,
        longBreakMinutes,
        uid: user.uid,
        createdAt: serverTimestamp(),
      });
    }

    reset();
  };

  return (
    <FormAddModal onCloseModal={onCloseModal}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Add a task:</h2>
        <h2 className={styles.close} onClick={onCloseModal}>
          X
        </h2>
        <label>
          <span>Task name:</span>
          <input
            placeholder="maximum of 15 characters only"
            maxLength={15}
            required
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
                required
              />
            </div>
          </label>
          {/* alarm */}
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
                required
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
                required
              />
            </div>
          </label>
        </div>
        <button className="btn">Add task</button>
      </form>
    </FormAddModal>
  );
}

export default AddForm;
