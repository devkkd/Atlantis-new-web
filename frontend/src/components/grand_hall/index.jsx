import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import api from "../../admin/services/api";

const GrandHall = () => {
  const [grandHall, setGrandHall] = useState({
    image: "",
    title: "",
    subtitle: "",
    description: "",
    buttonText: "",
    theatre: "",
    classroom: "",
    cocktail: "",
    sitDown: "",
    totalArea: "",
    length: "",
    width: "",
    height: ""
  });

  useEffect(() => {
    getGrandHall();
  }, []);

  const getGrandHall = async () => {
    try {
      const { data } = await api.get("/venue");

      if (data.success && data.venue) {
        setGrandHall(data.venue.grandHall || {});
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="grand-hall-section">
        <div className="grand-hall-header-row">
          <div className="grand-hall-header-line"></div>

          <h1 className="grand-hall-title grand-hall-title-spaced">
            {grandHall.title}
          </h1>
        </div>

        <h2 className="grand-hall-subtitle">
          {grandHall.subtitle}
        </h2>

        <p className="grand-hall-description">
          {grandHall.description}
        </p>
      </section>

      <div className="grand-container">
        <div className="grand-wrapper">
          <div className="grand-grid">

            <div className="grand-section">
              <div className="grand-card">
                <div className="grand-inner">

                  <div className="grand-area">
                    <img
                      src={grandHall.image}
                      alt="Destination wedding venue Jaipur"
                      className="grand-area-img"
                    />
                  </div>

                  <Link
                    to="/gallery#grand-hall-gallery"
                    className="bottom-banner-grand-hall"
                  >
                    {grandHall.buttonText}
                  </Link>

                </div>
              </div>
            </div>

            <div className="info-section">

              <div className="capacity-section">

                <h2 className="section-title">
                  SEATING CAPACITY
                </h2>

                <div className="capacity-grid">

                  <div className="capacity-card">
                    <div className="capacity-label">
                      THEATRE
                    </div>

                    <div className="capacity-number">
                      {grandHall.theatre}
                    </div>
                  </div>

                  <div className="capacity-card">
                    <div className="capacity-label">
                      CLASSROOM
                    </div>

                    <div className="capacity-number">
                      {grandHall.classroom}
                    </div>
                  </div>

                  <div className="capacity-card">
                    <div className="capacity-label">
                      COCKTAIL
                    </div>

                    <div className="capacity-number">
                      {grandHall.cocktail}
                    </div>
                  </div>

                  <div className="capacity-card">
                    <div className="capacity-label">
                      SIT DOWN
                    </div>

                    <div className="capacity-number">
                      {grandHall.sitDown}
                    </div>
                  </div>

                </div>

              </div>
                            <div className="dimensions-section">

                <h2 className="section-title">
                  DIMENSIONS
                </h2>

                <div className="dimensions-list">

                  <div className="dimension-card">
                    <div className="dimension-label">
                      TOTAL AREA
                    </div>

                    <div className="dimension-value">
                      {grandHall.totalArea}
                    </div>
                  </div>

                  <div className="dimension-card">
                    <div className="dimension-label">
                      LENGTH
                    </div>

                    <div className="dimension-value">
                      {grandHall.length}
                    </div>
                  </div>

                  <div className="dimension-card">
                    <div className="dimension-label">
                      WIDTH
                    </div>

                    <div className="dimension-value">
                      {grandHall.width}
                    </div>
                  </div>

                  <div className="dimension-card">
                    <div className="dimension-label">
                      HEIGHT
                    </div>

                    <div className="dimension-value">
                      {grandHall.height}
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
};

export default GrandHall;