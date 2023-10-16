import { useState } from "react"

export default function TaskForm( {onAddTask} ) {
  const [taskName, setTaskName] = useState('');
  const [taskPriority, setTaskPriority] = useState('High');

  const handleSubmitTask = (e) => {
e.preventDefault();

if (!taskName) return;

const newTask = {taskName, taskPriority, completed: false, id: new Date().getTime() };

onAddTask(newTask);
setTaskName('');
setTaskPriority('High');
  }

  return (
    <form className="form" onSubmit={handleSubmitTask}>

      <label>To-Do Task:
        <input type="text" value={taskName} onChange={(e) => setTaskName((e.target.value))} />
      </label>

<label>Priority level:
      <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
        <option value='High'>High</option>
        <option value='Medium'>Medium</option>
        <option value='Low'>Low</option>
      </select>
      </label>

<button>+</button>

    </form>
  )
}