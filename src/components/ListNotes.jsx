import React from "react";
import NotesItem from "./NotesItem";
import PropTypes from 'prop-types';

export default function ListNotes({data}){
    return(
        <>
            <br></br>
            <div className="between-flex">
            { data.map((item) => {
                return <NotesItem key={item.id} data={item}></NotesItem>
            }) }
            </div>
        </>
    )
} 

ListNotes.propTypes = {
    data: PropTypes.array.isRequired,
}