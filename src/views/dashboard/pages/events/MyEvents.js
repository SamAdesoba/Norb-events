import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MyEvent from './MyEvent'
import './myEvents.css'


const MyEvents = () => {
  const [eventData, setEventData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3004/fakeEvents")
        .then((result) => setEventData(result.data))
        .catch((error) => console.error(error))
    }, [])
  return (
    <div className="my-events-container">
        <div className="my-events-header">
          <div className="my-events-header-filter">
            <div>
              <p>Filter By:</p>
              <input type="date" id = "filter-date"/>
            </div>   
            <div>
              <p>Search Events</p>
              <input type="search" id = "filter-search"/>
            </div>
          </div>
          <button>Create Event</button>
        </div>
        <div className="my-events-cards">
          {eventData.length > 0 
              ? eventData.map((event) => <MyEvent event={event} />)
              : <h5 style={{textAlign: "center"}}>No Event</h5>}
          
        </div>
    </div>
  )
}

export default MyEvents