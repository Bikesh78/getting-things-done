import React from "react";

const TaskContainer = () => {
  return (
    <div className="task-container">
      <div className="task-container-head">
        <div className="task-head-title">Completed</div>
        <div className="task-head-title">Incompleted</div>
      </div>
      <form className="task-form">
        <div className="input-container">
          <input type="text" placeholder="Add a task" />
          <button className="btn-primary">Add</button>
        </div>
        <div className="task-lists">
          {/* <input type="text" value="Create Sidebar" /> */}
          <div className="task-list">
            <input type="checkbox" name="" id="" />
            <p className="task">Create Sidebar</p>
            <button className="btn-primary">Edit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskContainer;
