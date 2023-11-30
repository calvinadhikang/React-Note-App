import React from "react";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import AddPage from "./pages/AddPage";
import NotFoundPage from "./pages/NotFoundPage";
import DetailPageWrapper from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

export default function App () {
    return(
        <>
            <Nav></Nav>

            <Routes>
                <Route path="/" element={<HomePage/>} /> 
                <Route path="/add" element={<AddPage/>} /> 
                <Route path="/detail/:id" element={<DetailPageWrapper/>} /> 
                <Route path="/*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}