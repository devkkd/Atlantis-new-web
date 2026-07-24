import React, { useEffect, useState } from "react";
import "./index.css";
import api from "../../admin/services/api";

const ServiceLanding = () => {

    const [image, setImage] = useState("");

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getService();

    }, []);

    const getService = async () => {

        try {

            const { data } = await api.get("/service");

            if (data.success && data.service) {

               setImage(data.service.serviceLanding.image || "");

            }

        }

        catch (err) {

            console.log(err);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div
                className="contact-landing-container"
                style={{
                    width: "100%",
                    height: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f5f5f5"
                }}
            >

                <h3 style={{ color: "#888" }}>

                    Loading...

                </h3>

            </div>

        );

    }

    if (!image) {

        return (

            <div
                className="contact-landing-container"
                style={{
                    width: "100%",
                    height: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f5f5f5"
                }}
            >

                <h3 style={{ color: "#999" }}>

                    No Image Available

                </h3>

            </div>

        );

    }

    return (

        <div className="contact-landing-container">

            <img
                src={image}
                alt="Luxury banquet hall in Jaipur - Best event venue for weddings and parties"
                className="contact-landing-img desktop-img"
            />

            <img
                src={image}
                alt="Destination wedding venue Jaipur with complete wedding planning services"
                className="contact-landing-img mobile-img"
            />

        </div>

    );

};

export default ServiceLanding;