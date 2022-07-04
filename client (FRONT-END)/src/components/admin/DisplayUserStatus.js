import React, { useState } from "react"
import Axios from "axios"

function DisplayUserStatus() {
    const [userList, setUserList] = useState([]);

    Axios.get("http://localhost:3001/user/displayStatus", { withCredentials: true })
        .then((response) => {
            setUserList(response.data);
    })

    function updateStatus(username, status){
        if (status == 1){
            // console.log("aaaaaaaaaaaaaaaaaaa")
            Axios.post("http://localhost:3001/user/updateStatus", { username: username, active: status }, { withCredentials: true })
                .then((response) => {
                    alert("status 1 updated successfully")
                }
                ).catch ((err) => {
                    console.log(err)
                })
        }
        if (status == 0){
            Axios.post("http://localhost:3001/user/updateStatus", { username: username, active: status }, { withCredentials: true })
                .then((response) => {
                    alert("status 0 updated successfully")
                }
                ).catch ((err) => {
                    console.log(err)
                })
        }

    }

    return (
        <div className="information">
            <h5> <span> user details </span> </h5>

            {userList.map((val) => {
            return (
                <form key={val.username}>
                    <div className="user">
                        <p><span style={{fontWeight: "bold"}}>Username:</span> {val.username}</p>
                        <p><span style={{fontWeight: "bold"}}>Email:</span> {val.email}</p>
                        <p><span style={{fontWeight: "bold"}}>Status:</span> {val.active == 1 ? 'Active' : 'Deactivated' } </p>
                        <button style ={{"marginLeft": "450px"}} onClick= {() => {updateStatus(val.username, val.active)}}> {val.active == 1 ? 'Deactivate' : 'Activate'} </button>
                    </div>
                </form>
            );
            })}

            {/* <span id="userDeets-status">  </span> */}
            {/* <h6> Status : <input style={{height: '20px', width: '20px'}} type="checkbox" checked={newStatus} onChange={handleOnChange}/> </h6>  */}
            {/* <div> 
                <button onClick={() => { ActivateUser(), window.location.reload(false)}}> Update Status </button>
            </div> */}
        </div> 
    )
}

export default DisplayUserStatus