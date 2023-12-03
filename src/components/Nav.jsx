import React from "react";
import { Link } from "react-router-dom";
import { putAccessToken } from "../utils/network";
import { useNavigate } from "react-router-dom";

function Nav() {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        putAccessToken(null);
        navigate("/");
    }

    return(
        <nav className="nav">
            <h1>React Note App</h1>
            <div className="nav-space">
                <Link className="link-hover" to="/app">Home</Link>
                <Link className="link-hover" to="/app/add">Add Notes</Link>
                <button className="link-logout" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
}

export default Nav;