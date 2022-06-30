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

function App() {
  return (
    <><Header />
    <div>
      <Routes>
        <Route path="/" element={<Login />} />     
        <Route path="/login" element={<Login />} />
        <Route path="/getUsers" element={<GetUsers />} />
        <Route path="/user/create" element={<CreateUser />} />
        <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
          </ProtectedRoute> 
        }/> 
        // incomplete/TODO: logged in user can still access login input page

        <Route path="/user/manage" element={<UserMgmt />} />
        <Route path="/user/updateEmail" element={<UpdateEmail />} />
        <Route path="/user/changePassword" element={<ChangePwd />} />
        {/* <Route path="/user/changePassword" element={<ChangePassword />} /> */}
      </Routes>
    </div></>
  )
}

export default App;
