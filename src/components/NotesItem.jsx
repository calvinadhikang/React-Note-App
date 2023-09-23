import React from "react";
import { showFormattedDate } from "../utils/data";

export default function NotesItem({data}){
    return(
        <div className="notes">
            <p className="notes-title">{data.title}</p>
            <p className="notes-time">{ showFormattedDate(data.createdAt)}</p>
            <p className="notes-body">{data.body}</p>
        </div>
    );
}