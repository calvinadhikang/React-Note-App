import React from "react";
import { Link } from "react-router-dom";
import { putAccessToken } from "../utils/network";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

function Nav() {
    const navigate = useNavigate();
    const { theme, changeTheme } = useTheme();
    
    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate("/");
    }

    const toggleTheme = () => {
        changeTheme(theme === "light" ? "dark" : "light");
    }

    return(
        <nav className="nav">
            <h1>React Note App</h1>
            <div className="nav-space">
                <Link className="link-hover" to="/app">Home</Link>
                <Link className="link-hover" to="/app/add">Add Notes</Link>
                <button className="link-logout" onClick={handleLogout}>Logout</button>
                <button className="btn-theme" onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </nav>
    );
}

export default Nav;