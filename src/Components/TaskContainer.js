import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import EditBar from "./EditBar";

const TaskContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  // const { taskList } = state;
  const [taskInput, setTaskInput] = useState("");
  // const [renderedTask, setRenderedTask] = useState([]);
  let renderedTask = [];
  const [showIncompleteTask, setShowIncompleteTask] = useState(false);

  if (!showIncompleteTask) {
    console.log(state);
    renderedTask =
      state.taskList && state.taskList.filter((task) => !task.isCompleted);
  } else {
    renderedTask =
      state.taskList && state.taskList.filter((task) => task.isCompleted);
  }
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
  }
  console.log("state", state);
  // console.log("task list", taskList);
  // console.log("state", state);
  return (
    <div className="task-container">
      <div className="task-container-head">
        <div
          className="task-head-title"
          onClick={() => setShowIncompleteTask(false)}
        >
          Incompleted
        </div>
        <div
          className="task-head-title"
          onClick={() => setShowIncompleteTask(true)}
        >
          Completed
        </div>
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
        {renderedTask &&
          renderedTask.map((task) => (
            <div className="task-lists" key={task.id}>
              <div
                className="task-list"
                // onClick={(e) => setShowEditBar(true)}
              >
                <input
                  type="checkbox"
                  onChange={(e) =>
                    dispatch({
                      type: "changeTaskStatus",
                      id: task.id,
                      status: e.target.checked,
                    })
                  }
                />
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
                  <button
                    className="btn-primary"
                    onClick={() => {
                      dispatch({ type: "deleteTask", id: task.id });
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </form>
      {state.showEditBar && <EditBar />}
    </div>
  );
};

export default TaskContainer;
