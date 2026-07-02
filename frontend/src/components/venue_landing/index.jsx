import React, { useEffect, useState } from "react";
import "./index.css";
import api from "../../admin/services/api";

const VenueLanding = () => {

    const [image, setImage] = useState("");

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getVenue();

    }, []);

    const getVenue = async () => {

        try {

            const { data } = await api.get("/venue");

            if (data.success && data.venue) {

                setImage(data.venue.image || "");

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
                className="venue-landing-container"
                style={{
                    width: "100%",
                    height: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f5f5f5"
                }}
            >

                <h3
                    style={{
                        color: "#888",
                        fontWeight: "500"
                    }}
                >

                    Loading...

                </h3>

            </div>

        );

    }

    if (!image) {

        return (

            <div
                className="venue-landing-container"
                style={{
                    width: "100%",
                    height: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f5f5f5"
                }}
            >

                <h3
                    style={{
                        color: "#999",
                        fontWeight: "500"
                    }}
                >

                    No Image Available

                </h3>

            </div>

        );

    }

    return (

        <div className="venue-landing-container">

            <img
                src={image}
                alt="Venue Landing"
                className="venue-landing-img desktop-img"
            />

            <img
                src={image}
                alt="Venue Landing"
                className="venue-landing-img mobile-img"
            />

        </div>

    );

};

export default VenueLanding;