import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import EditBar from "./EditBar";

const TaskContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const { taskList } = state;
  // const [showEditBar, setShowEditBar] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (taskInput) {
      dispatch({
        type: "addTask",
        payload: {
          id: nanoid(),
          taskName: taskInput,
          taskDetail: "",
          projectName: "",
          startDate: "",
          endDate: "",
          isCompleted: false,
          context: "",
          givenTo: "",
        },
      });
      setTaskInput("");
    }
    console.log("state", state);
  }
  console.log("state", state);
  return (
    <div className="task-container">
      <div className="task-container-head">
        <div className="task-head-title">Completed</div>
        <div className="task-head-title">Incompleted</div>
      </div>
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Add a task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button className="btn-primary">Add</button>
        </div>
        <div className="task-lists">
          {taskList &&
            taskList.map((task) => (
              <div
                key={task.id}
                className="task-list"
                // onClick={(e) => setShowEditBar(true)}
              >
                <input type="checkbox" name="" id="" />
                <p className="task">{task.taskName}</p>
                <div className="button-container">
                  <button
                    className="btn-primary"
                    onClick={(e) => {
                      dispatch({
                        type: "showEditBar",
                        payload: true,
                      });
                      dispatch({ type: "getTaskInfo", id: task.id });
                    }}
                  >
                    Edit
                  </button>
                  <button className="btn-primary">Delete</button>
                </div>
              </div>
            ))}
        </div>
      </form>
      {state.showEditBar && <EditBar />}
    </div>
  );
};

export default TaskContainer;
