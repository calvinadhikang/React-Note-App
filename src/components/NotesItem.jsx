import React from "react";
import { showFormattedDate } from "../utils/data";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

export default function NotesItem({data}){
    const navigate = useNavigate();
    
    return(
        <div className="notes" onClick={() => navigate('/detail/' + data.id)}>
            <p className="notes-title">{data.title}</p>
            <p className="notes-time">{ showFormattedDate(data.createdAt)}</p>
            <p className="notes-body">{data.body}</p>
        </div>
    );
}

NotesItem.propTypes = {
    data: PropTypes.object.isRequired,
}