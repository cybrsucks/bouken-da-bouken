import React, { useState, useEffect } from "react"
import Axios from "axios"

function GroupChecklist() {
    const [userList, setUserList] = useState([]);
    const [groupArray, setGroupArray] = useState([]);

    useEffect (() => {
        Axios.get("http://localhost:3001/groups/displayGroups", { withCredentials: true })
        .then((response) => {
            // setUsergroupList(response.data);
            let longGroup = [];
            response.data.forEach((data) => {longGroup.push(data.groupName)})
            setGroupArray(longGroup)
            // console.log(response);
        })

        Axios.get("http://localhost:3001/groups/groupCheckList", { withCredentials: true })
            .then((response) => {
                setUserList(response.data);
                console.log(response.data);

                // let longGroup = response.data.groupings; // "ADMIN,G1,G2"
                // const GroupsinArray = longGroup.split(",");
                // setGroupArray(GroupsinArray);
            })
    },[] //okay very important, runs on mount
)
    return (
        <div className="information">
            <h5> <span> user details </span> </h5>

            {userList.map((val) => {
            return (
                <form key={val.username}>
                    <div className="user">
                        <p><span style={{fontWeight: "bold"}}>Username:</span> {val.username}</p>
                        
                        {groupArray.map((group) => {
                            console.log(groupArray)
                            return(
                                <div key={group}>
                                    <label> {group} </label>
                                    <input type="checkbox" value={group} defaultChecked={val.groupings.split(",").includes(group)} key={val}/>
                                </div>
                            )
                        })} 

                        <p><span style={{fontWeight: "bold"}}>Status:</span> {val.active == 1 ? 'Active' : 'Deactivated' } </p>
                        {/* <button style ={{"marginLeft": "450px"}} onClick= {() => {updateStatus(val.username, val.active)}}> {val.active == 1 ? 'Deactivate' : 'Activate'} </button> */}
                    </div>
                </form>
            );
            })}
        </div> 
    )
}

export default GroupChecklist