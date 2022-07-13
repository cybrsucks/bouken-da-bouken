import React, { useState, useEffect } from "react"
import Axios from "axios"

function UserPartial({user}) {
    const [groupArray, setGroupArray] = useState([]);
    const [currentGroup, setCurrentGroup] = useState(user.groupings);
    const [showCheckbox, setShowCheckbox] = useState(false);

    // const UpdateGroup = (e) => {
    //     e.preventDefault();
    const UpdateGroup = (user) => {
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
    
    const handleShowCheckbox = (e) => {
        e.preventDefault()
        setShowCheckbox(true)
    }


    return (
        
        <form key={user.username}>
            <div className="user">
                <p><span style={{fontWeight: "bold"}}>Username:</span> {user.username}</p>
                <p><span style={{fontWeight: "bold"}}>Status:</span> {user.active == 1 ? '🟢' : '🔴' } </p>
                {/* edit */}                                        
                <button onClick={handleShowCheckbox}>Update User Group</button>
                        {/* anything below here is in the popup window */}
                        {showCheckbox ? <span className="popuptext" id="myPopup">
                                {groupArray.map((group) => {
                                    return(
                                        <div className="apples">
                                        <label>{group}</label>
                                        <input type="checkbox" value={group} onChange={onChangeHandler} defaultChecked={user.groupings.split(",").includes(group)}></input>
                                        </div>
                                        
                                    )
                                })} 
                            <button type="submit" onClick={() => {UpdateGroup(user)}}>Update</button>
                            <button onClick = {() => {setShowCheckbox(false)}}>Cancel</button> 
                            <p>Changing Group for: {user.username}</p>
                        </span>
                        : <></>}
            </div>
        </form>
    )
}

export default UserPartial