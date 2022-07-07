import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios"

function Dashboard() {

    // check for admin/user
    const [adminView, setAdminView] = useState(false)
    Axios.get("http://localhost:3001/dashboard",  { withCredentials: true })
        .then((response) => {
            document.getElementById("welcomeBanner").innerHTML = response.data;
            if (response.data == 'admin'){
                setAdminView(true);
            }
        })

    if (adminView == true){
        return(
            <div className="information">
                <div className="container">
                    <h5> Welcome, <span id="welcomeBanner"> username </span> ! </h5>
                    <div className="row align-items-center" style={{height: '100px'}}>
                        <div className="col">
                            <div>
                                <Link to="/user/manage/" className="dashboard-link">
                                    <div>
                                    User Management 
                                    </div>
                                </Link>
                            </div> 
                        </div>
                        <div className="col">
                            <div>
                                <Link to="/groups/manage" className="dashboard-link">
                                    <div>
                                    Group Management 
                                    </div>
                                </Link>
                            </div> 
                        </div>
                    </div>
                </div>
            </div> 
        )
    }else{
        return (
            <div className="information">
                <div className="container">
                    <h5> Welcome, <span id="welcomeBanner"> username </span> ! </h5>
                    <div className="row align-items-center" style={{height: '100px'}}>
                        <div className="col">
                            <div>
                                <Link to="/user/manage/" className="dashboard-link">
                                    <div>
                                    User Management 
                                    </div>
                                </Link>
                            </div> 
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Dashboard