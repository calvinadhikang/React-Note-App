import React from "react";
import Nav from "./components/Nav";

export class App extends React.Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <>
                <Nav></Nav>
            </>
        );
    }
}