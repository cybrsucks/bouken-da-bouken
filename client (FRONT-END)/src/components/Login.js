import React, { useState } from "react"
import Axios from "axios"

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState("");

    const Login = () => {
    if (name === "" || password === "") {
        setError("Fields are required");
        return;
    }
    Axios.post('http://localhost:3001/Login', {
        name: name,
        password: password,
    }).then(() => {
        console.log("Login Success");
        alert("Success!");
    });
    };
    


    return (
    <div className="information">
    <label>Username:</label>
        <input type="text" onChange={(event) => { setName(event.target.value) }} />
    <label>Password:</label>
        <input type="text" onChange={(event) => { setPassword(event.target.value) }} />
    <button onClick={Login}>Login</button>

    {error}
    </div>
    )
}

export default Login




