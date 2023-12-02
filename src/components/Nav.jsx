import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav className="nav">
            <h1>React Note App</h1>
            <div className="nav-space">
                <Link className="link-hover" to="/">Home</Link>
                <Link className="link-hover" to="/add">Add Notes</Link>
            </div>
        </nav>
    );
}

export default Nav;