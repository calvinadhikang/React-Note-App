import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPage from "./pages/AddPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DetailPage from "./pages/DetailPage";

export default function App () {
    return(
        <Routes>
            <Route path="/" element={<AuthLayout/>}>
                <Route index element={<LoginPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
            </Route>
            <Route path="/app" element={<MainLayout/>} >
                <Route index element={<HomePage/>} />
                <Route path="add" element={<AddPage/>} /> 
                <Route path="detail/:id" element={<DetailPage/>} /> 
            </Route>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    );
}