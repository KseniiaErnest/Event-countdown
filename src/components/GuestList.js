import Guest from "./Guest"

export default function GuestList( {guestList, onDeleteGuest, onToggleGuest} ) {
  return (
    <ul className="guest-list">
{guestList.map((guest) => (
  <Guest guest={guest} key={guest.name} onDeleteGuest={onDeleteGuest} onToggleGuest={onToggleGuest} />
))}
    </ul>
  )
}