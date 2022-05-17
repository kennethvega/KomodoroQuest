import React, { useState } from "react";
import Options from "./Options";
import styles from "./Home.module.scss";
import Controls from "../../components/Controls";
import TaskList from "../../components/TaskList";
import Timer from "./Timer";
import Footer from "../../components/Footer";
import AddForm from "../../components/modal/AddForm";

function Home() {
  const [pomodoro, setPomodoro] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);
  const [stage, setStage] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);

  console.log(stage);
  const switchStage = (index) => {
    setStage(index);
  };
  const getTickingTime = () => {
    const timeStage = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak,
    };
    return timeStage[stage];
  };
  const colorTheme = () => {
    if (stage === 0) {
      return "#249C6B";
    }
    if (stage === 1) {
      return "#58249C";
    }
    if (stage === 2) {
      return "#B70233";
    }
  };
  return (
    <>
      <Options stage={stage} switchStage={switchStage} />
      <div className={styles.container} style={{ background: colorTheme() }}>
        <Timer
          getTickingTime={getTickingTime}
          seconds={seconds}
          hours={hours}
        />
      </div>

      <button className="btn-start" style={{ background: colorTheme() }}>
        Start
      </button>
      {/* <AddForm /> */}
      <Controls />
      <TaskList />
      <Footer />
    </>
  );
}

export default Home;
