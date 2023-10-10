

export default function Event( {event} ) {

return (
<li>
<h3>{event.name}</h3>
<p>{event.date}</p>
<p>{event.location}</p>
</li>
)
}