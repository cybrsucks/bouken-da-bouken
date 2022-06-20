import React, { useState } from "react"
import Axios from "axios"

function UpdateEmail() {
    const [userList, setUserList] = useState([]);

    const ListUsers = () => {
        Axios.get("http://localhost:3001/GetUsers").then((response) => {
            setUserList(response.data);
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
        <button onClick={ListUsers}>List User</button> 
            {userList.map((val, key) => {
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