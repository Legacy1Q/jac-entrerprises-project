import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EventList from './features/events/EventList';//idk api url 

import React, { useState, useEffect } from 'react';

const EventList = () => {
  const [events, setEvents] = useState([
    {
      title: "Becoming an Astronaut: How Do You Get to Space?",
      description: "Ever dreamed of becoming an astronaut? Learn about the exciting journey from Earth to Space and what it takes to make that dream come true.",
      eventType: "Educational Webinars"
    },
    {
      title: "Rocket Science 101: How Rockets Work with Dr. Smith",
      description: "Get all your science questions answered by our expert.",
      eventType: "Q&A Sessions"
    },
    {
      title: "Aliens: The Search for Life Beyond Earth Quiz Night",
      description: "Join us for a fun and interactive alien quiz.",
      eventType: "Interactive Quizzes"
    },
    {
      title:"The Hubble Telescope: A Window to the Universe" ,
      description: "Discover the Hubble Telescope's amazing contributions to astronomy and see some of the most beautiful images of our universe",
      eventType: "Educational Webinars"
    },
    {
      title:"Mars Exploration: Rovers, Landers, and Future Missions" ,
      description: "Join us for an exciting tour of Mars! Learn about the rovers that have explored the Red Planet and the plans for future missions.",
      eventType: "Panel Discussions"
    },
  ]);

  const eventTypes = [...new Set(events.map(event => event.eventType))];

  return (
    <div>
      {eventTypes.map((eventType, i) => (
        <div key={i}>
          <h1>{eventType}</h1>
          {events.filter(event => event.eventType === eventType).map((event, j) => (
            <div key={j}>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default EventList;