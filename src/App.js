import React, { useState } from "react";
import "./reset.css";
import "./App.css";

// METHODE AVEC 1 SEUL TABLEAU
function App() {
  // Nouvelle tâche
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const deleteFromArray = index => {
    const newTasks = tasks.filter(name => name !== tasks[index]);
    setTasks(newTasks);
  };

  const cross = index => {
    const copy = [...tasks];
    const check = copy[index].check;
    copy[index].check = !check;
    setTasks(copy);
  };

  const list = tasks.map((taskInput, index) => (
    <li className={taskInput.check ? "check" : null} key={index}>
      <svg
        className="trash"
        onClick={() => {
          deleteFromArray(index);
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        x="0"
        y="0"
        fill="currentColor"
        enableBackground="new 0 0 470.713 470.714"
        version="1.1"
        viewBox="0 0 470.713 470.714"
        xmlSpace="preserve"
      >
        <path d="M96.01 133.456c3.884 2.676 8.163 4.332 12.619 5.292-5.324 99.039-15.803 202.436 20.416 296.978 1.742 4.545 4.938 7.389 8.604 8.846 1.26 1.762 3.052 3.326 5.637 4.479 64.729 28.746 133.522 27.487 199.892 4.459 8.674-3.012 11.314-11.243 9.735-18.256 12.604-95.928 24.562-194.694 14.67-291.43 7.83-1.725 15.147-5.027 20.586-11.075 10.745-11.959 8.679-27.345 3.387-41.068.011-3.816-1.787-7.467-5.87-9.973-1.62-1.254-3.544-2.127-5.596-2.59-29.727-12.703-61.367-19.342-93.734-22.427.569-2.892.32-6.058-1.081-9.308C275.168 24.077 255.044-3.4 226.105.345c-27.863 3.603-41.365 30.793-47.007 55.726-18.611.978-37.039 2.207-55.035 3.245-.125.005-.236.048-.36.058-.854-.109-1.722-.163-2.61-.058-19.291 2.267-35.53 11.491-43.975 29.609a18.627 18.627 0 00-1.737 7.439c-.749 2.455-.8 5.278.239 8.444 3.912 11.868 10.036 21.504 20.39 28.648zm228.095 295.089c-54.888 16.904-112.16 18.712-165.844-5.129-.815-.36-1.623-.579-2.422-.802-32.966-90.754-22.635-189.447-17.514-284.177 65.534-4.644 131.547-5.657 196.814 2.567a13.464 13.464 0 002.646 2.138c9.785 94.689-1.381 191.384-13.68 285.403zM228.662 29.693c12.937-1.676 22.006 13.327 27.591 25.111-15.449-.536-30.97-.447-46.445 0 3.14-11.385 8.637-23.791 18.854-25.111zM110.845 92.726c-1.826 1.579 4.918-2.508 2.775-1.617 1.498-.625 3.075-1.046 4.639-1.478-.358.099 4.903-.879 2.833-.64.183-.021.355-.074.536-.1.785.074 1.567.152 2.43.1 77.348-4.481 167.339-15.376 240.798 15.658.233.69.533 1.356.746 2.059a37.72 37.72 0 01.746 3.093c.016.23.031.475.057.833.02.536-.021 1.077-.041 1.612a3.77 3.77 0 01-.051.203c-.314-.053-2.468 1.498-1.59 1.331-1.63.604-3.326 1.03-5.017 1.409-.808.183-1.874.312-3.082.406-1.574-1.141-3.529-1.993-6.038-2.336-75.291-10.336-150.897-9.422-226.528-3.499-1.364.109-2.595.406-3.761.779-7.373-.104-12.075-3.682-15.157-11.263 1.424-2.391 2.917-4.138 5.705-6.55z"></path>
        <path d="M186.387 186.935c-.178-19.128-29.853-19.144-29.681 0 .437 47.81 5.949 95.075 11.873 142.453 2.338 18.732 32.044 18.961 29.681 0-5.928-47.383-11.436-94.644-11.873-142.453zM248.712 183.967c-1.026-19.032-30.709-19.136-29.681 0 2.829 52.483 4.723 105.01 10.39 157.293 2.039 18.819 31.738 19.017 29.681 0-5.668-52.283-7.566-104.81-10.39-157.293zM284.857 186.427c7.993 58.711 4.169 118.058 3.92 177.089-.081 19.139 29.595 19.134 29.681 0 .26-61.896 3.393-123.445-4.98-184.983-2.576-18.885-31.17-10.81-28.621 7.894z"></path>
      </svg>
      <p
        onClick={() => {
          cross(index);
        }}
      >
        {taskInput.name}
      </p>
      <svg
        className="yes"
        display="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        width="30"
        enableBackground="new 0 0 196.407 196.407"
        version="1.1"
        viewBox="0 0 196.407 196.407"
        xmlSpace="preserve"
      >
        <path
          fill="currentColor"
          d="M56.084 189.137c-1.735.897-3.807 1.012-5.891-1.071L2.651 139.517c-4.204-4.291-3.225-9.943 1.648-13.462 6.228-4.498 14.555-11.83 21.582-22.55 3.291-5.026 7.995-5.363 11.248-.315l11.727 18.205c3.258 5.053 7.006 11.389 9.018 10.677.816-.288 1.806-.995 2.986-2.393L156.169 9.877c3.742-4.699 9.023-4.194 11.803 1.131l27.054 51.894c2.779 5.325 1.235 12.695-3.448 16.459L69.1 177.786c-4.678 3.764-9.828 9.714-13.016 11.351z"
        ></path>
      </svg>
    </li>
  ));

  return (
    <div className="container">
      <h1>
        TRUCS À FAIRE{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          width="40"
          viewBox="0 0 512 512"
        >
          <path d="M179.2 410.4L101.9 333 374.4 60.1l77.3 77.4-272.5 272.9zm-96-38.3l56.9 57-79.2 22.3 22.3-79.3zm411.8-249L388.8 16.7c-7.7-7.7-21.2-7.7-28.9 0L58.6 318.5c-2.5 2.5-4.3 5.5-5.2 8.9l-41.6 148c-2 7.1 0 14.8 5.2 20 3.9 3.9 11.7 6.7 20 5.2l147.8-41.7c3.4-.9 6.4-2.7 8.9-5.2L495 152c8-8 8-20.9 0-28.9z"></path>
        </svg>
      </h1>
      <div className="body">
        <ul>{list}</ul>
        <form
          onSubmit={event => {
            event.preventDefault(); // `preventDefault` permet d'empecher le navigateur de recharger la page lorsqu'on valide le formulaire

            // La fonction `onSubmit` ajoutera une nouvelle tâche dans l'état `tasks`
            if (taskInput !== "") {
              // La première chose à faire est de créer une copie de `tasks car React nous interdit de modifier `tasks` directement. Nous modifierons ensuite la copie.
              const newTasks = [...tasks]; // Ici, nous utilisons le `spread operator` (...) pour créer une copie d'un tableau. `newTasks` sera une copie de `tasks`.
              // Nous modifions `newTasks` en y ajoutant une tâche
              newTasks.push({ name: taskInput, check: false });
              // Nous disons à React que l'état `tasks` est maintenant égal à `newTasks`
              setTasks(newTasks);
              setTaskInput("");
            }
          }}
        >
          <input
            type="text"
            placeholder="Nouveau truc"
            value={taskInput}
            maxlength="40"
            onChange={event => {
              setTaskInput(event.target.value);
            }}
          />
          <button className="submit" type="submit">
            + AJOUTER
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
