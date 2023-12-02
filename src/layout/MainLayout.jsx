import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

function MainLayout(){
    return(
        <>
            <Nav/>
            <div className="content">
                <Outlet/>
            </div>
        </>
    );
}

export default MainLayout;