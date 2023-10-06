import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleTasks = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  const deleteTasks = (index) => {
    const filterData = tasks.filter((item, i) => i !== index);
    setTasks(filterData);
  };
  return (
    <div>
      <input
        type="text"
        value={newTask}
        placeholder="Enter your Taks"
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleTasks}>Add</button>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <h1>{item}</h1>
            <button onClick={() => deleteTasks(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
