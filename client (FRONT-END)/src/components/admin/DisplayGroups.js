import React, { useState } from "react"
import Axios from "axios"

function DisplayGroups() {

    // check for admin/user
    const [adminView, setAdminView] = useState(false)
    Axios.get("http://localhost:3001/dashboard",  { withCredentials: true })
        .then((response) => {
            if (response.data == 'admin'){
                setAdminView(true);
            }
        })

    const [usergroupList, setUsergroupList] = useState([]);
    const [userList, setUserList] = useState([]);

    Axios.get("http://localhost:3001/groups/displayGroups", {
            withCredentials: true
        })
        .then((response) => {
            setUsergroupList(response.data);
        })

    if (adminView == true){
        return(
            <div className="information">
                <h5> <span> Admin: Display User Groups </span> </h5>
                    <table className="table borderBlack" style={{'textAlign': 'center', 'width': '20%'}}>
                        <thead>
                        <tr className="borderBlack">
                            <th className="borderBlack" scope="row">GroupID</th>
                            <th className="borderBlack" scope="row">Group Name</th>
                        </tr>
                        </thead>
                        <tbody>
                            {usergroupList.map((val) => {
                                return(
                                    <tr key={val.groupID} className="tab-design borderBlack"> 
                                        <td className="tab-design borderBlack">{val.groupID}</td>
                                        <td className="tab-design borderBlack" id="groupLinks"> {val.groupName}</td>
                                    </tr>
                                )
                            })}
                        </tbody>   
                    </table>
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

export default DisplayGroups