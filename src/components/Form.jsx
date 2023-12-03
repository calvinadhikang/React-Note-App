import React, { useState } from "react";
import { addNote } from "../utils/network";
import useInput from "../utils/useInput";
import { useNavigate } from "react-router-dom";

export default function Form () {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useInput("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await addNote({title, body});
        if (response.error == false) {
            alert("Berhasil menambah notes !");
            navigate("/app");
        }
    }

    const titleChange = (e) => {
        const value = e.target.value;
        if (value.length <= 50) {
            setTitle(value);
        }
    }

    return(
        <>
            <form className="add-form" onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" value={title} onChange={titleChange}></input>
                <span className="word-counter">{title.length}/50</span>
                <label>Description</label>
                <textarea value={body} onChange={setBody}></textarea>
                <button>Add !</button>
            </form>
        </>
    );
}