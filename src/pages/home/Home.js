import React from "react";
import Options from "./Options";
import styles from "./Home.module.scss";
import Controls from "../../components/Controls";
import TaskList from "../../components/TaskList";
import Timer from "./Timer";

function Home() {
  return (
    <>
      <Options />
      <div className={styles.container}>
        <Timer />
      </div>
      <button className="btn-start">Start</button>
      <Controls />
      <TaskList />
    </>
  );
}

export default Home;
