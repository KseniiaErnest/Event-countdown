export default function Guest( {guest, onDeleteGuest, onToggleGuest} ) {
  
  const handleCheckboxChange = () => {
    onToggleGuest(guest.guestName);
  };

  return (
    <li className={ guest.invited ? "guest-container checked" : "guest-container"}>
<div className="guest-box">
<input
          type="checkbox"
          checked={guest.invited}
          onChange={handleCheckboxChange}
        />
<span>{guest.guestName}</span>
<span>{guest.contactInfo}</span>
</div>
<div>

<button className={ guest.invited ? "btn--delete checked" : "btn--delete"} onClick={() => onDeleteGuest(guest.guestName)}>🗑️</button>
</div>
    </li>
  )
}

