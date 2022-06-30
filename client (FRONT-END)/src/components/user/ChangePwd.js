import React, { useState } from "react"
import Axios from "axios"

function ChangePwd() {

    Axios.get("http://localhost:3001/userDetails", { withCredentials: true })
        .then((response) => {
            console.log(response.data);
            // console.log("a21");
            document.getElementById("userDeets-username").innerHTML = response.data.username;
            document.getElementById("userDeets-password").innerHTML = response.data.encryptedPassword;
    })

    const [newPassword, setNewPassword] = useState('');

    const ChangePwd = () => {
        Axios.post("http://localhost:3001/changePassword", { 
            password: newPassword,
        },{ withCredentials: true })
            .then((response) => {
                // console.log("this here: " + response.data)
                alert("password changed successfully")
            }
        ).catch ((err) => {
            console.log(err)
        })
    } 

    return (
        <div className="information">
        <h5> <span> user details </span> </h5>
        <h6> Username : <span id="userDeets-username">  </span> </h6>
        <h6> Password : <span id="userDeets-password"> </span> </h6>
        <div> 
            <input type="text" placeholder="Password" onChange={(event) => { setNewPassword(event.target.value); }}/>
            <button onClick={() => { ChangePwd(), window.location.reload(false)}}> Change Password </button>
        </div>
        </div> 
        )
    }

export default ChangePwd