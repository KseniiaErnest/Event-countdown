import { useState } from "react";
import Heading from "./Heading";
import Event from "./Event"
import EventDetailsFrom from "./EventDetailsForm";
import EventList from "./EventList";


export default function App() {
  const [events, setEvents] = useState([]);

  const handleAddEvent = (event) => {
    setEvents((currentEvents) => [...currentEvents, event]);
  };

  const handleDeleteEvent = (id) => {
    setEvents((currentEvents) => currentEvents.filter((oneEvent) => oneEvent.id !== id ))
  }


  return (
    <div className="app">
    <Heading />
      <EventDetailsFrom onAddEvent={handleAddEvent}/>
      <EventList events={events} onDeleteEvent={handleDeleteEvent}/>
    </div>
  )
}