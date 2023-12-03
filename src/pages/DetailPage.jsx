import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { archiveNote, deleteNote, getNote, getUserLogged, unarchiveNote } from "../utils/network";
import { showFormattedDate } from "../utils/data";
import { useNavigate } from "react-router-dom";

function DetailPage () {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {
        const fetchData = async(id) => {
            try {
                const user = await getUserLogged();
                const note = await getNote(id);
    
                if (user.data.id !== note.data.owner) {
                    alert("Access Denied !");
                    navigate("/");
                    return;
                }
    
                setData(note.data);
            } catch (error) {
                console.log(error);
            }
        }

        if (id) {
            fetchData(id);
        }
    },[id, fetching])

    const handleToggleArchive = async() => {
        if (data.archived) {
            await unarchiveNote(id);
        } else {
            await archiveNote(id);
        }

        setFetching(!fetching);
    }

    const handleDelete = async() => {
        const result = await deleteNote(id);
        if (result.error == false) {
            alert("Berhasil delete Note");
            navigate("/app");
        }
    }

    return(
        <>
            { data == null ? 
            "Loading data..."
            :
            <>
                <br />
                <h1>{data.title}</h1>
                <p><i>{data.archived && "Archived"}</i></p>
                <p className="notes-body">{showFormattedDate(data.createdAt)}</p>
                <p>{data.body}</p>
                <br />
                <div style={{ display: "flex", gap: 10 }}>
                    <button 
                        onClick={handleToggleArchive}
                        className={`btn ${data.archived ? 'btn-unarchive' : 'btn-archive'}`}    
                    >{ data.archived ? 'Un-Archive' : 'Archive' }</button>
                    <button onClick={handleDelete} className="btn btn-delete">Delete</button>
                </div>
            </>
            }
        </>
    )
}

export default DetailPage;