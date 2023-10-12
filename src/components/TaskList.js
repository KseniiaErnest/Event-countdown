import Task from "./Task";

export default function TaskList( {taskList, onToggleTask, onDeleteTask} ) {
  return (
    <ul>
{taskList.map((task) => (
  <Task task={task} key={task.id} onToggleTask={onToggleTask} onDeleteTask={onDeleteTask} />
))}
    </ul>
  )
}