import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");

    const [err, setError] = useState("");
    const [user, setUser] = useState();

    let navigate = useNavigate();

    const Login = () => {
        if (username === "" || password === "") {
            setError("Fields are required");
            return;
        }
        Axios.post("http://localhost:3001/login", {
                username: username,
                password: password,
            })
            .then((response) => {
                console.log(response.data);
                setUser(response.data);

                if (localStorage.loggedIn === undefined) {
                    // alert(response.data.token)
                    localStorage.setItem('JWT_token', response.data.token);
                    localStorage.setItem('user', response.data.username);
                }
                navigate("/dashboard");
                // response.data;
            })
            .catch((err) => {
                console.log(err);
                setError("Incorrect username/password");
            });
    };

    return ( 
        <div className = "information" >
        <label> Username: </label> 
        <input type = "text" onChange = {
            (event) => {
                setName(event.target.value);
            }
        }/> 
        <label> Password: </label> 
        <input type = "text" onChange = {
            (event) => {
                setPassword(event.target.value);
            }
        }/> 
        <button onClick = {Login}> Login </button>

        {err} 
        </div>
    );
}

export default Login;