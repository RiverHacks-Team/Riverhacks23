import TaskItem from "../components/TaskItem.jsx";
import { useState } from "react";
import sampleTasks from "../json/sampleTasks.json";
import HealthDimensions from "../components/HealthDimensions.jsx";
import SaplingView from "../components/SaplingView.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Game.css';
import connection from "../api/connection.js";

function Game({font}) {
  
  const [dimension, setDimension] = useState("Physical");
  const [activeTask, setActiveTask] = useState(null);

  const tasks = sampleTasks;

  const handleChangeDimensions = (dimension) => {
    setDimension(dimension);
  };
  
  const handleToggle = (task) => {
    setActiveTask(task)
    // TODO link to api create task 
    connection.post("/tasks/create", { title: task.title, points: task.weight, catagory: "misc"}).then((res) => {console.log(res.data)})
  };

  const handlePost = (task) => {
    console.log("Task posted:", task);
    // TODO link to api create post
    connection.post("/posts/create", { title: task.title, body: task.weight, mood: "Happy"}).then((res) => {console.log(res.data)})
    setActiveTask(null)
  }

  const handleMakeTask = (task) => {
    console.log("Task made:", task);
    setActiveTask(null)
  }

  return (
    <>
    <SaplingView />
    <HealthDimensions font={font} handleChange={handleChangeDimensions}/>
    {sampleTasks[dimension].map((task) => (
        <TaskItem font={font} key={task.title} task={task} onToggle={handleToggle}/>
      ))}
    {activeTask ?
        <div style={{fontFamily:'Jost'}} className="modall">
        Do you want to publicly post this?  
        <button style={{fontFamily:'Jost'}} className="yes-btn btn" onClick={() => handlePost(activeTask)}>Yes</button>
        <button style={{fontFamily:'Jost'}} className="no-btn btn" onClick={() => handleMakeTask(activeTask)}>No</button>
      </div> : null
  }


    </>
    
  )
}

export default Game;