import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };
  const addNewTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };
  const deleteBtn = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const upBtn = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };
  const downBtn = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };
  return (
    <section>
      <div className="main-con">
        <div className="wrapper">
          <h1 className="to-do-list">To-Do-List</h1>
          <div>
            <div className="input-add-btn">
              <input
                value={newTask}
                type="text"
                onChange={handleInputChange}
                placeholder="Enter Task"
              />
              <button className="add-btn" onClick={addNewTask}>
                Add
              </button>
            </div>
          </div>
          <div className="list-con">
            <ol>
              {tasks.map((task, index) => (
                <li key={index}>
                  <span className="texts">{task}</span>
                  <button
                    className="delete-btn"
                    onClick={() => deleteBtn(index)}
                  >
                    Delete
                  </button>
                  <button className="move-btn" onClick={() => upBtn(index)}>
                    👆
                  </button>
                  <button className="move-btn" onClick={() => downBtn(index)}>
                    👇
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToDoList;
