import React from "react";
import { getData } from "../utils/data";
import Content from "../components/ListNotes";
import ListNotes from "../components/ListNotes";
import { useNavigate } from "react-router-dom";

export class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            key: '',
            archivedData: getData(true),
            unarchivedData: getData()
        }

        this.titleSearch = this.titleSearch.bind(this);
    }

    titleSearch = (e) => {
        const data = e.target.value;
        console.log(data)

        this.setState((prev) => ({
            key: data
        }))
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
                <center>
                    <br />
                    <h4>Search By Title</h4>
                    <input type="text" className="search" placeholder="Search" value={this.state.key} 
                    onChange={(e) => this.titleSearch(e)}/>
                </center>

                <ListNotes 
                data={this.state.unarchivedData.filter(item => item.title.toLowerCase().includes(this.state.key.toLowerCase()))}
                detailClick={this.viewDetail}
                >Active Notes</ListNotes>

                <ListNotes 
                data={this.state.archivedData.filter(item => item.title.toLowerCase().includes(this.state.key.toLowerCase()))}
                detailClick={this.viewDetail}
                >Archived Notes</ListNotes>
            </>
        )
    }
}