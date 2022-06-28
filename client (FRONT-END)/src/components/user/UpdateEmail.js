import React, { useState } from "react"
import Axios from "axios"

function UpdateEmail() {
    // const [userList, setUserList] = useState([]);

    // const ListUsers = () => {
    //     Axios.get("http://localhost:3001/getUsers").then((response) => {
    //         setUserList(response.data);
    //     })
    // }

    const [userDetails, showUserDetails] = useState([]);
    const currentUser = localStorage.getItem("currentUser");
    const UserDetails = () => {
        Axios.get("http://localhost:3001/userDetails", {params: {currentUser: currentUser}}).then((response) => {
            showUserDetails(response.data);
        })
    }

    const [newEmail, setNewEmail] = useState('');

    const UpdateEmail = (id) => {
        Axios.post("http://localhost:3001/UpdateEmail", { email: newEmail, id: id }).then(
            (response) => {
                alert('what') 
            }
        ).catch ((err) => {
            console.log(err)
        })
    } 

    return (
        <div className="information">
        <button onClick={UserDetails}>Display User Details</button> 
            {userDetails.map((val, key) => {
            return (
                <div className="user" key={key}>
                    <div>
                        <p>{val.id}</p>
                        <p>{val.username}</p>
                        <p>{val.age}</p>
                        <p>{val.email}</p>
                        <p>{val.password}</p>
                    </div>
                    <div> 
                        <input type="text" placeholder="Email" onChange={(event) => { setNewEmail(event.target.value); }}/>
                        <button onClick={() => {UpdateEmail(val.id)}}> Update </button>
                    </div>
                </div>
                );
            })}
        </div> 
        )
    }

export default UpdateEmail