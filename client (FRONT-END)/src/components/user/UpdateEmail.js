import React, { useState } from "react"
import Axios from "axios"

// function fetchUserDetails() {
//     Axios.get("http://localhost:3001/userDetails", { withCredentials: true })
//         .then((response) => {
//             console.log(response.data);
//             console.log("fdyjugujhgui");
//             document.getElementById("userDeets-username").innerHTML = response.data.username;
//             document.getElementById("userDeets-email").innerHTML = response.data.email;
//     })
// }

function UpdateEmail() {
    Axios.get("http://localhost:3001/userDetails", { withCredentials: true })
        .then((response) => {
            console.log(response.data);
            console.log("fdyjugujhgui");
            document.getElementById("userDeets-username").innerHTML = response.data.username;
            document.getElementById("userDeets-email").innerHTML = response.data.email;
    })

    // const [userDetails, showUserDetails] = useState([]);


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
        {/* <button onClick={fetchUserDetails}>Display User Details</button>  */}
        <h5> <span> user details </span> </h5>
        <h6> Username : <span id="userDeets-username">  </span> </h6>
        <h6> Email : <span id="userDeets-email">  </span> </h6>
        </div> 
        )
    }

export default UpdateEmail