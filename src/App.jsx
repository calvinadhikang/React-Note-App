import React from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Content from "./components/Content";
import { getInitialData } from "./utils/data";

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: getInitialData()
        }

        this.addNote = this.addNote.bind(this);   
    }

    addNote = (title, description) => {
        const item = {
            id: +new Date(),
            title: title,
            body: description,
            createdAt: new Date().toISOString(),
            archived: false
        }

        this.setState((prevState) => ({
                data:[...prevState.data, item]
            })
        );
    }

    render(){
        return(
            <>
                <Nav/>
                
                <h2 id="AddNotes">Add Notes</h2>
                <div className="center-flex">
                    <Form addNote={this.addNote}/>
                </div>

                <Content data={this.state.data.filter(item => item.archived == false)}>Active Notes</Content>
                <Content data={this.state.data.filter(item => item.archived == true)}>Archived Notes</Content>
                <br></br>
            </>
        );
    }
}