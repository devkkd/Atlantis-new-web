import React, { useEffect, useState } from "react";
import "./index.css";
import api from "../../admin/services/api";

const Atlantiis = () => {

    const [atlantiis, setAtlantiis] = useState({
        title: "",
        subtitle: "",
        description: "",
        image: ""
    });

    useEffect(() => {
        getAtlantiis();
    }, []);

    const getAtlantiis = async () => {

        try {

            const { data } = await api.get("/home");

            if (data.atlantiisSection) {

                setAtlantiis({
                    title: data.atlantiisSection.title || "",
                    subtitle: data.atlantiisSection.subtitle || "",
                    description: data.atlantiisSection.description || "",
                    image: data.atlantiisSection.image || ""
                });

            }

        } catch (err) {

            console.log(err);

        }

    };

    return (

        <>

            <section className="atlantiis-section">

                <div className="atlantiis-header-row">

                    <div className="atlantiis-header-line"></div>

                    <h1 className="atlantiis-title atlantiis-title-spaced">
                        {atlantiis.title}
                    </h1>

                </div>

                <h2 className="atlantiis-subtitle">
                    {atlantiis.subtitle}
                </h2>

                <p className="atlantiis-description">
                    {atlantiis.description}
                </p>

            </section>

            <div className="atlantiis-landing-container">

                {

                    atlantiis.image

                        ?

                        <>

                            <img
                                src={atlantiis.image}
                                alt={atlantiis.title || "Luxury banquet hall Jaipur"}
                                className="atlantiis-landing-img atlantiis-desktop-img"
                            />

                            <img
                                src={atlantiis.image}
                                alt={atlantiis.title || "Luxury banquet hall Jaipur"}
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
