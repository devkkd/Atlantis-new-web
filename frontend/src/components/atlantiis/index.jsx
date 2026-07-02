import React, { useEffect, useState } from "react";
import "./index.css";
import api from "../../admin/services/api";

const Atlantiis = () => {

    const [image, setImage] = useState("");

    useEffect(() => {

        getAtlantiis();

    }, []);

    const getAtlantiis = async () => {

        try {

            const { data } = await api.get("/home");

            if (data.atlantiisSection) {

                setImage(

                    data.atlantiisSection.image || ""

                );

            }

        }

        catch (err) {

            console.log(err);

        }

    };

    return (

        <>

            <section className="atlantiis-section">

                <div className="atlantiis-header-row">

                    <div className="atlantiis-header-line"></div>

                    <h1 className="atlantiis-title atlantiis-title-spaced">

                        ATLANTIIS

                    </h1>

                </div>

                <h2 className="atlantiis-subtitle">

                    ELEVATE YOUR BUSINESS EVENTS

                </h2>

                <p className="atlantiis-description">

                    Host product launches, seminars, award nights, or team-building
                    sessions in a grand yet professional setting. Equipped with
                    projector systems, soundproofing, and customized layouts, we
                    redefine corporate hosting.

                </p>

            </section>

            <div className="atlantiis-landing-container">

                {

                    image

                    ?

                    <>

                        <img

                            src={image}

                            alt="Luxury banquet hall Jaipur"

                            className="atlantiis-landing-img atlantiis-desktop-img"

                        />

                        <img

                            src={image}

                            alt="Luxury banquet hall Jaipur"

                            className="atlantiis-landing-img atlantiis-mobile-img"

                        />

                    </>

                    :

                    <div

                        style={{

                            width: "100%",

                            height: "450px",

                            display: "flex",

                            alignItems: "center",

                            justifyContent: "center",

                            fontSize: "18px",

                            color: "#777"

                        }}

                    >

                        Loading...

                    </div>

                }

            </div>

        </>

    );

};

export default Atlantiis;