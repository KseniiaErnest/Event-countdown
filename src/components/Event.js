import { useState } from "react";
import GuestForm from "./GuestFrom";
import Guest from "./Guest";
import GuestList from "./GuestList";


export default function Event( {event, onDeleteEvent} ) {
  const [showGuestFrom, setShowGuestFrom] = useState(false);

  const [guestList, setGuestList] = useState([]);

  const handleShowGuestForm = () => {
    setShowGuestFrom((show) => !show);
  };

  const handleAddGuest = (newGuest) => {
    setGuestList((currentGuest) => [...currentGuest, newGuest]);
  };

  const handleDeleteGuest = (guestName) => {
setGuestList((currentGuests) => currentGuests.filter((guest) => guest.guestName !== guestName));
  };

  const handleToggleGuest = (guestName) => {
setGuestList((currentGuests) => currentGuests.map((guest) => guest.guestName === guestName ? {...guest, invited: !guest.invited} : guest))
  }

return (
<li className="event-container">
<div>
<h3>{event.name}</h3>
<p>Date: {event.date}</p>
<p>Place: {event.location}</p>
</div>

<button className="btn add-guest" onClick={handleShowGuestForm}>{showGuestFrom ? 'Close' : 'Add a Guest'}</button>

{showGuestFrom && (
  <GuestForm onAddGuest={handleAddGuest} />
)}

<GuestList guestList={guestList} onDeleteGuest={handleDeleteGuest} onToggleGuest={handleToggleGuest}/>

<button className="btn delete-guest" onClick={() => onDeleteEvent(event.id)}>Delete Event</button>
</li>
)
}