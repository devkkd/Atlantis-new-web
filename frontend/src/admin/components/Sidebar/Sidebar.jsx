import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
    FiGrid,
    FiHome,
    FiMapPin,
    FiImage,
    FiMail,
    FiSettings,
    FiFileText,
    FiPhone,
    FiSearch,
    FiFolder,
    FiLogOut,
    FiLayout,
    FiColumns
} from "react-icons/fi";

export default function Sidebar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("adminToken");

        navigate("/admin");

    }

    return (

        <aside className="sidebar">

            <div>

                <div className="sidebar-logo">

                    <h2>

                        ATLANTIIS

                    </h2>

                    <span>

                        CONTENT MANAGEMENT

                    </span>

                </div>

                <div className="menu-title">

                    MENU

                </div>

                <nav>

                    <NavLink to="/admin/dashboard" className="menu-link">

                        <FiGrid />

                        Dashboard

                    </NavLink>

                </nav>

                <div className="menu-title">

                    WEBSITE

                </div>

                <nav>
                    <NavLink to="/admin/header" className="menu-link">
    <FiLayout />
    Header
</NavLink>

                    <NavLink to="/admin/home" className="menu-link">

                        <FiHome />

                        Home

                    </NavLink>


                    <NavLink to="/admin/venue" className="menu-link">

                        <FiMapPin />

                        Venue

                    </NavLink>

                    <NavLink to="/admin/services" className="menu-link">

                        <FiSettings />

                        Service

                    </NavLink>

                    <NavLink to="/admin/gallery" className="menu-link">

                        <FiImage />

                        Gallery

                    </NavLink>
                    <NavLink to="/admin/contact" className="menu-link">

                        <FiPhone />

                        Contact

                    </NavLink>
                    <NavLink to="/admin/contact-form" className="menu-link">

    <FiFileText />

    Contact Form

</NavLink>
                    <NavLink to="/admin/blog-landing" className="menu-link">

    <FiImage />

    Blog 

</NavLink>
                    <NavLink to="/admin/messages" className="menu-link">

                        <FiMail />

                        Messages

                    </NavLink>
                    <NavLink to="/admin/footer" className="menu-link">
    <FiColumns />
    Footer
</NavLink>

                </nav>




            </div>

            <button

                className="logout-btn"

                onClick={logout}

            >

                <FiLogOut />

                Logout

            </button>

        </aside>

    )

}