import React, { useState } from "react";
import styles from "./TaskList.module.scss";
import { BiEdit, BiCheckbox } from "react-icons/bi";

import { MdDeleteOutline } from "react-icons/md";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

function TaskList({
  tasks,
  onShowModal,
  setId,
  setPomodoroHours,
  setPomodoroMinutes,
  setShortBreak,
  setLongBreak,
  id,
}) {
  const [isActive, setActive] = useState("false");
  const { user } = useAuthContext();

  // delete
  const handleClick = async (id) => {
    const ref = doc(db, "tasks", id);
    await deleteDoc(ref);
  };

  return (
    <>
      {user && (
        <div className={styles["task-container"]}>
          <div className={styles.flex}>
            <h2>{user.displayName}'s tasks</h2>
            <p>progress</p>
          </div>

          {tasks.map((task) => (
            <li
              className={[
                styles.task,
                `${task.id === id ? styles.active : ""}`,
              ].join(" ")}
              key={task.id}
            >
              <div
                className={styles["content-container"]}
                onClick={() => {
                  setPomodoroMinutes(task.durationMinutes);
                  setLongBreak(task.longBreakMinutes);
                  setShortBreak(task.shortBreakMinutes);
                  setId(task.id);
                  setPomodoroHours(task.durationHours);

                  // if (task.id === id) {
                  //   setActive(true);
                  // } else {
                  //   setActive(false);
                  // }
                }}
              >
                <div>
                  <BiCheckbox size="30px" className={styles.iconss} />
                </div>
                <p className={styles["task-title"]}>{task.taskName}</p>
                <div className={styles.progress} data-label="loading"></div>
              </div>
              <Tippy content="Edit task">
                <div
                  className={styles.icons}
                  onClick={() => {
                    onShowModal();
                    setId(task.id);
                  }}
                >
                  <BiEdit size="25px" />
                </div>
              </Tippy>
              <Tippy content="delete">
                <div
                  className={styles.trash}
                  onClick={() => {
                    setId(task.id);
                    handleClick(task.id);
                  }}
                >
                  <MdDeleteOutline size="25px" />
                </div>
              </Tippy>
            </li>
          ))}
        </div>
      )}
    </>
  );
}

export default TaskList;
