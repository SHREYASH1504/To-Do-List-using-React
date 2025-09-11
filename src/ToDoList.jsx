import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take Shower",
    "Walk the Dog",
  ]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => setNewTask(e.target.value);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const deleteTask = (index) =>
    setTasks(tasks.filter((_, i) => i !== index));

  const moveTask = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= tasks.length) return;

    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[newIndex]] = [
      updatedTasks[newIndex],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  };

  return (
    <div className="to-do-list">
      <h1>My To-Do List ✅</h1>

      {/* Input Section */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>

      {/* Tasks Section */}
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <div className="action-buttons">
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                ❌
              </button>
              <button
                className="move-button"
                onClick={() => moveTask(index, -1)}
              >
                ⬆
              </button>
              <button
                className="move-button"
                onClick={() => moveTask(index, 1)}
              >
                ⬇
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
