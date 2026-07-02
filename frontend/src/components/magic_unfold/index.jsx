import React, { useState, useEffect } from "react";
import "./index.css";
import api from "../../admin/services/api";

const MagicUnfold = () => {

  const [video, setVideo] = useState("");

  useEffect(() => {

    getMagicVideo();

  }, []);

  const getMagicVideo = async () => {

    try {

      const { data } = await api.get("/home");

      setVideo(data.magicSection?.video || "");

    } catch (err) {

      console.log(err);

    }

  };

  if (!video) {

    return null;

  }

  return (
    <>
      <section className="magic-section">
        <div className="magic-header-row">
          <div className="magic-header-line"></div>

          <h1 className="magic-title magic-title-spaced">
            WATCH THE MAGIC UNFOLD
          </h1>

        </div>

        <h2 className="magic-subtitle">
          A GLIMPSE INTO CELEBRATIONS AT ATLANTIIS JAIPUR
        </h2>

        <p className="magic-description">
          Explore the detailed floor plan of Atlantis Jaipur to understand our
          layout and plan your event effortlessly. From guest flow to stage
          placement, dining zones to lounge areas—our structured blueprint
          ensures a seamless experience for any gathering size.
        </p>
      </section>

      <section className="magic-video-section">

        <div className="magic-video-wrapper">

          <video
  src={video}
  className="magic-video"
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  disablePictureInPicture
  controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
  style={{
    width: "100vw",
    height: "100%",
    objectFit: "cover",
    display: "block"
  }}
/>

        </div>

      </section>
    </>
  );
};

export default MagicUnfold;