export default function Guest( {guest, onDeleteGuest} ) {
  return (
    <li>
<p>{guest.guestName}</p>
<p>{guest.contactInfo}</p>
<button onClick={() => onDeleteGuest(guest.guestName)}>Delete</button>
    </li>
  )
}