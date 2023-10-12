export default function Task( {task, onToggleTask, onDeleteTask} ) {
  return (
    <li>
    <input type="checkbox" value={task.completed} onChange={() => onToggleTask(task.id)} />
    <span style={task.completed ? { textDecoration: "line-through" } : {} }>
      {task.taskName}
      {task.taskPriority}
      </span>

      <button onClick={() => onDeleteTask(task.id)}>Delete</button>

    </li>
  )
}