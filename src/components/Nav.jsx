import React from "react";

function Nav() {
    return(
        <nav className="nav">
            <h1>React Note App</h1>
            <input type="text" className="search" />
            <div className="nav-space"></div>
        </nav>
    );
}

export default Nav;