import React, { useState } from "react"
import Axios from "axios"

function DisplayGroups() {
    const [usergroupList, setUsergroupList] = useState([]);
    const [userList, setUserList] = useState([]);

    Axios.get("http://localhost:3001/groups/displayGroups", { withCredentials: true })
        .then((response) => {
            setUsergroupList(response.data);
    })

    // Axios.get("http://localhost:3001/user/displayStatus", { withCredentials: true })
    //     .then((response) => {
    //         setUserList(response.data);
    //         // console.log(response.data.username, response.data.groups);
    // })

    return (
        <div className="information">
            <h5> <span> usergroups </span> </h5>
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
}

export default DisplayGroups