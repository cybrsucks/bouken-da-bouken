import React, {useState} from "react"
import Axios from "axios"

function DisplayUserStatus() {

    // check for admin/user
    const [adminView, setAdminView] = useState(false)
    Axios.get("http://localhost:3001/dashboard",  { withCredentials: true })
        .then((response) => {
            if (response.data == 'admin'){
                setAdminView(true);
            }
        })

    const [userList, setUserList] = useState([]);

    Axios.get("http://localhost:3001/user/displayStatus", {
            withCredentials: true
        })
        .then((response) => {
            setUserList(response.data);
        })

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

                {userList.map((val) => {
                return (
                    <form key={val.username}>
                        <div className="user">
                            <p><span style={{fontWeight: "bold"}}>Username:</span> {val.username}</p>
                            <p><span style={{fontWeight: "bold"}}>Email:</span> {val.email}</p>
                            <p><span style={{fontWeight: "bold"}}>Status:</span> {val.active == 1 ? '🟢' : '🔴' } </p>
                            <button style ={{"marginLeft": "450px"}} onClick= {() => {updateStatus(val.username, val.active)}}> {val.active == 1 ? 'Deactivate' : 'Activate'} </button>
                        </div>
                    </form>
                );
                })}
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