

import { useState } from 'react'
import Header from './components/Header'
import {Tasks} from './components/Tasks'
import {AddTask} from './components/AddTask'
function App() {
 const [showAddTask, setShowAddTask] = useState(false)
 const[tasks, setTasks] = useState([
  {
      id:1 ,
      text: "Go to the Meusum",
      day: "5may at 12pm",
      reminder: true    

  },
  {
      id:2 ,
      text: "Play games",
      day: "5may at 07pm",
      reminder: false   

  },
  {
      id:3 ,
      text: "Read some Books",
      day: "5may at 02pm",
      reminder: true    

  }
])

//Toggle Reminder
const toggleReminder = (id) => {
 setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

//Add task 
const addTask = (task) => {
   const id = Math.floor(Math.random() * 10000) + 1

   console.log(id)

   const newTask = { id, ...task}
   setTasks([...tasks, newTask])
   
}

//Delete task
const deleteTask = (id)=> {
   setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header title={'Task Tracker'} 
              onAdd={() => setShowAddTask(!showAddTask)}
              showAdd={showAddTask}
              /> 
      {showAddTask && <AddTask onAdd={addTask}/>} 
      {tasks.length > 0 ?
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'
}
    </div>
   
  );
}



export default App;
