import React from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Content from "./components/Content";
import { getInitialData } from "./utils/data";

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            key: '',
            data: getInitialData()
        }

        this.addNote = this.addNote.bind(this);   
        this.titleSearch = this.titleSearch.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
        this.toggleArchive = this.toggleArchive.bind(this);
    }

    titleSearch = (e) => {
        const data = e.target.value;
        console.log(data)

        this.setState((prev) => ({
            key: data
        }))
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

    deleteNote = (id) => {
        const data = this.state.data.filter((e) => e.id != id)
        console.log(id)
        this.setState((prev) => ({
            data: data
        }))
    }

    toggleArchive = (id) => {
        const data = this.state.data.map((obj) => {
            if (obj.id == id) {
                obj.archived = !obj.archived
            }

            return obj;
        })
        this.setState(() => ({
            data: data
        }))
    }

    render(){
        return(
            <>
                <Nav>
                    <input type="text" className="search" placeholder="Search" value={this.state.key} onChange={(e) => this.titleSearch(e)}/>
                </Nav>
                
                <h2 id="AddNotes">Add Notes</h2>
                <div className="center-flex">
                    <Form addNote={this.addNote}/>
                </div>

                <Content data={this.state.data.filter(item => item.archived == false && item.title.toLowerCase().includes(this.state.key.toLowerCase()))}
                onDelete={this.deleteNote} toggleArchive={this.toggleArchive}>Active Notes</Content>
                <Content 
                data={this.state.data.filter(item => item.archived == true && item.title.toLowerCase().includes(this.state.key.toLowerCase()))}
                onDelete={this.deleteNote} toggleArchive={this.toggleArchive}>Archived Notes</Content>
                <br></br>
            </>
        );
    }
}