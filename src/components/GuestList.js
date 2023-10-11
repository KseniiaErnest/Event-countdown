import Guest from "./Guest"

export default function GuestList( {guestList, onDeleteGuest} ) {
  return (
    <ul>
{guestList.map((guest) => (
  <Guest guest={guest} key={guest.name} onDeleteGuest={onDeleteGuest} />
))}
    </ul>
  )
}