import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function GroupMgmt() {
    return (
        <div className="information">
        <div className="container">
            <div className="row align-items-center" style={{height: '100px'}}>
                <div className="col">
                    <div>
                        <Link to="/groups/groupChecklist" className="dashboard-link">
                            <div>
                            Update groupings of users
                            </div>
                        </Link>
                    </div> 
                </div>
                <div className="col">
                    <div>
                        <Link to="/groups/displayGroups" className="dashboard-link">
                            <div>
                            Lists all groups created
                            </div>
                        </Link>
                    </div> 
                </div>
            </div>
        </div>
        </div> 

    )
}

export default GroupMgmt;