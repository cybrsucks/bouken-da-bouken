import React, { useState, useEffect } from "react"
import Axios from "axios"
import ProfilePartial from "./ProfilePartial";

function UpdateUserProfile() {

    // check for admin/user
    const [adminView, setAdminView] = useState(false)
    
    Axios.post("http://localhost:3001/checkgroup", {groupNeeded : 'ADMIN'}, { withCredentials: true })
        .then((response) => {
            // console.log(response)
        
            if (response.data == true ){
                setAdminView(true);
            }
        })

    // get all user data (username, password, email)
    const [userList, setUserList] = useState([]);

    useEffect (() => {
        Axios.get("http://localhost:3001/getUserProfiles", {withCredentials: true})
            .then((response) => {
                setUserList(response.data);
            })
        },[] //okay very important, runs on mount   
    )

    if (adminView == true){
        return(
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
    }else{
        return(
            <div className="information">
                <h5> <span>🚨 Access Denied 🚨</span> </h5>
            </div> 
        )
    }
}

export default UpdateUserProfile