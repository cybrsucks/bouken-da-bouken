import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Login() {
    const activeCookies = Cookies.get('JWT');
    if (activeCookies) {
        Cookies.remove('JWT');
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [err, setError] = useState("");

    let navigate = useNavigate();

    const Login = () => {
        if (email === "" || password === "") {
            setError("Fields are required");
            return;
        }

        Axios.post("http://localhost:3001/login", {
                email: email,
                password: password,
            })
            .then((response) => {
                console.log(response)
                if (sessionStorage.username === "") {
                    console.log(response.data);
                    sessionStorage.setItem('username', response.data.username);
                    sessionStorage.setItem('JWT', response.data.token)
                }
                navigate("/dashboard");
            })
            .catch((err) => {
                console.log(err);
                setError("Incorrect email/password");
            });
    };

    return ( 
        <div className = "information" >
            <label> Email: </label> 
            <input type = "email" onChange = {(event) => {setEmail(event.target.value);}}/> 
            <label> Password: </label> 
            <input type = "password" onChange = {(event) => {setPassword(event.target.value);}}/> 
            <button onClick = {() => {Login(), window.location.reload}}> Login </button>
            <span style={{'color': 'red'}}>{err}</span>
        </div>
    );
}

export default Login;