import React, { useState } from "react"
import Axios from "axios"

function ChangePwd() {

    Axios.get("http://localhost:3001/userDetails", { withCredentials: true })
        .then((response) => {
            console.log(response.data);
            // console.log("a21");
            document.getElementById("userDeets-username").innerHTML = response.data.username;
            // document.getElementById("userDeets-password").innerHTML = (response.data.encryptedPassword);
            document.getElementById("userDeets-password").innerHTML = (response.data.encryptedPassword).slice(-6, -1);
    })

    function CheckPassword(inputtxt) { 
        var passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
        if(inputtxt.match(passw)) { 
            // alert('Correct, try another...')
            return true;
        }else{ 
            // alert('Wrong...!')
            return false;
        }
    }

    const [newPassword, setNewPassword] = useState('');

    const ChangePwd = () => {
        if (CheckPassword(newPassword) == false) {
            alert('wrong password format! Password length must meet the length of min 8, max 10 characters, and must comprise of at least 1 lower and uppercase letter, number, and symbols')
        }else{
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
    } 



    return (
        <div className="information">
        <h5> <span> User: Change Own Password </span> </h5>
        <h6> Username : <span id="userDeets-username">  </span> </h6>
        <h6> Password : *****<span id="userDeets-password"> </span> </h6>
        <div> 
            <input type="password" placeholder="Password" onChange={(event) => { setNewPassword(event.target.value); }}/>
            <button onClick={() => { ChangePwd(), window.location.reload(false)}}> Change Password </button>
        </div>
        </div> 
        )
    }

export default ChangePwd