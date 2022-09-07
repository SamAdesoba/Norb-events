import "./App.css"
import Login from "./views/authentication/Login"
import Register from "./views/authentication/Register"
import {Routes,Route} from "react-router-dom"
import Dashboard from "./views/dashboard/Dashboard"

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App;
