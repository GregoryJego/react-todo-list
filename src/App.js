import React, { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskArray, setArray] = useState([]);
  const [done, setDone] = useState([false]);

  const list = taskArray.map(task => (
    <div
      className="task"
      key={task}
      onClick={event => {
        event.target.style.textDecoration = "line-through";
      }}
    >
      X {task}
    </div>
  ));
  return (
    <div className="container">
      <h1>To-Do list</h1>
      {list}
      <input
        name="input-task"
        type="text"
        placeholder="Titre"
        onChange={event => {
          setNewTask(event.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          setArray([...taskArray, newTask]);
        }}
      >
        Ajouter une tâche
      </button>
    </div>
  );
}

export default App;
