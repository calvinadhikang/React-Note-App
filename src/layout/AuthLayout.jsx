import { Outlet } from "react-router-dom";

export default function AuthLayout(){
    return(
        <div className="auth-layout">
            <div className="w-30">
                <center>
                    <h1>React Note App</h1>
                </center>
                <Outlet/>
            </div>
        </div>
    )
}