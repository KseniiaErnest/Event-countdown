import { useState } from "react"

export default function EventDetailsFrom( {onAddEvent} ) {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handelSubmit = (e) => {
e.preventDefault();

if (!name && !date && !location) return;

const newEvent = {name, date, location, id: new Date().getTime() };

onAddEvent(newEvent);
setName('');
setDate('');
setLocation('');
  }

  return (

  <form className="event-form" onSubmit={handelSubmit}>
  
  <label>Name of the Event: 
  <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
  </label>
  
  <label>Date: 
  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
  </label>

  <label>Location: 
  <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
</label>

  <button className="btn">Add</button>
  
  </form>
  )
  }