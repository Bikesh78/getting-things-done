import { nanoid } from "nanoid";
import React, { useContext, useEffect, useState } from "react";
import { isToday, parseISO } from "date-fns";
import { AppContext } from "../Context/AppContext";
import EditBar from "./EditBar";

const TaskContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  // const { taskList } = state;
  const [taskInput, setTaskInput] = useState("");
  // const [renderedTask, setRenderedTask] = useState([]);
  let renderedTask = [];
  const [showIncompleteTask, setShowIncompleteTask] = useState(false);

  switch (state.currentPage) {
    case "all":
      renderedTask = state.taskList;
      break;
    case "inbox":
      renderedTask =
        state.taskList &&
        state.taskList.filter(
          (task) => task.category === "inbox" || task.category === ""
        );
      break;
    case "today":
      console.log("eeeee");
      renderedTask =
        state.taskList &&
        state.taskList.filter((task) => isToday(parseISO(task.endDate)));
      break;
    case "next":
      renderedTask =
        state.taskList &&
        state.taskList.filter((task) => task.category === "next");
      break;
    case "scheduled":
      renderedTask =
        state.taskList &&
        state.taskList.filter((task) => task.startDate || task.endDate);
      break;
    case "someday":
      renderedTask =
        state.taskList &&
        state.taskList.filter((task) => task.category === "someday");
      break;
    case "waiting":
      renderedTask =
        state.taskList &&
        state.taskList.filter((task) => task.category === "waiting-for");
      break;
    case "reference":
      renderedTask =
        state.taskList &&
        state.taskList.filter((task) => task.category === "reference");
      break;
    default:
      // throw new Error(`Condition for ${state.currentPage} is not defined`);
      if (
        state.taskList.find((task) => task.projectName === state.currentPage)
      ) {
        console.log("in here", state.currentPage);
        renderedTask =
          state.taskList &&
          state.taskList.filter(
            (task) => task.projectName === state.currentPage
          );
      } else if (
        state.taskList.find((task) => task.givenTo === state.currentPage)
      ) {
        renderedTask =
          state.taskList &&
          state.taskList.filter((task) => task.givenTo === state.currentPage);
      } else if (
        state.taskList.find((task) => task.context === state.currentPage)
      ) {
        renderedTask =
          state.taskList &&
          state.taskList.filter((task) => task.context === state.currentPage);
      }
  }
  if (!showIncompleteTask) {
    renderedTask.forEach((task) => {
      console.log("dddd", task.isCompleted);
    });
    renderedTask = renderedTask.filter((task) => !task.isCompleted);
  } else {
    renderedTask = renderedTask.filter((task) => task.isCompleted);
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
          category: "",
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
                  checked={task.isCompleted}
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
