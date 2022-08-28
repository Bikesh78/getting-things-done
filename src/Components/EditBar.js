import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const EditBar = () => {
  const { state, dispatch } = useContext(AppContext);
  const { editedTask } = state;
  const [taskName, setTaskName] = useState(editedTask[0].taskName);
  const [projectName, setProjectName] = useState(editedTask[0].projectName);
  const [taskDetail, setTaskDetail] = useState(editedTask[0].taskDetail);
  const [endDate, setEndDate] = useState(editedTask[0].endDate);
  const [context, setContext] = useState(editedTask[0].context);
  const [startDate, setStartDate] = useState(editedTask[0].startDate);
  const [givenTo, setGivenTo] = useState(editedTask[0].givenTo);
  const [isCompleted, setIsCompleted] = useState(editedTask[0].isCompleted);
  const [category, setCategory] = useState(editedTask[0].category);
  // console.log("edited task", editedTask[0].taskName);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "editTask",
      payload: {
        id: editedTask[0].id,
        taskName: taskName,
        taskDetail: taskDetail,
        projectName: projectName,
        startDate: startDate,
        endDate: endDate,
        isCompleted: isCompleted,
        context: context,
        givenTo: givenTo,
        category: category,
      },
    });
    dispatch({
      type: "showEditBar",
      payload: false,
    });
    // dispatch({ type: "saveToLocalStorage" });
    // localStorage.setItem("gtdTask", JSON.stringify(state.taskList));
  }
  // console.log(state);
  return (
    <>
      <div
        className="overlay"
        onClick={() =>
          dispatch({
            type: "showEditBar",
            payload: false,
          })
        }
      ></div>
      <div className="edit-bar">
        <div className="header">
          <h2>Edit Task</h2>
        </div>
        <form className="edit-body" onSubmit={handleSubmit}>
          <div className="task-name task-item">
            <label htmlFor="">Task</label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </div>

          <div className="task-project task-item">
            <label htmlFor="">Project</label>
            <input
              type="text"
              placeholder="Add project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <div className="task-organize task-item">
            <label htmlFor="">Category</label>
            <select
              value={category}
              onChange={(e) => {
                console.dir(e.target.value);
                setCategory(e.target.value);
              }}
            >
              <option value="inbox">Inbox</option>
              <option value="next">Next</option>
              <option value="someday">Someday</option>
              <option value="waiting-for">Waiting For</option>
              <option value="reference">Reference</option>
            </select>
          </div>
          <div className="task-date task-item">
            <label htmlFor="">Start Date </label>
            <input
              type="datetime-local"
              name=""
              id=""
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="task-due-date task-item">
            <label htmlFor="">Due Date</label>
            <input
              type="datetime-local"
              name=""
              id=""
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="task-context task-item">
            <label htmlFor="">Context</label>
            <input
              type="text"
              placeholder="Add Context"
              value={context}
              onChange={(e) => setContext(e.target.value)}
            />
          </div>
          <div className="task-given task-item">
            <label htmlFor="">Given To</label>
            <input
              type="text"
              placeholder="Add person"
              value={givenTo}
              onChange={(e) => setGivenTo(e.target.value)}
            />
          </div>
          <div className="task-status task-item">
            <label htmlFor="" style={{ display: "flex", flexBasis: "36%" }}>
              Completed
              <input
                type="checkbox"
                name=""
                id=""
                checked={isCompleted}
                onChange={(e) => setIsCompleted(e.target.checked)}
              />
            </label>
          </div>
          <div className="task-note task-item">
            <textarea
              type="text"
              placeholder="Add details"
              value={taskDetail}
              onChange={(e) => setTaskDetail(e.target.value)}
            >
              {taskDetail}
            </textarea>
          </div>
          <div className="button-container">
            <button type="submit" className="btn-primary">
              Edit
            </button>
            <button
              className="btn-secondary"
              onClick={() =>
                dispatch({
                  type: "showEditBar",
                  payload: false,
                })
              }
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditBar;
