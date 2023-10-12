import { useState } from "react";
import GuestForm from "./GuestFrom";
import Guest from "./Guest";
import GuestList from "./GuestList";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";


export default function Event( {event, onDeleteEvent} ) {
  const [showGuestFrom, setShowGuestFrom] = useState(false);
  const [showTaskList, setShowTaskList] = useState(false);

  const [guestList, setGuestList] = useState([]);
  const [taskList, setTaskList] = useState([]);

  // Guest
  const handleShowGuestForm = () => {
    setShowGuestFrom((show) => !show);
  };
  const handleAddGuest = (newGuest) => {
    setGuestList((currentGuest) => [...currentGuest, newGuest]);
  };
  const handleDeleteGuest = (guestName) => {
setGuestList((currentGuests) => currentGuests.filter((guest) => guest.guestName !== guestName));
  };
  const handleToggleGuest = (guestName) => {
setGuestList((currentGuests) => currentGuests.map((guest) => guest.guestName === guestName ? {...guest, invited: !guest.invited} : guest))
  };

  //Task
  const handleShowTask = () => {
setShowTaskList((show) => !show);
  }

  const handleAddTask = (newTask) => {
    setTaskList((currentTaskList) => [...currentTaskList, newTask]);
  };

  const handleToggleTask = (id) => {
    setTaskList((currentTaskList) => currentTaskList.map((task) => task.id === id ? {...task, completed: !task.completed} : task))
  };

  const handelDeleteTask = (id) => {
    setTaskList((currentTaskList) => currentTaskList.filter((task) => task.id !== id))
  }

return (
<li className="event-container">
<div className="event-box">

<div>
<h3>{event.name}</h3>
<p>Date: {event.date}</p>
<p>Place: {event.location}</p>
</div>

<div className="event-box--btn">
<button className="btn add-guest" onClick={handleShowGuestForm}>{showGuestFrom ? '❌' : '+💃🏻'}</button>
<button className="btn add-guest" onClick={handleShowTask}>{showTaskList ? '❌' : '+📝'}</button>
</div>

</div>

<div className="guest-task-forms-container">
{showGuestFrom && (
  <GuestForm onAddGuest={handleAddGuest} />
)}

{showTaskList && (
  <TaskForm onAddTask={handleAddTask} />
  )}
  </div>

<GuestList guestList={guestList} onDeleteGuest={handleDeleteGuest} onToggleGuest={handleToggleGuest}/>
<TaskList taskList={taskList} onToggleTask={handleToggleTask} onDeleteTask={handelDeleteTask} />

<button className="btn delete-guest" onClick={() => onDeleteEvent(event.id)}>Delete Event</button>
</li>
)
}