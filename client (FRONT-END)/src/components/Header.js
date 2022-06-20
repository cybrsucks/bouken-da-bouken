import React from "react"
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa";

function Header() {
    return (
    <header className="header-bar bg-primary mb-3">
    <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <div className="my-0 mr-md-auto font-weight-normal">
        <div className="container" style={{backgroundColor: '#224966'}}>
        <Link to="/" className="text-white">
                <FaHome className="FaHome" style={{padding: '10px', fontSize: '2em', margin: '10px', marginLeft: '50px', color:'white'}}/>
        </Link>
        </div>
        </div>
    </div>
    </header>
)
}

export default Header