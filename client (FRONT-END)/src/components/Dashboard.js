import React, { useState } from "react";

function Dashboard() {
    return (
    <div className="information">
        <div class="container">
            <div class="row align-items-center" style={{height: '100px'}}>
                <div class="col">
                    <form action="http://localhost:3000/user/management">
                        <input type="submit" value="User Management" style={{height: '50px'}}/>
                    </form> 
                </div>
                <div class="col">
                    <form action="http://localhost:3000/group/management">
                        <input type="submit" value="Group Management" style={{height: '50px'}}/>
                    </form> 
                </div>
            </div>
        </div>
    </div> 
    )
}

export default Dashboard;