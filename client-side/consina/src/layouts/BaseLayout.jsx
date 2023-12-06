import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const BaseLayout = () => {
    return(
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}
export default BaseLayout