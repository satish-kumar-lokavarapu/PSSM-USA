import React from "react";

import LocalEventCard from "./LocalEventCard";

function Event() {
  return (
    <div className="outer-box">
      <div className="event-title">
        <h4>EVENTS</h4>
        <div className="Location">
          <label>Local Events</label>
          <select className="city">
            <option value="Atlanta">Atlanta</option>
            <option value="New Jersey">New Jersey</option>
            <option value="Dallas">Dallas</option>
          </select>
        </div>
      </div>
      <div className="local-events">
        <LocalEventCard />
        <LocalEventCard />
        <LocalEventCard />
        <LocalEventCard />
      </div>
      <hr />
      <div className="event-title">
        <label>USA Events</label>
      </div>
      <div className="local-events">
        <LocalEventCard />
        <LocalEventCard />
        <LocalEventCard />
        <LocalEventCard />
      </div>
    </div>
  );
}

export default Event;
