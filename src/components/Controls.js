import React from "react";
import styles from "./Controls.module.scss";
import { GiProgression } from "react-icons/gi";
import { IoIosAdd } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
function Controls({ onShowModal }) {
  return (
    <div className={styles["controls-container"]}>
      <Tippy content="Add a task">
        <div>
          <IoIosAdd
            size="35px"
            onClick={onShowModal}
            className={styles.icons}
          />
        </div>
      </Tippy>
      <Tippy content="See performance level">
        <div>
          <GiProgression className={styles.icons} size="25px" />
        </div>
      </Tippy>
      <Tippy content="Settings">
        <div>
          <FiSettings size="25px" className={styles.icons} />
        </div>
      </Tippy>
    </div>
  );
}

export default Controls;
