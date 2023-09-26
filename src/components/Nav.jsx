import React from "react";

export default function Nav({children}) {
    return(
        <nav className="nav">
            <h1>React Note App</h1>
            {children}
            <div className="nav-space"></div>
        </nav>
    );
}