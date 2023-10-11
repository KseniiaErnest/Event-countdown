import { useState } from "react"

export default function GuestForm( {onAddGuest} ) {
  const [guestName, setGuestName] = useState('');
  const [contactInfo, setContactInfo] = useState('');

const handleSubmitGuest = (e) => {
e.preventDefault();

if (!guestName) return;

const newGuest = {guestName, contactInfo};

onAddGuest(newGuest);
setGuestName('');
setContactInfo('');

}

  return (
    <form onSubmit={handleSubmitGuest}>
      <label>Name:
        <input type="text" value={guestName} onChange={(e) => setGuestName(e.target.value)}  />
      </label>

      <label>Contact info:
        <input type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
      </label>

      <button>Add</button>
    </form>
  )
}