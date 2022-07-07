import React, { useState } from "react"
import Axios from "axios"

function CreateUser() {

    // check for admin/user
    const [adminView, setAdminView] = useState(false)
    Axios.get("http://localhost:3001/dashboard",  { withCredentials: true })
        .then((response) => {
            if (response.data == 'admin'){
                setAdminView(true);
            }
        })

    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const CreateUser = () => {
    Axios.post('http://localhost:3001/user/create', {
        username: username,
        email: email,
        password: password,
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
                <h5> <span> Admin: Create new user </span> </h5>
                <div className="information">
                <label>Username:</label>
                    <input type="text" onChange={(event) => { setName(event.target.value) }} />
                <label>Email:</label>
                    <input type="email" onChange={(event) => { setEmail(event.target.value) }} />
                <label>Password:</label>
                    <input type="text" onChange={(event) => { setPassword(event.target.value) }} />
                <button onClick={CreateUser}>Add User</button>
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

export default CreateUser




