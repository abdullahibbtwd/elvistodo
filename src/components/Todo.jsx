import React, { useState, useEffect } from "react";
import "../components/Assets/Todo.css";
import TaskForm from "./TaskForm";
import TaskColumn from "./TaskColumn";
import Direct from "../components/Assets/TodoAsset/direct.png";
import Done from "../components/Assets/TodoAsset/done.png";
import Fire from "../components/Assets/TodoAsset/fire.png";
import Glowing from "../components/Assets/TodoAsset/glowing star.png";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const Todo = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };


  return (
    <div className="app">
      <TaskForm setTasks={setTasks}  />
      <main className="app_main">
        <TaskColumn
          icon={Direct}
          headName="To Do"
          tasks={tasks}
          status="todo"
          handleDelete={handleDelete}
     
        />
        <TaskColumn
          icon={Glowing}
          headName="Doing"
          tasks={tasks}
          status="Doing"
          handleDelete={handleDelete}
       
        />
        <TaskColumn
          icon={Done}
          headName="Done"
          tasks={tasks}
          status="Done"
  
          handleDelete={handleDelete}
         
        />
      </main>
    </div>
  );
};

export default Todo;
