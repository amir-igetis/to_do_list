import Topbar from "./Topbar"
import Tasks from "./Tasks.jsx"
import Bottombar from "./Bottombar.jsx"
import { useState } from "react"
import NewTask from "./NewTask.jsx"



function App() {
  const [task, setTask] = useState([])
  function addTask(newTask) {
    setTask(prevTasks => {
      return [...prevTasks, newTask]
    });
  }

  function deleteTask(id) {
    setTask(prevTask => {
      return prevTask.filter((taskItem, index) => {
        return index != id;
      });
    });
  }
  return (
    <div>
      <Topbar />
      <NewTask onAdd={addTask} />
      {task.map((taskItem, index) => {
        return (

          <Tasks
            key={index}
            id={index}
            title={taskItem.title}
            task={taskItem.task}
            onDelete={deleteTask}
          />

        );
      })}
      <Bottombar />
    </div>
  )
}

export default App
