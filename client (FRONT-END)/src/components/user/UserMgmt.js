import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios"

function UserMgmt() {

    // check for admin/user
    const [adminView, setAdminView] = useState(false)
    Axios.get("http://localhost:3001/dashboard",  { withCredentials: true })
        .then((response) => {
            if (response.data == 'admin'){
                setAdminView(true);
            }
        })

    if (adminView == true){
        return (
            <div className="information">
                <div className="container">
                    <div className="row align-items-center" style={{height: '100px'}}>
                        <div className="col">
                            <div>
                                <Link to="/user/changePassword" className="dashboard-link">
                                    <div>
                                    Change Password
                                    </div>
                                </Link>
                            </div> 
                        </div>
                        <div className="col">
                            <div>
                                <Link to="/user/updateEmail" className="dashboard-link">
                                    <div>
                                    Update Email
                                    </div>
                                </Link>
                            </div> 
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row align-items-center" style={{'height': '100px', 'padding-bottom': '15px'}}>
                        <div className="col">
                            <div>
                                <Link to="/user/create" className="dashboard-link">
                                    <div>
                                    Create New User
                                    </div>
                                </Link>
                            </div> 
                        </div>
                        <div className="col">
                            <div>
                                <Link to="/user/displayStatus" className="dashboard-link">
                                    <div>
                                    Update User Status
                                    </div>
                                </Link>
                            </div> 
                        </div>
                        <div className="col">
                            <div>
                                <Link to="/user/updateUserProfile" className="dashboard-link">
                                    <div>
                                    Update User Email/Password
                                    </div>
                                </Link>
                            </div> 
                        </div>
                    </div>
                </div>
            </div> 
        )
    }else{
        return(
            <div className="information">
                <div className="container">
                    <div className="row align-items-center" style={{height: '100px'}}>
                        <div className="col">
                            <div>
                                <Link to="/user/changePassword" className="dashboard-link">
                                    <div>
                                    Change Password
                                    </div>
                                </Link>
                            </div> 
                        </div>
                        <div className="col">
                            <div>
                                <Link to="/user/updateEmail" className="dashboard-link">
                                    <div>
                                    Update Email
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
export default UserMgmt