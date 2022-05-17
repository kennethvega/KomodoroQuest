import React from "react";
import styles from "./Controls.module.scss";
import { GiProgression } from "react-icons/gi";
import { IoIosAdd } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
function Controls() {
  return (
    <div className={styles["controls-container"]}>
      <div className={styles.icons}>
        <IoIosAdd size="35px" title="Add Task" />
      </div>
      <div className={styles.icons}>
        <GiProgression size="25px" title="See performance level" />
      </div>
      <div className={styles.icons}>
        <FiSettings size="25px" title="Adjust settings" />
      </div>
    </div>
  );
}

export default Controls;
