import React, { useState, useEffect } from "react"
import Axios from "axios"
import UserPartial from "./UserPartial";

function GroupChecklist() { 
    const [userList, setUserList] = useState([]);

    useEffect (() => {
        Axios.get("http://localhost:3001/groups/groupCheckList", { withCredentials: true })
            .then((response) => {
                setUserList(response.data);
                // console.log(response.data);
            })
    },[] //okay very important, runs on mount   
    )


    return (
        <div className="information">
            <h5> <span> user details </span> </h5>

            {userList.map((val) => { // <UserPartial user={val} key={val}/>}
            return (
                <div key={val}>
                <UserPartial user={val}/>
                </div>
            );
            })}
        </div> 
    )
}

export default GroupChecklist