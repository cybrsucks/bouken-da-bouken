import React, {useEffect, useState} from "react"
import Axios from "axios"

function DisplayUserStatus() {
    const [adminView, setAdminView] = useState(false)
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        // check for admin/user
        Axios.post("http://localhost:3001/checkgroup", {groupNeeded : 'ADMIN'}, { withCredentials: true })
        .then((response) => {
            // console.log(response)
        
            if (response.data == true ){
                setAdminView(true);
            }
        })
        Axios.get("http://localhost:3001/user/displayStatus", {
            withCredentials: true
        })
        .then((response) => {
            setUserList(response.data);
        })
    },[])

    function updateStatus(username, status) {
        if (status == 1) {
            Axios.post("http://localhost:3001/user/updateStatus", {
                    username: username,
                    active: status
                }, {
                    withCredentials: true
                })
                .then((response) => {
                    alert("status 1 updated successfully")
                }).catch((err) => {
                    console.log(err)
                })
        }
        if (status == 0) {
            Axios.post("http://localhost:3001/user/updateStatus", {
                    username: username,
                    active: status
                }, {
                    withCredentials: true
                })
                .then((response) => {
                    alert("status 0 updated successfully")
                }).catch((err) => {
                    console.log(err)
                })
        }
    }

    if (adminView == true){
        return(
            <div className="information">
                <h5> <span> Admin: Update User Status </span> </h5>
                <table style ={{"textAlign": 'center'}}>
                    <tbody>
                        <tr>
                            <th> Username </th>
                            <th> Email </th>
                            <th> Status </th>
                            <th> Button </th>
                        </tr>
                        {userList.map((val) => {
                            return (
                                <tr key={val.username}>
                                    <td>{val.username}</td>
                                    <td>{val.email ? val.email : '-'}</td>
                                    <td>{val.active == 1 ? '🟢' : '🔴' }</td>
                                    <td><button onClick= {() => {updateStatus(val.username, val.active)}}> {val.active == 1 ? 'Deactivate' : 'Activate'} </button></td>
                                </tr>
                            );
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

export default DisplayUserStatus