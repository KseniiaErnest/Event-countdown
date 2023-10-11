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
  }

return (
<li>
<h3>{event.name}</h3>
<p>{event.date}</p>
<p>{event.location}</p>
<button onClick={() => onDeleteEvent(event.id)}>Delete Event</button>
<button onClick={handleShowGuestForm}>{showGuestFrom ? 'Close' : 'Add a Guest'}</button>

{showGuestFrom && (
  <GuestForm onAddGuest={handleAddGuest} />
)}

<GuestList guestList={guestList} onDeleteGuest={handleDeleteGuest}/>
</li>
)
}