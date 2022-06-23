import React, {
    useState
} from "react";
import Axios from "axios";

function Login() {
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");

    const [err, setError] = useState("");

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
                console.log(response);
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