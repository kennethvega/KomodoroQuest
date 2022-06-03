import React, { useEffect } from "react";
import styles from "./Timer.module.scss";
function Timer({
  getTickingTime,
  second,
  setSeconds,
  setShortBreak,
  setLongBreak,
  stage,
  setPomodoro,
  hours,
  minutes,
}) {
  // convert minute to hours and minutes
  const hoursFormat = Math.floor(getTickingTime() / 60).toLocaleString(
    "en-US",
    {
      minimumIntegerDigits: 2,
    }
  );
  const minute = getTickingTime() % 60;
  const minutesFormat = minute.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  const secondsFormat = second.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
  });
  // need to update pomodoro, short break,long break
  const update = () => {
    
    const updateStage = {
      0: setPomodoro,
      1: setShortBreak,
      2: setLongBreak,
    };
    return update[stage];
  };
  // Count down
  const clockTicking = () => {
    if (hoursFormat === 0 && minutesFormat === 0 && secondsFormat === 0) {
      alert("Congratulation task complete");
    } else if (secondsFormat === 0) {
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {}, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <h1>
        {hoursFormat}:{minutesFormat}:{secondsFormat}
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
