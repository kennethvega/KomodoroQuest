import React, { useState } from "react";
import FormAddModal from "./FormAddModal";
import styles from "./AddForm.module.scss";
import Select from "react-select";
// import styles from "./AddForm.module.scss";

// dummy categories

function AddForm({ onCloseModal }) {
  const [taskName, setTaskName] = useState("");
  const [durationHours, setDurationHours] = useState("");
  const [durationMinutes, setDurationMinutes] = useState("");
  const [alarm, setAlarm] = useState("");
  const [shortBreak, setShortBreak] = useState("");
  const [longBreak, setLongBreak] = useState("");

  return (
    <FormAddModal onCloseModal={onCloseModal}>
      <form className={styles.form}>
        <h2>Add a task:</h2>
        <h2 className={styles.close} onClick={onCloseModal}>
          X
        </h2>
        <label>
          <span>Task name:</span>
          <input
            placeholder="maximum of 10 characters only"
            maxLength={10}
            required
            type="text"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
          />
        </label>
        <div className={styles["label-container"]}>
          <label>
            <span>Duration of task</span>
            <div className={styles["input-container"]}>
              <input
                type="number"
                placeholder="hours"
                onChange={(e) => setDurationHours(e.target.value)}
              />
              <input type="number" placeholder="mins" />
            </div>
          </label>
          <label>
            <span>Alarm every</span>
            <div className={styles["input-container"]}>
              <input type="number" placeholder="hours" />
              <input type="number" placeholder="mins" />
            </div>
          </label>
        </div>
        <div className={styles["label-container"]}>
          <label>
            <span>Short break</span>
            <div className={styles["input-container"]}>
              <input type="number" placeholder="hours" />
              <input type="number" placeholder="mins" />
            </div>
          </label>
          <label>
            <span>Long break</span>
            <div className={styles["input-container"]}>
              <input type="number" placeholder="hours" />
              <input type="number" placeholder="mins" />
            </div>
          </label>
        </div>
        <button className="btn">Add task</button>
      </form>
    </FormAddModal>
  );
}

export default AddForm;
