import React, { useState } from "react";
import "./Assets/TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({setTasks ,edit ,setEdit}) => {

  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });
  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };
  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
 setTasks(prev => {
      return[...prev,taskData]
    })
    setTaskData({
      task: " ",
      status: "todo",
      tags: [],
    })
  
   
   
  };

  
  return (
    <header className="header">
      <form onSubmit={handleSubmit}>
        <input
        value={taskData.task}
          type="text"
          required
          name="task"
          className="task_input"
          placeholder="Enter Your Task"
          onChange={handleChange}
        />
        <div className="task_button_line">
          <div className="tags">
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selected={checkTag("JavaScript")}
              selectTag={selectTag}
            />
            <Tag
              tagName="React"
              selected={checkTag("React")}
              selectTag={selectTag}
            />
          </div>
          <div className="sele">
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="todo">To Do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
            <button
              type="submit"
              className="task_submit"
              onClick={handleSubmit}
            >
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
 