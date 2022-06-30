import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Login() {
    // const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [err, setError] = useState("");

    let navigate = useNavigate();

    const Login = () => {

        // if (username === "" || password === "") {
        if (email === "" || password === "") {
            setError("Fields are required");
            return;
        }

        Axios.post("http://localhost:3001/login", {
                // username: username,
                email, email,
                password: password,
            },{ withCredentials: true })
            .then((response) => {
                // remove this to disallow JWT_token in localStorage
                if (localStorage.username === "") {
                    // alert(response.data.token)
                    console.log(response.data);
                    localStorage.setItem('username', response.data.username);
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
        {/* <label> Username: </label> 
        <input type = "text" onChange = {
            (event) => {
                setName(event.target.value);
            }
        }/>  */}
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