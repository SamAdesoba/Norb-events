import Input from "../../components/reusable/Input"
import emailIcon from "../../assets/email.svg"
import passwordIcon from "../../assets/password.svg"
import "./authentication.css"
import { useState } from "react"
import StepContainer from "../../components/authentication/register/StepContainer"
import {useNavigate} from "react-router-dom"




const Register = () => {

    let navigate = useNavigate();


    const [userInput, setUserInput] = useState({})
    const [step, setStep] = useState(1)
    const [fieldError, setFieldError] = useState(
            {
                firstName: {message: "", error:false}, 
                lastName: {message: "", error:false},
                email: {message: "", error:false},
                phoneNumber: {message: "", error:false},
                password: {message: "", error:false},
                confirmPassword: {message: "", error:false}
            }
        )

    

    const handleChange = (e) => {
        setUserInput({...userInput, [e.target.name]: e.target.value})
        checkIfFiedIsEmpty(e)
    }


    const handleClick = () => {
        console.log(userInput)
        // navigate("/login")
    }

    const checkIfFiedIsEmpty = (e) => {
        switch (e.target.name) {
            case "firstName":
                if(e.target.value === ""){
                    setFieldError({
                        ...fieldError, [e.target.name]: {
                            message: "Please enter a valid email",
                            error:true
                        }
                    })
                }else {
                    setFieldError({
                        ...fieldError, [e.target.name]: {
                            message: "",
                            error: false
                        }
                    })
                }
                break;

            case "lastName":
                if(e.target.value === ""){
                    setFieldError({
                        ...fieldError,
                        [e.target.name]:
                        {
                            message: "Please enter a password",
                            error: true
                        }
                    })
                }else {
                    setFieldError({
                        ...fieldError, [e.target.name]: {
                            message: "",
                            error: false
                        }
                    })
                }
                break;
            case "email":
            if(e.target.value === ""){
                setFieldError({
                    ...fieldError, [e.target.name]: {
                        message: "Please enter a valid email",
                        error:true
                    }
                })
            }else {
                setFieldError({
                    ...fieldError, [e.target.name]: {
                        message: "",
                        error: false
                    }
                })
            }
            break;

        case "password":
            if(e.target.value === ""){
                setFieldError({
                    ...fieldError,
                    [e.target.name]:
                    {
                        message: "Please enter a password",
                        error: true
                    }
                })
            }else {
                setFieldError({
                    ...fieldError, [e.target.name]: {
                        message: "",
                        error: false
                    }
                })
            }
            break;

        case "confirmPassword":
        if(e.target.value === ""){
            setFieldError({
                ...fieldError,
                [e.target.name]:
                {
                    message: "Please enter a password",
                    error: true
                }
            })
        }else {
            setFieldError({
                ...fieldError, [e.target.name]: {
                    message: "",
                    error: false
                }
            })
        }
        break;

            default:
                break;
        }

    }

    const checkIfItEmail = () => {

    }

    return(
        <div className="authenticationContainer">
            <div className="leftSide">
                <div className="leftSide-container">
                    <p className = "text">Don't have an account?
                        {/* <a href={getRegister}> */}
                        <a onClick={() => navigate("/login")}>
                            <span style={{
                                color: 'var(--primary_green)',
                                marginLeft: '4px'
                            }}>
                                login
                            </span>
                        </a>
                    </p>
                    <div className="welcome-text">
                        <h1>Welcome To Norbs</h1>
                        <p>We are an event management platform, 
                            aimed at helping you facilitate and run a smooth event</p>
                    </div>
                    {step === 1 && <StepContainer step={1} headerTitle = "Let's know you">

                        <Input text="text" handleChange = {handleChange} icon={emailIcon} label="firstName" fieldError = {fieldError} />
                        
                        <Input text="text" handleChange = {handleChange} icon={passwordIcon} label="lastName" fieldError = {fieldError} />

                        <Input text="text" handleChange = {handleChange} icon={emailIcon} label="email" fieldError = {fieldError} />
                    </StepContainer>}

                    {step === 2 && <StepContainer step={2} headerTitle = "Let's Secure Your Details">

                        <Input text="text" handleChange = {handleChange} icon={emailIcon} label="phoneNumber" fieldError = {fieldError} />
                        
                        <Input text="text" handleChange = {handleChange} icon={passwordIcon} label="password" fieldError = {fieldError} />

                        <Input text="text" handleChange = {handleChange} icon={emailIcon} label="confirmPassword" fieldError = {fieldError} />
                    </StepContainer>}

                    {step === 1 && 
                        <button onClick = {() => setStep(2)} style={{width: "100%"}} className="authentication-button" >
                            Next Step
                        </button>}
                    {step === 2 && 
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <button onClick = {() => setStep(1)} style={{width: "45%"}} className="authentication-button-alternate" >
                                Go Back
                            </button>
                            <button style={{width: "45%"}} className="authentication-button" onClick={handleClick}>
                                Register
                            </button>
                        </div>
                    }
                    <div className="social-media">
                        <a>
                            <div className="social-media-icon"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="rightSide">
                <div>

                </div>

            </div>
        </div>
    )
}

export default Register