import Tasks from "./component/Tasks";
import Header from "./component/Header";
import {useState} from 'react'
import AddTask from "./component/AddTask";
function App() {
  const {tasks,setTasks} = useState([{

    id:1,
    text:'Doctors Appointment',
    day:'Feb 5th at 2:30pm',
    reminder:true

},
{
id:2,
text:'Hair Appointment',
day:'Feb 5th at 3:30pm',
reminder:true

},{

    id:3,
    text:'Dentist Appointment',
    day:'Feb 5th at 4:30pm',
    reminder:false,

}
])
const deleteTask=(id)=>{
  setTasks(tasks.filter((task)=> task.id !== id))
}

const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id === id ? {...task,reminder:!task.reminder}:task))

}

  return (
    <div className="App">
     <Header />
     <AddTask/>
    {tasks.length > 0?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:'No Tasks To Do'}
    </div>
  );
}

export default App;
