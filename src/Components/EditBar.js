import React from "react";

const EditBar = () => {
  return (
    <div className="edit-bar">
      <div className="header">
        <h2>Edit Task</h2>
      </div>
      <div className="edit-body">
        <div className="task-name task-item">
          <input type="text" value={"Create Sidebar"} />
        </div>
        <div className="task-note task-item">
          <textarea type="text" placeholder="Add note"></textarea>
        </div>
        <div className="task-project task-item">
          <input type="text" value={"Create Getting things done"} />
        </div>
        <div className="task-due-date task-item">
          <input
            type="datetime"
            name=""
            id=""
            value={new Date().getFullYear()}
          />
        </div>
        <div className="task-context task-item">
          <input type="text" value={"context"} />
        </div>
      </div>
    </div>
  );
};

export default EditBar;
