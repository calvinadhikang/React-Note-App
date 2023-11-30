import React from "react";
import { getData } from "../utils/data";
import ListNotes from "../components/ListNotes";
import { useSearchParams } from "react-router-dom";

export default function HomePage () {
    const [searchParams, setSearchParams] = useSearchParams();
    const key = searchParams.get('key') ? searchParams.get('key') : '';

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

            <ListNotes 
            data={getData().filter(item => item.title.toLowerCase().includes(key.toLowerCase()))}
            >Active Notes</ListNotes>

            <ListNotes 
            data={getData(true).filter(item => item.title.toLowerCase().includes(key.toLowerCase()))}
            >Archived Notes</ListNotes>
        </>
    )
}