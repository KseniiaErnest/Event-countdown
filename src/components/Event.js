import { useState } from "react";
import GuestForm from "./GuestFrom";
import Guest from "./Guest";
import GuestList from "./GuestList";
import TaskForm from "./TaskForm";


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

return (
<li className="event-container">
<div>
<h3>{event.name}</h3>
<p>Date: {event.date}</p>
<p>Place: {event.location}</p>
</div>

<button className="btn add-guest" onClick={handleShowGuestForm}>{showGuestFrom ? 'Close' : 'Add a Guest'}</button>
<button onClick={handleShowTask}>{showTaskList ? 'Close' : 'Add Task'}</button>

{showGuestFrom && (
  <GuestForm onAddGuest={handleAddGuest} />
)}

{showTaskList && (
  <TaskForm onAddTask={handleAddTask} />
  )}

<GuestList guestList={guestList} onDeleteGuest={handleDeleteGuest} onToggleGuest={handleToggleGuest}/>

<button className="btn delete-guest" onClick={() => onDeleteEvent(event.id)}>Delete Event</button>
</li>
)
}