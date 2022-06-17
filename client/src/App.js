import "./App.css";
import React from "react"
import { Routes, Route } from "react-router-dom"

// My Components
import Login from "./components/Login"
import GetUsers from "./components/GetUsers"

function App() {
  return (
    <div>    
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/getUsers" element={<GetUsers />} />
      </Routes>
    </div>
  )
}

export default App;