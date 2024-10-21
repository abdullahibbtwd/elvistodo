import React from "react";
import "./Assets/TaskColumn.css";
import Direct from "../components/Assets/TodoAsset/direct.png";
import Done from "../components/Assets/TodoAsset/done.png";
import Fire from "../components/Assets/TodoAsset/fire.png";
import Glowing from "../components/Assets/TodoAsset/glowing star.png";
import TaskCard from "./TaskCard";

const TaskColumn = ({ headName, icon, tasks, status, handleDelete }) => {
  return (
    <section className="task_column">
      <h3 className="task_column_heading">
        <img src={icon} className="task_column_icon"></img>
        {headName}
      </h3>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
             key={index}
              headName={task.task} 
              tags={task.tags}
              handleDelete={handleDelete}
              index={index} />
          )
      )}
    </section>
  );
};

export default TaskColumn;
