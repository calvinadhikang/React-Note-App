import React from "react";
import NotesItem from "./NotesItem";

export default function Content({data, children}){
    return(
        <div className="content">
            <h2>{children}</h2>
            <br></br>
            <div className="between-flex">
            { data.map((item) => {
                return <NotesItem key={item.id} data={item}></NotesItem>
            }) }
            </div>
        </div>
    )
} 