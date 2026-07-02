import React, { useEffect, useState } from "react";
import "./index.css";
import api from "../../admin/services/api";

const ContactLanding = () => {

    const [image, setImage] = useState("");

    useEffect(() => {

        getContactLanding();

    }, []);

    const getContactLanding = async () => {

        try {

            const { data } = await api.get("/gallery");

            if (data.gallery) {

                setImage(data.gallery.contactLanding || "");

            }

        }

        catch (err) {

            console.log(err);

        }

    };

    if (!image) {

        return null;

    }

    return (

        <div className="contact-landing-container">

            <img
                src={image}
                alt="Contact Banner"
                className="contact-landing-img desktop-img"
            />

            <img
                src={image}
                alt="Contact Banner"
                className="contact-landing-img mobile-img"
            />

        </div>

    );

};

export default ContactLanding;