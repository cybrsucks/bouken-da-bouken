import React, { useState } from "react"
import Axios from "axios"

function CreateGroup() {

    // check for admin/user
    const [adminView, setAdminView] = useState(false)
    Axios.get("http://localhost:3001/dashboard",  { withCredentials: true })
        .then((response) => {
            if (response.data == 'admin'){
                setAdminView(true);
            }
        })

    const [groupName, setGroupName] = useState('');

    const CreateGroup = () => {
    Axios.post('http://localhost:3001/group/create', {
        groupName: groupName
        }).then(
            () => {
                console.log("Success");
                alert("Success!");
        }).catch(
            (err) => {
                // console.log(err.response.data.message);
                alert(err.response.data.message);
        });
    };
    

    if (adminView == true){
        return(
            <div className="information">
                <h5> <span> Admin: Create new group </span> </h5>
                <div className="information">
                <label>New Group Name:</label>
                    <input type="text" onChange={(event) => { setGroupName(event.target.value) }} />
                <button onClick={CreateGroup}>Add New Group</button>
                </div>
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

export default CreateGroup
