import React, { useState } from "react";
import FormAddModal from "./FormAddModal";
import Select from "react-select";
// import styles from "./AddForm.module.scss";

// dummy categories
const categories = [{ value: "pomodoro", label: "Pomodoro" }];
function AddForm() {
  const [taskName, setTaskName] = useState("");
  const [duration, setDuration] = useState("");

  return <FormAddModal></FormAddModal>;
}

export default AddForm;
