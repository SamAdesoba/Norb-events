import React, { useState } from 'react'
import Input from "../../components/reusable/Input"
import { BsFillSlashSquareFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import{addItemToEvents} from '../../redux/actions/events'


const CreateEventDetails = (props) => {
    const {setEventDetails, eventDetails} = props

    const dispatch = useDispatch()

    const [fieldError, setFieldError] = useState(
        {
            title: {message:"", error:false},
            location: {message:"", error:false},
            description: {message:"", error:false},
        }
    )

    const handleChange = (e) => {
        setEventDetails({...eventDetails, [e.target.name]: e.target.value})
    }

    const handleClick = () => {

        dispatch(addItemToEvents(eventDetails))
        console.log(eventDetails)
    }
  return (
    <>
        <Input text="title" handleChange={handleChange}
            icon={<BsFillSlashSquareFill color = "white"/>}
            label= "title" fieldError={fieldError} />

        <Input text="description" handleChange={handleChange}
            icon={<BsFillSlashSquareFill color = "white"/>}
            label= "description" fieldError={fieldError} />

        <Input text="location" handleChange={handleChange}
            icon={<BsFillSlashSquareFill color = "white"/>}
            label= "location" fieldError={fieldError} />
        
        <button onClick={handleClick}>
            Create Events
        </button>
    </>
  )
}

export default CreateEventDetails