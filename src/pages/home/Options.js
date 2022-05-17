import React from "react";
import styles from "./Options.module.scss";
function Options({ stage, switchStage, getTickingTime }) {
  const options = ["Pomodoro", "Short Break", "Long Break"];
  return (
    <div className={styles["option-container"]}>
      <div className={styles.options}>
        {options.map((option, index) => {
          return (
            <h2
              key={index}
              className={styles[`${index === stage ? "active-text" : ""}`]}
              onClick={() => switchStage(index)}
            >
              {option}
            </h2> 
          );
        })}
      </div>
    </div>
  );
}

export default Options;
