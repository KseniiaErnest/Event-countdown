import { useState } from "react";
import GuestForm from "./GuestFrom";
import GuestList from "./GuestList";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";


export default function Event( {event, onDeleteEvent, isOpen, onToggleEvent} ) {
  const [showGuestFrom, setShowGuestFrom] = useState(false);
  const [showTaskList, setShowTaskList] = useState(false);
  const [showEvent, setShowEvent] = useState(false);

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
  };

  // Event
  // const handleShowEvent = () => {
  //   setShowEvent((show) => !show);
  // };

  const handleEventClick = (e) => {
    // Check if the click was on the event name
    if (e.target.tagName.toLowerCase() === "h3") {
      onToggleEvent(event.id);
      setShowEvent((show) => !show);
    } 
  };

 
return (
<div className="main-container">
{/* <li className={showEvent ? "event-container" : 'event--closed'}> */}
<li className={isOpen ? "event-container" : "event--closed"}>

<div className="event-box">
{/* <h3 onClick={handleShowEvent}>{event.name}</h3> */}
{/* <h3 onClick={() => onToggleEvent(event.id)}>{event.name}</h3> */}
<h3 onClick={handleEventClick}>{event.name}</h3>

{showEvent && (<div className="event-box--btn">
<button className="btn add-guest" onClick={handleShowGuestForm} disabled={showTaskList}>{showGuestFrom ? '❌' : '+💃🏻'}</button>
<button className="btn add-guest" onClick={handleShowTask} disabled={showGuestFrom}>{showTaskList ? '❌' : '+📝'}</button>
<button className="btn add-guest" onClick={() => onDeleteEvent(event.id)}>🗑️</button>

</div>)}

</div>

{showEvent && (
  <div>


<div>
<p>Date: {event.date}</p>
<p>Place: {event.location}</p>
</div>


<div className="guest-task-forms-container" style={{ height: (showGuestFrom || showTaskList) ? '45px' : '45px' }}>
{showGuestFrom && (
  <GuestForm onAddGuest={handleAddGuest} />
)}

{showTaskList && (
  <TaskForm onAddTask={handleAddTask} />
  )}
  </div>

<TaskList taskList={taskList} onToggleTask={handleToggleTask} onDeleteTask={handelDeleteTask} />

</div>

)}

</li>
{showEvent && (
  <GuestList guestList={guestList} onDeleteGuest={handleDeleteGuest} onToggleGuest={handleToggleGuest}/>
)}

</div>

)
}