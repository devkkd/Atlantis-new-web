import "./Dashboard.css";
import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

const cards = [

    {
        title: "Home",
        desc: "Manage homepage banners, text and sections.",
        path: "/admin/home"
    },

    {
        title: "Venue",
        desc: "Manage venue landing images and content.",
        path: "/admin/venue"
    },

    {
        title: "Services",
        desc: "Manage all services.",
        path: "/admin/services"
    },

    {
        title: "Gallery",
        desc: "Upload and manage gallery images.",
        path: "/admin/gallery"
    },

    {
        title: "Contact",
        desc: "Update contact page content.",
        path: "/admin/contact"
    },

    {
        title: "Messages",
        desc: "View and manage customer inquiries.",
        path: "/admin/messages"
    },

   

];

export default function Dashboard() {

    return (

        <DashboardLayout>

            <div className="dashboard-page">

                <div className="dashboard-header">

                    <h1>

                        Dashboard

                    </h1>

                    <p>

                        Welcome to Atlantiis Content Management System

                    </p>

                </div>

                <div className="dashboard-grid">

                    {

                        cards.map((card, index) => (

                            <Link

                                to={card.path}

                                key={index}

                                className="dashboard-card"

                            >

                                <h3>

                                    {card.title}

                                </h3>

                                <p>

                                    {card.desc}

                                </p>

                                <button>

                                    Manage

                                </button>

                            </Link>

                        ))

                    }

                </div>

            </div>

        </DashboardLayout>

    )

}