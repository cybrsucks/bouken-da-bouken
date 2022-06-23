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
                <p>{val.id}</p>
                <p>{val.username}</p>
                <p>{val.age}</p>
                <p>{val.email}</p>
                <p>{val.password}</p>
            </div>
            );
        })}
    </div> 
    )

}

export default GetUsers