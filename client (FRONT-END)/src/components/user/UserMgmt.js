import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function UserMgmt() {
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
                <div className="col">
                    <div>
                        <Link to="/user/displayStatus" className="dashboard-link">
                            <div>
                            Update User Status
                            </div>
                        </Link>
                    </div> 
                </div>
            </div>
        </div>
        </div> 

    )
}

export default UserMgmt;