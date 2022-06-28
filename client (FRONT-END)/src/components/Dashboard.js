import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Dashboard() {
    return (
    <div className="information">
        <div className="container">
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
                        <Link to="/group/manage" className="dashboard-link">
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
}

export default Dashboard;