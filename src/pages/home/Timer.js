import React, { useEffect } from "react";
import styles from "./Timer.module.scss";
function Timer({ getTickingTime, seconds, hours }) {
  const minute = getTickingTime().toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  const second = seconds.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  const hour = hours.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });

  useEffect(() => {
    const timer = setInterval(() => {}, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>
        {hour}:{minute}:{second}
      </h1>
      <div className={styles.subtitle}>
        <span>hrs</span>
        <span>min</span>
        <span>sec</span>
      </div>
    </>
  );
}

export default Timer;
