import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import NotFoundPage from "./pages/NotFoundPage";

export class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            key: '',
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
                <Nav></Nav>

                <Routes>
                    <Route path="/" element={<HomePage/>} /> 
                    <Route path="/add" element={<AddPage/>} /> 
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
                
                {/* <h2 id="AddNotes">Add Notes</h2>
                <div className="center-flex">
                    <Form addNote={this.addNote}/>
                </div>

                <Content data={this.state.data.filter(item => item.archived == false && item.title.toLowerCase().includes(this.state.key.toLowerCase()))}
                onDelete={this.deleteNote} toggleArchive={this.toggleArchive}>Active Notes</Content>
                <Content 
                data={this.state.data.filter(item => item.archived == true && item.title.toLowerCase().includes(this.state.key.toLowerCase()))}
                onDelete={this.deleteNote} toggleArchive={this.toggleArchive}>Archived Notes</Content>
                <br></br> */}
            </>
        );
    }
}