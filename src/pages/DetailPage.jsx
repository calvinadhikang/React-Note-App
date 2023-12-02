import { useParams, Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { deleteData, getById, showFormattedDate, toggleArchive } from "../utils/data";
import React from "react";

function DetailPageWrapper(){
    const {id} = useParams();
    return <DetailPage id={parseInt(id)} />
}

class DetailPage extends React.Component {
    constructor(props){
        super(props);
        this.state = getById(props.id);

        this.handleArchive = this.handleArchive.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleArchive = () => {
        toggleArchive(this.state.id);
        this.setState(getById(this.state.id));
    }

    handleDelete = () => {
        deleteData(this.state.id);
    }

    render(){
        return(
            <>
                <br />
                <h1>{this.state.title}</h1>
                <p><i>{this.state.archived && "Archived"}</i></p>
                <p className="notes-body">{showFormattedDate(this.state.createdAt)}</p>
                <p>{this.state.body}</p>
                <br />
                <div style={{ display: "flex", gap: 10 }}>
                    <button 
                        onClick={this.handleArchive}
                        className={`btn ${this.state.archived ? 'btn-unarchive' : 'btn-archive'}`}    
                    >{ this.state.archived ? 'Un-Archive' : 'Archive' }</button>
                    <button onClick={this.handleDelete} className="btn btn-delete"><Link to="/">Delete</Link></button>
                </div>
            </>
        )
    }
}

DetailPage.propTypes = {
    id: PropTypes.number.isRequired
}

export default DetailPageWrapper