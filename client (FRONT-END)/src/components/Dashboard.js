import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios"

function Dashboard() {

    // check for admin/user
    const [adminView, setAdminView] = useState(false)
    useEffect(() => {
        Axios.post("http://localhost:3001/checkgroup", {groupNeeded : 'ADMIN'}, { withCredentials: true })
        .then((response) => {
            // console.log(response)        
            document.getElementById("welcomeBanner").innerHTML = sessionStorage.getItem("username");
            if (response.data == true ){
                setAdminView(true);
            }
        })
    },[])


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