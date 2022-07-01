import React, { useState } from "react"
import Axios from "axios"

function UpdateEmail() {

    Axios.get("http://localhost:3001/userDetails", { withCredentials: true })
        .then((response) => {
            // console.log(response.data);
            // console.log("a21");
            document.getElementById("userDeets-username").innerHTML = response.data.username;
            document.getElementById("userDeets-email").innerHTML = response.data.email;
    })

    const [newEmail, setNewEmail] = useState('');

    const UpdateEmail = () => {
        Axios.post("http://localhost:3001/user/updateEmail", { 
            email: newEmail
        },{ withCredentials: true })
            .then((response) => {
                // console.log("this here: " + response.data)
                alert("email updated successfully")
            }
        ).catch ((err) => {
            console.log(err)
        })
    } 

    return (
        <div className="information">
        <h5> <span> user details </span> </h5>
        <h6> Username : <span id="userDeets-username">  </span> </h6>
        <h6> Email : <span id="userDeets-email">  </span> </h6>
        <div> 
            <input type="text" placeholder="Email" onChange={(event) => { setNewEmail(event.target.value); }}/>
            {/* <button onClick={() => { UpdateEmail()}}> Update </button> */}
            <button onClick={() => { UpdateEmail(), window.location.reload(false)}}> Update Email </button>

        </div>
        </div> 
        )
    }

export default UpdateEmail