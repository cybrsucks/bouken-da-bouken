import "./App.css";
import React from "react"
import { Routes, Route } from "react-router-dom"

// My Components
import Login from "./components/Login"
import GetUsers from "./components/GetUsers"
import CreateUser from "./components/CreateUser"
import Header from "./components/Header"
import UpdateEmail from "./components/UpdateEmail"

function App() {
  return (
    <><Header />
    <div>
      <Routes>
        <Route path="/updateEmail" element={<UpdateEmail />} />        
        <Route path="/login" element={<Login />} />
        <Route path="/getUsers" element={<GetUsers />} />
        <Route path="/createUser" element={<CreateUser />} />
      </Routes>
    </div></>
  )
}

export default App;