import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import TaskContainer from "./Components/TaskContainer";
import "./style.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="main-content">
          <Sidebar />
          <TaskContainer />
        </div>
      </main>
    </>
  );
}

export default App;
