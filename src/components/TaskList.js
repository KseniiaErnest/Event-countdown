import Task from "./Task";

export default function TaskList( {taskList, onToggleTask, onDeleteTask} ) {
  return (
    <ul className="guest-list">
    <h3>To-Do-List</h3>
{taskList.map((task) => (
  <Task task={task} key={task.id} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask} />
))}
    </ul>
  )
}