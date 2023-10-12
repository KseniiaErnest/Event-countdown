import Event from "./Event"

export default function EventList( {events, onDeleteEvent, onToggleGuest} ) {
  
  return (
    <ul className="event-list">
    {events.map((event) => (
      <Event event={event} key={event.id} onDeleteEvent={onDeleteEvent} onToggleGuest={onToggleGuest} />
    ))}
    </ul>
  )
}