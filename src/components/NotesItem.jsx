import React from "react";
import { showFormattedDate } from "../utils/data";

export default function NotesItem({data, onDelete, onArchive}){
    return(
        <div className="notes">
            <p className="notes-title">{data.title}</p>
            <p className="notes-time">{ showFormattedDate(data.createdAt)}</p>
            <p className="notes-body">{data.body}</p>

            <button className={data.archived ? 'btn-unarchive' : 'btn-archive'} onClick={(e) => onArchive(e)}>{data.archived ? 'Un-Archive' : 'Archive'}</button>
            <button className="btn-delete" 
            onClick={() => {onDelete(data.id)}}>Delete</button>
        </div>
    );
}