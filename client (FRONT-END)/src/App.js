import "./App.css";
import React from "react"
import { Routes, Route } from "react-router-dom"

// My Components
import Login from "./components/Login"
import GetUsers from "./components/admin/GetUsers"
import CreateUser from "./components/admin/CreateUser"
import Header from "./components/Header"
import UpdateEmail from "./components/user/UpdateEmail"
import ChangePwd from "./components/user/ChangePwd"
import Dashboard from "./components/Dashboard";
import UserMgmt from "./components/user/UserMgmt";
import ProtectedRoute from "./components/ProtectedRoute";
import DisplayUserStatus from "./components/admin/DisplayUserStatus";

function App() {
  return (
    <><Header />
    <div>
      <Routes>
        <Route path="/" element={<Login />} />     
        <Route path="/login" element={<Login />} />
        <Route path="/getUsers" element={<GetUsers />} />
        
        
        <Route path="/dashboard" 
          element={<ProtectedRoute>  <Dashboard />  </ProtectedRoute>}/> 
        <Route path="/user/create" 
          element={<ProtectedRoute>  <CreateUser />  </ProtectedRoute>} />
        <Route path="/user/displayStatus" 
          element={<ProtectedRoute>  <DisplayUserStatus />  </ProtectedRoute>} />


        // incomplete/TODO: logged in user can still access login input page

        <Route path="/user/manage" element={<UserMgmt />} />
        <Route path="/user/updateEmail" element={<UpdateEmail />} />
        <Route path="/user/changePassword" element={<ChangePwd />} />
      </Routes>
    </div></>
  )
}

export default App;
