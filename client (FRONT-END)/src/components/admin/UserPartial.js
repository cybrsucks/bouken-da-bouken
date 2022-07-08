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

    function popUpdate() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    return (
        <form key={user.username}>
            <div className="user">
                <p><span style={{fontWeight: "bold"}}>Username:</span> {user.username}</p>
                <p><span style={{fontWeight: "bold"}}>Status:</span> {user.active == 1 ? '🟢' : '🔴' } </p>
                {/* edit */}                                        
                    <div className="popup" onClick={popUpdate}>Update User Groupings
                        {/* anything below here is in the popup window */}
                        <span className="popuptext" id="myPopup">
                            <table>
                                <tbody>
                                {groupArray.map((group) => {
                                    return(
                                        <tr key={group}>
                                            <th style={{'textAlign': 'center', 'fontSize': '13px'}}> {group} </th>
                                            
                                            <td> <input type="checkbox" style={{'width': '20px', 'height': '20px', 'margin': '5px'}} value={group} defaultChecked={user.groupings.split(",").includes(group)} key={user} onChange={onChangeHandler}/> </td>
                                        </tr>
                                        
                                    )
                                })} 
                                </tbody>
                            </table>
                            <button type="submit" onClick={UpdateGroup}>Update</button>
                        </span>
                        {/* anything above here is in the popup window */}
                    </div>
            </div>
        </form>
    )
}

export default UserPartial