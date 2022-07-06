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
import DisplayGroups from "./components/admin/DisplayGroups";
import GroupChecklist from "./components/admin/GroupChecklist";
import GroupMgmt from "./components/admin/GroupMgmt";

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

        <Route path="/user/manage" element={<UserMgmt />} />
        <Route path="/user/updateEmail" element={<UpdateEmail />} />
        <Route path="/user/changePassword" element={<ChangePwd />} />

        <Route path="/groups/displayGroups" element={<DisplayGroups /> }/>
        <Route path="/groups/groupChecklist" element={<GroupChecklist /> }/>
        <Route path="/groups/manage" element={<GroupMgmt /> }/>
      </Routes>
    </div></>
  )
}

export default App;
