import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Login() {
    const activeCookies = Cookies.get('JWT');
    const activeUser = sessionStorage.username;
    if (activeCookies || activeUser) {
        Cookies.remove('JWT');
        sessionStorage.setItem('username', "");
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [err, setError] = useState("");

    let navigate = useNavigate();

    const Login = () => {
        if (username === "" || password === "") {
            setError("Fields are required");
            return;
        }

        Axios.post("http://localhost:3001/login", {
                username: username,
                password: password,
            }, {
                withCredentials: true
            })
            .then((response) => {
                console.log(response)
                if (sessionStorage.username === "") {
                    console.log(response.data);
                    sessionStorage.setItem('username', response.data.username);
                }
                navigate("/dashboard");
            })
            .catch((err) => {
                // console.log(err);
                // console.log(err.response.data.message)
                setError(err.response.data.message);
            });
    };

    return ( 
        <div className = "information" >
            <label> Username: </label> 
            <input type = "username" onChange = {(event) => {setUsername(event.target.value);}}/> 
            <label> Password: </label> 
            <input type = "password" onChange = {(event) => {setPassword(event.target.value);}}/> 
            <button onClick = {() => {Login(), window.location.reload}}> Login </button>
            <span style={{'color': 'red'}}>{err}</span>
        </div>
    );
}

export default Login;