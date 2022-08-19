import React from 'react'

const MyEvent = ({event}) => {

  return (
    <div className="event-card">
        <div className="image-container" 
        style={{
            backgroundImage :
                'url(https://i.pinimg.com/736x/37/e1/39/37e139968a0c926a155fc2c2f350df8b--rihanna-bikini-august-.jpg)'
        }}>
        </div>
        <div className="event-details">
            <p>Event name</p>
            <h5>{event.title}</h5>
            <p>Event Description</p>
            <h5>{event.description}</h5>
        </div>
        <div className="event-actions">
            <button>View Details</button>

        </div>
        
    </div>
  )
}

export default MyEvent