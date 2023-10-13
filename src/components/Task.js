export default function Task( {task, onToggleTask, onDeleteTask} ) {
  return (
    <li className="task-container" >

    <div className="task-box">
    <input type="checkbox" value={task.completed} onChange={() => onToggleTask(task.id)} />
    <span style={task.completed ? { textDecoration: "line-through" } : {} }>{task.taskName}</span>
    </div>
    
    <div className="task-box--two">
      <span>Priority: {task.taskPriority}</span>
      <button className="btn--delete task-btn" onClick={() => onDeleteTask(task.id)}>🗑️</button>
</div>
    </li>
  )
}