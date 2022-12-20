import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTasks from './components/AddTasks';
import { useState } from "react"


function App() {
  const [addForm, showAddForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Appointment',
        day: '4th July, 2022',
        reminder: false
    },
    {
        id: 2,
        text: 'Crossover',
        day: '31st, December, 2021',
        reminder: true
    },
    {
        id: 3,
        text: 'Award ceremony',
        day: '4th July, 2022',
        reminder: false
    }
  ])

  // Delete task
  const deleteTask = (id) => {
      console.log(`delete ${id}`);
      setTasks(tasks.filter((task) => task.id !== id))
  } 

  // Add Task
  const addTask = () => {
    setTasks()
  }

  // Toggle task
  const formToggle = () => {
    showAddForm(!addForm)
  }

  return (
    <div className='container'>
      <Header title="Task Tracker" toggleForm={formToggle}/>
      {addForm && <AddTasks/>}
      {tasks.length <= 0 ? (<h3>No task to show</h3>) : <Tasks tasks={tasks} onDelete={deleteTask}/>}
    </div>
  )
}

export default App;
