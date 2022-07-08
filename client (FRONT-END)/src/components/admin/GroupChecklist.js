import React, { useState, useEffect } from "react"
import Axios from "axios"
import UserPartial from "./UserPartial";

function GroupChecklist() { 

    // check for admin/user
    const [adminView, setAdminView] = useState(false)
    Axios.get("http://localhost:3001/dashboard",  { withCredentials: true })
        .then((response) => {
            if (response.data == 'admin'){
                setAdminView(true);
            }
        })

    const [userList, setUserList] = useState([]);

    useEffect (() => {
        Axios.get("http://localhost:3001/groups/groupCheckList", { withCredentials: true })
            .then((response) => {
                setUserList(response.data);
            })
        },[] //okay very important, runs on mount   
    )

    if (adminView == true){
        // console.log(userList)
        return(
            <div className="information">
                <h5> <span> user details </span> </h5>

                {userList.map((val) => { // <UserPartial user={val} key={val}/>}
                return (
                    <div key={val.username}>
                    <UserPartial user={val}/>
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

export default GroupChecklist