import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Sidebar = () => {
  const { state, dispatch } = useContext(AppContext);
  let projectList = [];
  let peopleList = [];
  let contextList = [];
  state.taskList.forEach((task) => {
    if (task.projectName && !projectList.includes(task.projectName)) {
      projectList.push(task.projectName);
    }
    if (task.givenTo && !peopleList.includes(task.givenTo)) {
      peopleList.push(task.givenTo);
    }
    if (task.context && !contextList.includes(task.context)) {
      contextList.push(task.context);
    }
  });
  console.log(peopleList);
  return (
    <div className="sidebar">
      <div className="menu-container">
        <div className="menu-header">Menu</div>
        <div className="items">
          <div
            className="item"
            onClick={() => dispatch({ type: "setCurrentPage", payload: "all" })}
          >
            <p>All</p>
          </div>
          <div
            className="item"
            onClick={() =>
              dispatch({ type: "setCurrentPage", payload: "inbox" })
            }
          >
            <p>Inbox</p>
          </div>
          <div
            className="item"
            onClick={() =>
              dispatch({ type: "setCurrentPage", payload: "today" })
            }
          >
            <p>Today</p>
          </div>
          <div
            className="item"
            onClick={() =>
              dispatch({ type: "setCurrentPage", payload: "next" })
            }
          >
            <p>Next</p>
          </div>
          <div
            className="item"
            onClick={() =>
              dispatch({ type: "setCurrentPage", payload: "scheduled" })
            }
          >
            <p>Scheduled</p>
          </div>
          <div
            className="item"
            onClick={() =>
              dispatch({ type: "setCurrentPage", payload: "someday" })
            }
          >
            <p>Someday</p>
          </div>
          <div
            className="item"
            onClick={() =>
              dispatch({ type: "setCurrentPage", payload: "waiting" })
            }
          >
            <p>Waiting For</p>
          </div>
          <div
            className="item"
            onClick={() =>
              dispatch({ type: "setCurrentPage", payload: "reference" })
            }
          >
            <p>Reference</p>
          </div>
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-header">Projects</div>
        <div className="items">
          {projectList &&
            projectList.map((projectName, index) => {
              return (
                <div
                  className="item"
                  key={index}
                  onClick={() =>
                    dispatch({
                      type: "setCurrentPage",
                      payload: projectName,
                    })
                  }
                >
                  <p>{projectName}</p>
                </div>
              );
            })}
          {/* <button className="btn-primary">Add/Edit Project</button> */}
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-header">People</div>
        <div className="items">
          {peopleList &&
            peopleList.map((people, index) => {
              return (
                <div
                  className="item"
                  key={index}
                  onClick={() =>
                    dispatch({
                      type: "setCurrentPage",
                      payload: people,
                    })
                  }
                >
                  <p>{people}</p>
                </div>
              );
            })}
          {/* <button className="btn-primary">Add/Edit People</button> */}
        </div>
      </div>
      <div className="menu-container">
        <div className="menu-header">Context</div>
        <div className="items">
          {contextList &&
            contextList.map((context, index) => {
              return (
                <div
                  className="item"
                  key={index}
                  onClick={() =>
                    dispatch({
                      type: "setCurrentPage",
                      payload: context,
                    })
                  }
                >
                  <p>{context}</p>
                </div>
              );
            })}
          {/* <button className="btn-primary">Add/Edit Context</button> */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
