import React from "react"
import { Link } from "react-router-dom"
import { FaHome, TbLogout  } from "react-icons/fa";

function Header() {
    return (
    <header className="header-bar bg-primary mb-3">
    <div className=" d-flex align-items-center p-3" style={{height: '60px', backgroundColor: '#1b3a52'}}>
        <div className="my-0 mr-md-auto font-weight-normal hover-link">
        <Link to="/" className="text-white">
            <FaHome style={{padding: '10px', fontSize: '3.5em', margin: '10px', marginLeft: '50px', color:'white', backgroundColor: '#2a5a81'}}/>
        </Link>
        </div>
        <div className="my-0 mr-md-auto font-weight-normal hover-link">
        <Link to="/logout" className="text-white">
            <p> Logout </p>
        </Link>
        </div>
    </div>
    </header>
)
}

export default Header