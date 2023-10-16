import Guest from "./Guest"

export default function GuestList( {guestList, onDeleteGuest, onToggleGuest} ) {
  return (
    <ul className="guest-list">
    <h3>Guests</h3>
{guestList.map((guest, i) => (
  <Guest guest={guest} key={i} onDeleteGuest={onDeleteGuest} onToggleGuest={onToggleGuest} />
))}
    </ul>
  )
}