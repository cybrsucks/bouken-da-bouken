import React, { useState } from "react"
import Axios from "axios"

function GetUsers() {
    const [userList, setUserList] = useState([]);

    const GetUsers = () => {
        Axios.get("http://localhost:3001/GetUsers").then((response) => {
            setUserList(response.data);
        })
    }

    
    return (
    <div className="information">
    <button onClick={GetUsers}>List User</button> 
        {userList.map((val, key) => {
        return (
            <div className="user">
                <h3>{val.username}</h3>
                <h3>{val.age}</h3>
                <h3>{val.email}</h3>
                <h3>{val.password}</h3>
            </div>
            );
        })}
    </div> 
    )

}

export default GetUsers