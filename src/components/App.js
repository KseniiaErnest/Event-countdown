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


  return (
    <div className="app">
    <Heading />
      <EventDetailsFrom onAddEvent={handleAddEvent}/>
      <EventList events={events} />
    </div>
  )
}