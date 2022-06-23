import React, { useState } from "react";

function Dashboard() {
    return (
    <div className="information">
    <form action="http://localhost:3000/user/management">
        <input type="submit" value="User Management" />
    </form> 
    <form action="http://localhost:3000/group/management">
        <input type="submit" value="Group Management" />
    </form> 
    </div> 
    )
}

export default Dashboard;