import { useState } from "react"
import Event from "./Event"

export default function EventList( {events, onDeleteEvent, onToggleGuest} ) {
  const [openEventId, setOpenEventId] = useState(null);

  const handleToggleEvent = (eventId) => {
    setOpenEventId(openEventId === eventId ? null : eventId);
  };
  
  return (
    <ul className="event-list">
    {events.map((event) => (
      <Event event={event} key={event.id} onDeleteEvent={onDeleteEvent} onToggleGuest={onToggleGuest}
      isOpen={openEventId === event.id}
      onToggleEvent={handleToggleEvent} 
   />
    ))}
    </ul>
  )
}