import React from "react";
import NotesItem from "./NotesItem";
import PropTypes from 'prop-types';

export default function ListNotes({data, children}){
    return(
        <div className="content">
            <h2>{children}</h2>
            <br></br>
            <div className="between-flex">
            { data.length > 0 ? data.map((item) => {
                return <NotesItem key={item.id} data={item}></NotesItem>
            }) : 'No Notes here..' }
            </div>
        </div>
    )
} 

ListNotes.propTypes = {
    data: PropTypes.array.isRequired,
    children: PropTypes.string.isRequired,
}