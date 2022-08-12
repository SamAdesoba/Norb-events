import React from 'react'
import "./myEvents.css"

const MyEvents = () => {
  return (
    <div className="my-events-container">
        <div className="my-events-header">
          <div className="my-events-header-filter">
              <input type="date" />
          </div>
          <div className="my-events-header-search">
          <input type="search" />
          </div>
          <button>Create Event</button>
        </div>
    </div>
  )
}

export default MyEvents