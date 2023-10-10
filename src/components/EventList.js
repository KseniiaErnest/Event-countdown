import Event from "./Event"

export default function EventList( {events} ) {
  
  return (
    <ul>
    {events.map((event) => (
      <Event event={event} key={event.id} />
    ))}
    </ul>
  )
}