import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    // let navigate = useNavigate();
    
    // const token = localStorage.getItem("loggedIn");
    // console.log(token);

    // useEffect(() => {
    //     if (token !== 'yes'){
    //         navigate("/login");  
    //     }
    // })

    return (
    <div className="information">
        <div className="container">
            <div className="row align-items-center" style={{height: '100px'}}>
                <div className="col">
                    <form action="http://localhost:3000/user/management">
                        <input type="submit" value="User Management" style={{height: '50px'}}/>
                    </form> 
                </div>
                <div className="col">
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