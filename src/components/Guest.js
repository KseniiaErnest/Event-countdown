export default function Guest( {guest, onDeleteGuest, onToggleGuest} ) {
  return (
    <li className="guest-container">
<p>{guest.guestName}</p>
<p>{guest.contactInfo}</p>
<input type="checkbox" value={guest.invited} onChange={() => onToggleGuest(guest.guestName)} />
<button onClick={() => onDeleteGuest(guest.guestName)}>Delete</button>
    </li>
  )
}