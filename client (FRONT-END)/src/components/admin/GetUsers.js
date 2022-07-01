import React, { useState } from "react"
import Axios from "axios"

function GetUsers() {
    const [userList, setUserList] = useState([]);

    const GetUsers = () => {
        Axios.get("http://localhost:3001/getUsers").then((response) => {
            setUserList(response.data);
        })
    }

    
    return (
    <div className="information">
    <button onClick={GetUsers}>List User</button> 
        {userList.map((val, key) => {
        return (
            <div className="user">
                <p>ID: {val.id}</p>
                <p>Username: {val.username}</p>
                <p>Email: {val.email}</p>
                <p>Password: {val.password}</p>
                <p>Status: {val.active}</p>
            </div>
            );
        })}
    </div> 
    )

}

export default GetUsers