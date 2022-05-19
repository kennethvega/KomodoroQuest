import React from "react";
import styles from "./TaskList.module.scss";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
function TaskList({ tasks, onShowModal, setId }) {
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
          <h2>{user.displayName}'s tasks</h2>
          {tasks.map((task) => (
            <li
              className={styles.task}
              key={task.id}
              onClick={() => setId(task.id)}
            >
              <p className={styles["task-title"]}>{task.taskName}</p>
              <div className={styles.progress}></div>
              <Tippy content="Edit task">
                <div className={styles.icons} onClick={onShowModal}>
                  <BiEdit size="25px" />
                </div>
              </Tippy>
              <Tippy content="delete">
                <div
                  className={styles.trash}
                  onClick={() => handleClick(task.id)}
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
