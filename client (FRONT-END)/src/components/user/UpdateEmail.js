import React, { useState } from "react"
import Axios from "axios"

// const [userDetails, showUserDetails] = useState([]);

function fetchUserDetails() {
    Axios.get("http://localhost:3001/userDetails", { withCredentials: true })
        .then((response) => {
            // showUserDetails(response.data);
            console.log("fdyjugujhgui")
            console.log(response.data)
    })
}

function UpdateEmail() {
    // const [userList, setUserList] = useState([]);

    // const ListUsers = () => {
    //     Axios.get("http://localhost:3001/getUsers").then((response) => {
    //         setUserList(response.data);
    //     })
    // }

    const [newEmail, setNewEmail] = useState('');

    // const UpdateEmail = () => {
    //     Axios.post("http://localhost:3001/UpdateEmail", { 
    //         email: newEmail,
    //         id: id 
    //     },{ withCredentials: true })
    //         .then((response) => {
    //             alert('what') 
    //         }
    //     ).catch ((err) => {
    //         console.log(err)
    //     })
    // } 

    return (
        <div className="information">
        <button onClick={fetchUserDetails}>Display User Details</button> 
            {/* {userDetails.map((val, key) => {
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
            })} */}
        </div> 
        )
    }

export default UpdateEmail