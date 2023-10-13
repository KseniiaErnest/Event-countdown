export default function Guest( {guest, onDeleteGuest, onToggleGuest} ) {
  return (
    <li className={ guest.invited ? "guest-container checked" : "guest-container"}>
<div className="guest-box">
<input type="checkbox" value={guest.invited} onChange={() => onToggleGuest(guest.guestName)} />
<span>{guest.guestName}</span>
<span>{guest.contactInfo}</span>
</div>
<div>

<button className={ guest.invited ? "btn--delete checked" : "btn--delete"} onClick={() => onDeleteGuest(guest.guestName)}>🗑️</button>
</div>
    </li>
  )
}

