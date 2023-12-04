import React, { useEffect, useState } from "react";
import ListNotes from "../components/ListNotes";
import { useSearchParams } from "react-router-dom";
import { getAccessToken, getActiveNotes, getArchivedNotes } from "../utils/network";
import { useNavigate } from "react-router-dom";

export default function HomePage () {
    const navigate = useNavigate();

    const [activeNotes, setActiveNotes] = useState(null);
    const [archivedNotes, setArchivedNotes] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const key = searchParams.get('key') ? searchParams.get('key') : '';

    useEffect(() => {
        const fetchData = async () => {
            const token = getAccessToken();
            if (!token) {
                navigate("/");
                return;
            }
            
            try {
                const activeNotes = await getActiveNotes();
                const archivedNotes = await getArchivedNotes();
    
                setActiveNotes(activeNotes.data);
                setArchivedNotes(archivedNotes.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();        
    }, [searchParams.get('key')]);

    const titleSearch = (e) => {
        const data = e.target.value;
        setSearchParams({ key: data});
    }

    return(
        <>
            <center>
                <br />
                <h4>Search By Title</h4>
                <input type="text" className="search" placeholder="Search" value={key}
                onChange={(e) => titleSearch(e)}/>
            </center>

            <br/>

            <h2>Active Notes</h2>
            {activeNotes == null ?
            "No Acrtive Notes..." 
            : 
            <ListNotes data={activeNotes.filter(item => item.title.toLowerCase().includes(key.toLowerCase()))}/>
            }

            <br/>

            <h2>Archived Notes</h2>
            {archivedNotes == null ? 
            "No Archived Notes..."
            :
            <ListNotes data={archivedNotes.filter(item => item.title.toLowerCase().includes(key.toLowerCase()))}/>
            }
        </>
    )
}