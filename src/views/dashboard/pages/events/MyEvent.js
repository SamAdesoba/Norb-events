import React from 'react'

const MyEvent = ({event}) => {

  return (
    <div className="event-card">
        <div className="image-container" 
        style={{
            backgroundImage :
                'url(https://images.pexels.com/photos/10402422/pexels-photo-10402422.jpeg?cs=srgb&dl=pexels-wendel-moretti-10402422.jpg&fm=jpg)'
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