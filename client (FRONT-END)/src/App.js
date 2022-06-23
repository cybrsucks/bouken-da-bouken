import "./App.css";
import React from "react"
import { Routes, Route } from "react-router-dom"

// My Components
import Login from "./components/Login"
import GetUsers from "./components/admin/GetUsers"
import CreateUser from "./components/admin/CreateUser"
import Header from "./components/Header"
import UpdateEmail from "./components/UpdateEmail"
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <><Header />
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user/updateEmail" element={<UpdateEmail />} />        
        <Route path="/login" element={<Login />} />
        <Route path="/getUsers" element={<GetUsers />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div></>
  )
}

export default App;