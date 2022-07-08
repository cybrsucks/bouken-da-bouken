import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Axios from "axios"

function GroupMgmt() {

    // check for admin/user
    const [adminView, setAdminView] = useState(false)

    Axios.post("http://localhost:3001/checkgroup", {groupNeeded : 'ADMIN'}, { withCredentials: true })
        .then((response) => {
            // console.log(response)
        
            if (response.data == true ){
                setAdminView(true);
            }
        })

    if (adminView == true){
        return(
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
                        <div className="col">
                            <div>
                                <Link to="/group/create" className="dashboard-link">
                                    <div>
                                    Create a new group
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
                <h5> <span>🚨 Access Denied 🚨</span> </h5>
            </div> 
        )
    }
}

export default GroupMgmt;