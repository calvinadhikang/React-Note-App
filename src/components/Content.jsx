import React from "react";
import NotesItem from "./NotesItem";

export default function Content({data, children, onDelete, toggleArchive}){
    return(
        <div className="content">
            <h2>{children}</h2>
            <br></br>
            <div className="between-flex">
            { data.length > 0 ? data.map((item) => {
                return <NotesItem key={item.id} data={item} onDelete={onDelete} toggleArchive={toggleArchive}></NotesItem>
            }) : 'No Notes here..' }
            </div>
        </div>
    )
} 