import React from "react";
import styles from "./TaskList.module.scss";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
function TaskList() {
  return (
    <div className={styles["task-container"]}>
      <h2>Quest List</h2>
      <div className={styles.task}>
        <p className={styles["task-title"]}>Task name</p>
        <div className={styles.progress}></div>
        <div className={styles.icons}>
          <BiEdit size="25px" title="Adjust settings" />
        </div>
        <div className={styles.trash}>
          <MdDeleteOutline size="25px" title="Delete" />
        </div>
      </div>
      <div className={styles.task}>
        <p className={styles["task-title"]}>Task name</p>
        <div className={styles.progress}></div>
        <div className={styles.icons}>
          <BiEdit size="25px" title="Adjust settings" />
        </div>
        <div className={styles.trash}>
          <MdDeleteOutline size="25px" title="Delete" />
        </div>
      </div>
      <div className={styles.task}>
        <p className={styles["task-title"]}>Task name</p>
        <div className={styles.progress}></div>
        <div className={styles.icons}>
          <BiEdit size="25px" title="Adjust settings" />
        </div>
        <div className={styles.trash}>
          <MdDeleteOutline size="25px" title="Delete" />
        </div>
      </div>
    </div>
  );
}

export default TaskList;