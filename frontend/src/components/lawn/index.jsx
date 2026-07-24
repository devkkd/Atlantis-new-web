import React, { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import api from "../../admin/services/api";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const Lawn = () => {
  const [loading, setLoading] = useState(true);
  const [lawn, setLawn] = useState({
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
  getVenue();
}, []);

const getVenue = async () => {
  try {
    setLoading(true);

    const { data } = await api.get("/venue");

    if (data.success) {
      setLawn(data.venue.lawn);
    }
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
  return (
   <>
  <section className="lawn-hall-section">
    <div className="lawn-hall-header-row">
      <div className="lawn-hall-header-line"></div>
      <h1 className="lawn-hall-title lawn-hall-title-spaced">
  {loading ? <Skeleton width={220} /> : lawn.title}
</h1>
    </div>
<h2 className="lawn-hall-subtitle">
  {loading ? <Skeleton width={320} /> : lawn.subtitle}
</h2>

   <p className="lawn-hall-description">
  {loading ? (
    <>
      <Skeleton count={4} />
    </>
  ) : (
    lawn.description
  )}
</p>
  </section>

  <div className="lawn-container">
    <div className="lawn-wrapper">
      <div className="lawn-grid">

        <div className="lawn-section">
          <div className="lawn-card">
            <div className="lawn-container">

             <div className="lawn-area">
  {loading ? (
    <Skeleton height={420} />
  ) : (
    <img
      src={lawn.image}
      alt={lawn.title}
      className="lawn-area-img"
    />
  )}
</div>

             <Link
  to="/gallery#lawn-gallery"
  className="bottom-banner-lawn-hall"
>
  {loading ? <Skeleton width={180} /> : `${lawn.buttonText} →`}
</Link>

            </div>
          </div>
        </div>

        <div className="lawn-hall-info-section">

          <div className="lawn-hall-capacity-section">

            <h2 className="lawn-hall-section-title">
              SEATING CAPACITY
            </h2>

            <div className="lawn-hall-capacity-grid">

              <div className="lawn-hall-capacity-card">
                <div className="lawn-hall-capacity-label">
                  THEATRE
                </div>
               <div className="lawn-hall-capacity-number">
  {loading ? <Skeleton width={50} /> : lawn.theatre}
</div>
              </div>

              <div className="lawn-hall-capacity-card">
                <div className="lawn-hall-capacity-label">
                  CLASSROOM
                </div>
                <div className="lawn-hall-capacity-number">
  {loading ? <Skeleton width={50} /> : lawn.classroom}
</div>
              </div>

              {/* <div className="lawn-hall-capacity-card">
                <div className="lawn-hall-capacity-label">
                  COCKTAIL
                </div>
                <div className="lawn-hall-capacity-number">
                  {lawn.cocktail}
                </div>
              </div>

              <div className="lawn-hall-capacity-card">
                <div className="lawn-hall-capacity-label">
                  SIT DOWN
                </div>
                <div className="lawn-hall-capacity-number">
                  {lawn.sitDown}
                </div>
              </div> */}

            </div>

          </div>

          <div className="lawn-hall-dimensions-section">

            <h2 className="lawn-hall-section-title">
              DIMENSIONS
            </h2>

            <div className="lawn-hall-dimensions-list">

              <div className="lawn-hall-dimension-card">
                <div className="lawn-hall-dimension-label">
                  TOTAL AREA
                </div>
               <div className="lawn-hall-dimension-value">
  {loading ? <Skeleton width={250} /> : lawn.totalArea}
</div>
              </div>

              <div className="lawn-hall-dimension-card">
                <div className="lawn-hall-dimension-label">
                  LENGTH
                </div>
               <div className="lawn-hall-dimension-value">
  {loading ? <Skeleton width={180} /> : lawn.length}
</div>
              </div>

              <div className="lawn-hall-dimension-card">
                <div className="lawn-hall-dimension-label">
                  WIDTH
                </div>
              <div className="lawn-hall-dimension-value">
  {loading ? <Skeleton width={180} /> : lawn.width}
</div>
              </div>

              {/* <div className="lawn-hall-dimension-card">
                <div className="lawn-hall-dimension-label">
                  HEIGHT
                </div>
                <div className="lawn-hall-dimension-value">
                  {lawn.height}
                </div>
              </div> */}

            </div>

          </div>

        </div>

      </div>
    </div>
  </div>
</>
  );
};

export default Lawn;
