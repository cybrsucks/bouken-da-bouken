import React, { useState, useEffect } from "react"
import Axios from "axios"
import ProfilePartial from "./ProfilePartial";

function UpdateUserProfile() {

    // get all user data (username, password, email)
    const [userList, setUserList] = useState([]);

    useEffect (() => {
        Axios.get("http://localhost:3001/getUserProfiles", {withCredentials: true})
            .then((response) => {
                setUserList(response.data);
            })
        },[] //okay very important, runs on mount   
    )

    return (
        <div className="information">
            <h5> <span> Admin: Update User Email/Password </span> </h5>
            {userList.map((val) => {
            return (
                <div key={val.username}>
                    <ProfilePartial user={val}/>
                </div>
            );
            })}
        </div> 
    )
}

export default UpdateUserProfile