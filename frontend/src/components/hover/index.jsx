import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import api from "../../admin/services/api";

const useIsMobile = () => {

    const [isMobile, setIsMobile] = useState(

        window.innerWidth <= 600

    );

    useEffect(() => {

        const resize = () => {

            setIsMobile(window.innerWidth <= 600);

        };

        window.addEventListener("resize", resize);

        return () => window.removeEventListener("resize", resize);

    }, []);

    return isMobile;

};

function HoverVenuesSection({ venues }) {

    const [hovered, setHovered] = useState(null);

    const [currentBg, setCurrentBg] = useState("");

    const [prevBg, setPrevBg] = useState("");

    const [fade, setFade] = useState(false);

    const timer = useRef();

    useEffect(() => {

        if (venues.length) {

            setCurrentBg(venues[0].image);

        }

    }, [venues]);

    useEffect(() => {

        if (!venues.length) return;

        const next =

            hovered !== null

                ? venues[hovered].image

                : venues[0].image;

        if (next !== currentBg) {

            setPrevBg(currentBg);

            setFade(true);

            timer.current = setTimeout(() => {

                setCurrentBg(next);

                setPrevBg("");

                setFade(false);

            }, 400);

        }

        return () => clearTimeout(timer.current);

    }, [hovered]);

    if (!venues.length) return null;

    return (

        <div className="hover-venues-section">

            {

                prevBg &&

                <div

                    className={`hover-bg-image ${fade ? "fading" : ""}`}

                    style={{

    backgroundImage: prevBg
        ? `url(${prevBg})`
        : "linear-gradient(135deg,#222,#444)"

}}

                />

            }

      <img
    src={currentBg}
    alt=""
    className="hover-bg-image"
    style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: 0
    }}
/>

            

            <div className="hover-venues-overlay">

                {

                    venues.map((item, index) => (

                        <div

                            key={index}

                            className={`hover-venue-block ${hovered === index ? "hovered" : ""}`}

                            onMouseEnter={() => setHovered(index)}

                            onMouseLeave={() => setHovered(null)}

                        >

                            {

                                hovered === index ?

                                    <div className="hover-venue-info">

                                        <div className="hover-venue-title">

                                            {item.label}

                                        </div>

                                        <div className="hover-venue-desc">

                                            {item.description}

                                        </div>

                                    </div>

                                    :

                                    <div className="hover-venue-title bottom">

                                        {item.label}

                                    </div>

                            }

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default function HoverVenues() {

    const isMobile = useIsMobile();

    const [venues, setVenues] = useState([]);

    useEffect(() => {

        getVenueSection();

    }, []);

   const getVenueSection = async () => {

    try {

        const { data } = await api.get("/home");

        if (data.venueSection && data.venueSection.length) {

            const list = data.venueSection.map((item, index) => ({

                label: item.title || `Venue ${index + 1}`,

                description: item.description || "",

                alt: item.alt || "",

            image: item.image || ""

            }));

            while (list.length < 4) {

                list.push({

                    label: `Venue ${list.length + 1}`,

                    description: "",

                    alt: "",

                    image: ""

                });

            }

            setVenues(list);

        }

        else {

            setVenues([

                {

                    label: "THE GRAND HALL",

                    description: "",

                    alt: "",

                    image: ""

                },

                {

                    label: "PRE FUNCTION HALL",

                    description: "",

                    alt: "",

                    image: ""

                },

                {

                    label: "THE DINING HALL",

                    description: "",

                    alt: "",

                    image: ""

                },

                {

                    label: "THE LAWN",

                    description: "",

                    alt: "",

                    image: ""

                }

            ]);

        }

    }

    catch (err) {

        console.log(err);

        setVenues([

            {

                label: "THE GRAND HALL",

                description: "",

                alt: "",

                image: ""

            },

            {

                label: "PRE FUNCTION HALL",

                description: "",

                alt: "",

                image: ""

            },

            {

                label: "THE DINING HALL",

                description: "",

                alt: "",

                image: ""

            },

            {

                label: "THE LAWN",

                description: "",

                alt: "",

                image: ""

            }

        ]);

    }

};


    if (isMobile) {

        return (

            <>

                <HoverVenuesSection

                    venues={venues.slice(0, 2)}

                />

                <HoverVenuesSection

                    venues={venues.slice(2, 4)}

                />

            </>

        );

    }

    return (

        <HoverVenuesSection

            venues={venues}

        />

    );

}