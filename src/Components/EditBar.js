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
  const [startDate, setStartDate] = useState("");
  const [givenTo, setGivenTo] = useState("");
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
        isCompleted: false,
        context: context,
        givenTo: "",
      },
    });
    dispatch({
      type: "showEditBar",
      payload: false,
    });
  }
  console.log(state);
  return (
    <div className="edit-bar">
      <div className="header">
        <h2>Edit Task</h2>
      </div>
      <form className="edit-body" onSubmit={handleSubmit}>
        <div className="task-name task-item">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div className="task-note task-item">
          <textarea
            type="text"
            placeholder="Add note"
            value={taskDetail}
            onChange={(e) => setTaskDetail(e.target.value)}
          >
            {taskDetail}
          </textarea>
        </div>
        <div className="task-project task-item">
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className="task-due-date task-item">
          <input
            type="datetime-local"
            name=""
            id=""
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="task-context task-item">
          <input
            type="text"
            value={context}
            onChange={(e) => setContext(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditBar;
