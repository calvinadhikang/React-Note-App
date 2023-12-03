import React, { useEffect } from "react";
import Form from "../components/Form";
import { getAccessToken } from "../utils/network";
import { useNavigate } from "react-router-dom";

export default function AddPage () {
    const navigate = useNavigate();

    useEffect(() => {
        const auth = () => {
            try {
                const token = getAccessToken();
                if (!token) {
                    alert("Silahkan login terlebih dahulu");
                    navigate("/");
                    return;
                }
            } catch (error) {
                console.log(error);
            }
        }

        auth();
    })

    return(
        <>
            <h2 id="AddNotes">Add Notes</h2>
            <div className="center-flex">
                <Form/>
            </div>
        </>
    )
}