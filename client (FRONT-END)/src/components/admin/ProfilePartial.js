import React, { useState, useEffect } from "react"
import Axios from "axios"

function ProfilePartial({user}) {
    // update user email
    const [newEmail, setNewEmail] = useState('');

    const UpdateEmail = () => {
        console.log(user.username, newEmail);
        Axios.post("http://localhost:3001/adminUpdateUserEmail", { 
            username: user.username,
            email: newEmail
        },{ withCredentials: true })
            .then((response) => {
                alert("email updated successfully")
            }
        ).catch ((err) => {
            console.log(err)
        })
    } 

    // regex check function
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

    // update user password
    const [newPassword, setNewPassword] = useState('');

    const ChangePwd = () => {

        if (CheckPassword(newPassword) == false) {
            alert('wrong password format! Password length must meet the length of min 8, max 10 characters, and must comprise of at least 1 lower and uppercase letter, number, and symbols')
        }else{
            Axios.post("http://localhost:3001/adminUpdateUserPwd", { 
                username: user.username,
                password: newPassword,
            },{ withCredentials: true })
                .then((response) => {
                    alert("password changed successfully")
                }
            ).catch ((err) => {
                console.log(err)
            })
        }  
    } 

    return (
        <form key={user.username}>
            <div className="user">
                <p><span style={{fontWeight: "bold"}}>Username:</span> {user.username}</p>
                <p><span style={{fontWeight: "bold"}}>Current Email:</span> {user.email}</p>
                <p><span style={{fontWeight: "bold"}}>Current Password:</span> *****{(user.encryptedPassword).slice(-4, -1)} </p>
                <div> 
                    <input type="text" placeholder="Email" onChange={(event) => { setNewEmail(event.target.value); }}/>
                    <button onClick={() => { UpdateEmail(), window.location.reload(false)}}> Update Email </button>
                </div>
                <div> 
                    <input type="text" placeholder="Password" onChange={(event) => { setNewPassword(event.target.value); }}/>
                    <button onClick={() => { ChangePwd(), window.location.reload(false)}}> Change Password </button>
                </div>
            </div>
        </form>

    )
}

export default ProfilePartial