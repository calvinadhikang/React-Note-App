import React from "react";
import { showFormattedDate } from "../utils/data";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NotesItem({data}){
    return(
        <Link className="notes" to={'/app/detail/' + data.id}>
            <p className="notes-title">{data.title}</p>
            <p className="notes-time">{ showFormattedDate(data.createdAt)}</p>
            <p className="notes-body">{data.body}</p>
        </Link>
    );
}

NotesItem.propTypes = {
    data: PropTypes.object.isRequired,
}