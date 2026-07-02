import React, { useEffect, useState } from "react";
import "./index.css";
import api from "../../admin/services/api";

const ContactLanding = () => {

    const [image, setImage] = useState("");

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getContact();

    }, []);

    const getContact = async () => {

        try {

            const { data } = await api.get("/contact");

            if (data.success && data.contact) {

                setImage(data.contact.image || "");

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
                alt="Book banquet hall in Jaipur"
                className="contact-landing-img desktop-img"
            />

            <img
                src={image}
                alt="Book banquet hall in Jaipur"
                className="contact-landing-img mobile-img"
            />

        </div>

    );

};

export default ContactLanding;