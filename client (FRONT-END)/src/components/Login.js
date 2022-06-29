import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

function Login() {
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");

    const [err, setError] = useState("");

    let navigate = useNavigate();

    const active = Cookies.get('JWT');

    if (active) {
        useEffect(() => {
            navigate("/dashboard");
        })
    }

    const Login = () => {
        if (active) {
            useEffect(() => {
                navigate("/dashboard");
            })
        }

        if (username === "" || password === "") {
            setError("Fields are required");
            return;
        }

        Axios.post("http://localhost:3001/login", {
                username: username,
                password: password,
            },{ withCredentials: true })
            .then((response) => {
                console.log(response.data);

                // remove this to disallow JWT_token in localStorage
                if (localStorage.JWT_token === undefined) {
                    // alert(response.data.token)
                    console.log(response.data);
                    localStorage.setItem('JWT_token', "reesponse.data.token");
                    localStorage.setItem('username', "reesponse.data.username");
                }
                navigate("/dashboard");
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