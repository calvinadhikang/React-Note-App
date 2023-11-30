import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return(
        <nav className="nav">
            <h1>React Note App</h1>
            <div className="nav-space">
                <Link to="/">Home</Link>
                <Link to="/add">Add Notes</Link>
            </div>
        </nav>
    );
}