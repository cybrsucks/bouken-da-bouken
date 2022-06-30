import React from "react"
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Header() {
    const active = Cookies.get('JWT');

    let navigate = useNavigate();

    const Logout = () => {
        Axios.get("http://localhost:3001/logout", { withCredentials: true })
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('username', "");
            }
        )
        
        // localStorage.clear();
        navigate("/login");
    }

    if (active) {
        return (
            <header className="header-bar bg-primary mb-3">
                <div className=" d-flex align-items-center p-3" style={{height: '60px', backgroundColor: '#1b3a52'}}>
                    <div className="my-0 mr-md-auto font-weight-normal hover-link">
                    <Link to="/dashboard" className="text-white">
                        <FaHome style={{padding: '10px', fontSize: '3.5em', margin: '10px', marginLeft: '50px', color:'white', backgroundColor: '#2a5a81'}}/>
                    </Link>
                    </div>
                    <div className="my-0 mr-md-auto font-weight-normal hover-link">
                    {/* <Link to="/logout" className="text-white"> */}
                    <Link to="/">
                        <button onClick = {() => {Logout(), window.location.reload}}> Logout </button>
                    </Link>
                        {/* <p> Logout </p> */}
                    {/* </Link> */}
                    </div>
                </div>
            </header>
        )
    }else{
        return (
            <header className="header-bar bg-primary mb-3">
                <div className=" d-flex align-items-center p-3" style={{height: '60px', backgroundColor: '#1b3a52'}}>
                    <div className="my-0 mr-md-auto font-weight-normal hover-link">
                    <Link to="/" className="text-white">
                        <FaHome style={{padding: '10px', fontSize: '3.5em', margin: '10px', marginLeft: '50px', color:'white', backgroundColor: '#2a5a81'}}/>
                    </Link>
                    </div>
                </div>
            </header>
        )
    } 
}

export default Header