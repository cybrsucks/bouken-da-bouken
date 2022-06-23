import React from "react"
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa";

function Header() {
    return (
    <header className="header-bar bg-primary mb-3">
    <div className=" d-flex align-items-center p-3">
        <div className="my-0 mr-md-auto font-weight-normal">
        <Link to="/" className="text-white">
            <FaHome className="FaaHome" style={{padding: '10px', fontSize: '3em', margin: '10px', marginLeft: '50px', color:'white', backgroundColor: '#224966'}}/>
        </Link>
        </div>
    </div>
    </header>
)
}

export default Header