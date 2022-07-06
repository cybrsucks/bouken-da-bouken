import React, { useState, useEffect } from "react"
import Axios from "axios"

function UserPartial({user}) {
    const [groupArray, setGroupArray] = useState([]);
    const [currentGroup, setCurrentGroup] = useState(user.groupings);

    // const UpdateGroup = (e) => {
    //     e.preventDefault();
    const UpdateGroup = () => {
        console.log(user); // user object
        console.log(currentGroup) // updated state of userGroupings
        const userGroupings = user.groupings; // original state of userGroupings
        // alert(userGroupings);
        Axios.post("http://localhost:3001/groups/updateGroups", {
                username: user.username,
                groupings: currentGroup
            }, {
                withCredentials: true
            })
            .then((response) => {
                console.log(response.data);
                alert(response.data);
            })
    }

    // e = change in checkbox, 
    // e.target.value = ADMIN   /  G1   /  G2 
    
    const onChangeHandler = (e) => {
        // group = ['ADMIN','G1']
        // currentGroup = 'ADMIN,G1'
        let group = currentGroup.split(",");
        if (group.includes(e.target.value)){
            group.splice(group.indexOf(e.target.value), 1)
        }else{
            group.push(e.target.value)
        }
        setCurrentGroup(group.join(',')) 
    }

    useEffect (() => {
        Axios.get("http://localhost:3001/groups/displayGroups", { withCredentials: true })
        .then((response) => {
            let longGroup = [];
            response.data.forEach((data) => {longGroup.push(data.groupName)})
            setGroupArray(longGroup)
        })
    })

    return (

            <form key={user.username}>
                <div className="user">
                    <p><span style={{fontWeight: "bold"}}>Username:</span> {user.username}</p>
                    {groupArray.map((group) => {
                        return(
                            <div key={group}>
                                <label> {group} </label>
                                <input type="checkbox" value={group} defaultChecked={user.groupings.split(",").includes(group)} key={user} onChange={onChangeHandler}/>
                            </div>
                        )
                    })} 
                    <p><span style={{fontWeight: "bold"}}>Status:</span> {user.active == 1 ? '🟢' : '🔴' } </p>
                    <button type="submit" onClick={UpdateGroup}>Sus</button>
                </div>
            </form>

    )
}

export default UserPartial