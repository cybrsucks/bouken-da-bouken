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

    function ValidateEmail(mail) {
        var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (mail.match(email)) {
            return (true)
        }else{
            // alert("You have entered an invalid email address!")
            return (false)
        }
    }

    const [newEmail, setNewEmail] = useState('');

    const UpdateEmail = () => {
        if (ValidateEmail(newEmail) == false) {
            alert("You have entered an invalid email address!")
        }else{
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
    } 

    return (
        <div className="information">
        <h5> <span> User: Update Own Email </span> </h5>
        <h6> Username : <span id="userDeets-username">  </span> </h6>
        <h6> Email : <span id="userDeets-email">  </span> </h6>
        <div> 
            <input type="email" placeholder="Email" onChange={(event) => { setNewEmail(event.target.value); }}/>
            {/* <button onClick={() => { UpdateEmail()}}> Update </button> */}
            <button onClick={() => { UpdateEmail(), window.location.reload(false)}}> Update Email </button>

        </div>
        </div> 
        )
    }

export default UpdateEmail