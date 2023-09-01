import React, { useState, useEffect } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost/liveevents')//idk api url
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  return (
    <div>
      <h1>Upcoming Events</h1>
      {events.map((event, index) => (
        <div key={index}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>Date: {new Date(event.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;