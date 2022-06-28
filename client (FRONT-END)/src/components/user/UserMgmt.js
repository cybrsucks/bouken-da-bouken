import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function UserMgmt() {
    return (
        <div className="information">
        <div className="container">
            <div className="row align-items-center" style={{height: '100px'}}>
                <div className="col">
                    <div>
                        <Link to="/user/changePassword" class="dashboard-link">
                            <div>
                            Change Password
                            </div>
                        </Link>
                    </div> 
                </div>
                <div className="col">
                    <div>
                        <Link to="/user/updateEmail" class="dashboard-link">
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

export default UserMgmt;