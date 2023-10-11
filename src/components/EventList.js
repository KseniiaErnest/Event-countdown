import Event from "./Event"

export default function EventList( {events, onDeleteEvent} ) {
  
  return (
    <ul>
    {events.map((event) => (
      <Event event={event} key={event.id} onDeleteEvent={onDeleteEvent} />
    ))}
    </ul>
  )
}