import React, { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskArray, setArray] = useState([]);
  const [taskArrayDone, setArrayDone] = useState([]);
  const [taskToFind, setTaskToFind] = useState("");
  const [results, setResults] = useState("");

  const deleteFromArray = task => {
    for (let i = 0; i < taskArray.length; i++)
      if (taskArray[i] === task) taskArray.splice(i, 1);
    setArray(taskArray);
  };

  const addToArrayDone = task => {
    setArrayDone([...taskArrayDone, task]);
  };

  const list = taskArray.map(task => (
    <div
      className={task[1]}
      key={task}
      // style={{ (special === "normal") ? color: "#9a4ec6" : color: "black" }}
      onClick={event => {
        // event.target.style.textDecoration = "line-through";
        deleteFromArray(task);
        addToArrayDone(task);
      }}
    >
      X {task[0]}
    </div>
  ));

  const listDone = taskArrayDone.map(task => (
    <div
      className="normal"
      key={task}
      style={{ textDecoration: "line-through", color: "red" }}
    >
      X {task[0]}
    </div>
  ));

  return (
    <div className="container">
      <h1>To-Do list</h1>
      {list}
      {listDone}
      <input
        name="input-task"
        type="text"
        placeholder="Titre de la tâche à ajouter"
        value={newTask}
        onChange={event => {
          setNewTask(event.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          if (newTask !== "") {
            setArray([...taskArray, [newTask, "normal"]]);
            setNewTask("");
          }
        }}
      >
        Ajouter une tâche
      </button>
      <hr />
      <input
        type="text"
        placeholder="Titre de la tâche active à trouver"
        value={taskToFind}
        onChange={event => {
          for (let i = 0; i < taskArray.length; i++)
            if (taskArray[i][1] === "found") {
              taskArray[i][1] = "normal";
            }
          setTaskToFind(event.target.value);
          setResults("");
        }}
      />
      <span>{results}</span>
      <button
        onClick={() => {
          if (taskArray.length === 0)
            setResults("Erreur : aucune tâche trouvée");
          else {
            for (let i = 0; i < taskArray.length; i++)
              if (taskArray[i][0] === taskToFind) taskArray[i][1] = "found";
              // setResults("Trouvé : " + taskToFind);
              else setResults('La tâche "' + taskToFind + "\" n'existe pas !");
            // list[Object.keys(list)[i]].props.style.backgroundColor = "red";
          }
          setTaskToFind("");
        }}
      >
        Trouver une tâche
      </button>
    </div>
  );
}

export default App;
