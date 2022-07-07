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
import UpdateUserProfile from "./components/admin/UpdateUserProfile";
import CreateGroup from "./components/admin/CreateGroup";

function App() {
  return (
    <><Header />
    <div>
      <Routes>
        <Route path="/" element={<Login />} />     
        <Route path="/login" element={<Login />} />
        <Route path="/getUsers" element={<GetUsers />} />
        
        <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/user/updateEmail" element={<UpdateEmail />} />
            <Route path="/user/changePassword" element={<ChangePwd />} />
            
            <Route path="/user/manage" element={<UserMgmt />} />
            <Route path="/user/create" element={<CreateUser />} />
            <Route path="/user/displayStatus" element={<DisplayUserStatus />} />
            <Route path="/user/updateUserProfile" element={<UpdateUserProfile />} />
            <Route path="/groups/displayGroups" element={<DisplayGroups /> }/>
            <Route path="/groups/groupChecklist" element={<GroupChecklist /> }/>
            <Route path="/groups/manage" element={<GroupMgmt /> }/>
            <Route path="/group/create" element={<CreateGroup />} />
        </Route>
      </Routes>
    </div></>
  )
}

export default App;
