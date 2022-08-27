import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu-container">
        <div className="menu-header">Menu</div>
        <div className="items">
          <div className="item">
            <p>Inbox</p>
          </div>
          <div className="item">
            <p>Today</p>
          </div>
          <div className="item">
            <p>Next</p>
          </div>
          <div className="item">
            <p>Scheduled</p>
          </div>
          <div className="item">
            <p>Someday</p>
          </div>
          <div className="item">
            <p>Waiting For</p>
          </div>
          <div className="item">
            <p>Reference</p>
          </div>
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-header">Projects</div>
        <div className="item">
          <p>Temp Project</p>
        </div>
        <button className="btn-primary">Add/Edit Project</button>
      </div>
      <div className="menu-container">
        <div className="menu-header">People</div>
        <div className="item">
          <p>Temp People</p>
        </div>
        <button className="btn-primary">Add/Edit People</button>
      </div>
      <div className="menu-container">
        <div className="menu-header">Context</div>
        <div className="item">
          <p>Temp Context</p>
        </div>
        <button className="btn-primary">Add/Edit Context</button>
      </div>
    </div>
  );
};

export default Sidebar;
