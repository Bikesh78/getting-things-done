import { useReducer } from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import TaskContainer from "./Components/TaskContainer";
import { AppContext } from "./Context/AppContext";
import "./style.scss";

function App() {
  // const initialState = {
  //   taskList: JSON.stringify(localStorage.getItem("gtdTask")) || [],
  // };
  const initialState = {
    taskList: [
      {
        id: 1,
        taskName: "This is test name",
        takDetail: "",
        projectName: "Get healthy",
        startDate: "",
        endDate: "",
        isCompleted: false,
        context: "",
        givenTo: "",
      },
    ],
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "addTask":
        // localStorage.setItem("gtdTask", state.taskList);
        return { ...state, taskList: [...state.taskList, action.payload] };
      default:
        throw new Error(`${action.type} action is not defined`);
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Header />
      <AppContext.Provider value={{ state, dispatch }}>
        <main>
          <div className="main-content">
            <Sidebar />
            <TaskContainer />
          </div>
        </main>
      </AppContext.Provider>
    </>
  );
}

export default App;
