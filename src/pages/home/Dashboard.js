import React, { useEffect, useState } from "react";
import Options from "../../components/Options";
import "./Home.scss";
import Controls from "../../components/Controls";
import TaskList from "../../components/TaskList";
import Timer from "../../components/Timer";
import Footer from "../../components/Footer";
import AddForm from "../../components/modal/AddForm";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import EditTaskForm from "../../components/modal/EditTaskForm";

function Dashboard() {
  const [pomodoroMinutes, setPomodoroMinutes] = useState(0);
  const [pomodoroHours, setPomodoroHours] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [shortBreak, setShortBreak] = useState(0);
  const [longBreak, setLongBreak] = useState(0);
  const [stage, setStage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const { user } = useAuthContext();
  const [id, setId] = useState("");
  const [pomodoro, setPomodoro] = useState(0);
  const { documents, error } = useCollection("tasks", ["uid", "==", user.uid]);

  // show add and close AddForm modal
  const showModalFormHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  // show addEdit and CloseEdit edit modal
  const showModalEditHandler = () => {
    setShowEditModal(true);
  };
  const closeModalEditHandler = () => {
    setShowEditModal(false);
  };
  const switchStage = (index) => {
    setStage(index);
  };

  useEffect(() => {
    setPomodoro(+pomodoroHours * 60 + +pomodoroMinutes);
  }, [pomodoroHours, pomodoroMinutes]);
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
      {user && (
        <>
          <Options stage={stage} switchStage={switchStage} />
          <div className="container" style={{ background: colorTheme() }}>
            <Timer
              getTickingTime={getTickingTime}
              hours={pomodoroHours}
              minutes={pomodoroMinutes}
              shortBreak={shortBreak}
              longBreak={longBreak}
              second={seconds}
              setShortBreak={setShortBreak}
              setLongBreak={setLongBreak}
              stage={stage}
              setSeconds={setSeconds}
            />
          </div>
          <button className="btn-start" style={{ background: colorTheme() }}>
            Start
          </button>
          <Controls onShowModal={showModalFormHandler} />
          {documents && user && error && <p className="error">{error}</p>}
          {documents && (
            <TaskList
              tasks={documents}
              onShowModal={showModalEditHandler}
              setId={setId}
              id={id}
              setPomodoroHours={setPomodoroHours}
              setPomodoroMinutes={setPomodoroMinutes}
              setShortBreak={setShortBreak}
              setLongBreak={setLongBreak}
              setPomodoro={setPomodoro}
            />
          )}
          {showModal && <AddForm onCloseModal={closeModalHandler} />}
          {showEditModal && (
            <EditTaskForm
              onCloseModal={closeModalEditHandler}
              tasks={documents}
              id={id}
            />
          )}
          <Footer />
        </>
      )}
      {/* no user */}
    </>
  );
}
// comment to add

export default Dashboard;
