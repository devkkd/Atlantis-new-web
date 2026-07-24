import React, { useEffect, useState } from "react";
import "./index.css";
import Skeleton from "@mui/material/Skeleton";
import api from "../../admin/services/api";
import { Link } from 'react-router-dom';

const SmallHall = () => {
  const [loading, setLoading] = useState(true);
    const [smallHall, setSmallHall] = useState({
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
    getSmallHall();
  }, []);

  const getSmallHall = async () => {
  try {
    setLoading(true);

    const { data } = await api.get("/venue");

    if (data.success && data.venue?.smallHall) {
      setSmallHall(data.venue.smallHall);
    }
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
  return (
  <>
  <section className="small-hall-section">
    <div className="small-hall-header-row">
      <div className="small-hall-header-line"></div>

      {loading ? (
        <Skeleton width={420} height={80} />
      ) : (
        <h1 className="small-hall-title small-hall-title-spaced">
          {smallHall.title.split("/").map((text, index) => (
            <React.Fragment key={index}>
              {text.trim()}
              {index === 0 && <br />}
            </React.Fragment>
          ))}
        </h1>
      )}
    </div>

    {loading ? (
      <Skeleton width={500} height={35} />
    ) : (
      <h2 className="small-hall-subtitle">
        {smallHall.subtitle}
      </h2>
    )}

    {loading ? (
      <>
        <Skeleton height={20} />
        <Skeleton height={20} />
        <Skeleton width="80%" height={20} />
      </>
    ) : (
      <p className="small-hall-description">
        {smallHall.description}
      </p>
    )}
  </section>

  <div className="small-container">
    <div className="small-wrapper">
      <div className="small-grid">

        <div className="small-section">
          <div className="small-card">
            <div className="small-container">

              <div className="small-area">
                {loading ? (
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={500}
                  />
                ) : (
                  <img
                    src={smallHall.image || "/small_hall.png"}
                    alt="Social event venue Jaipur"
                    className="small-area-img"
                  />
                )}
              </div>

              <Link
                to="/gallery#mini-hall-gallery"
                className="bottom-banner-small-hall"
              >
                {loading ? (
                  <Skeleton width={260} />
                ) : (
                  smallHall.buttonText
                )}
              </Link>

            </div>
          </div>
        </div>

        <div className="small-hall-info-section">

          <div className="small-hall-capacity-section">

            <h2 className="small-hall-section-title">
              SEATING CAPACITY
            </h2>

            <div className="small-hall-capacity-grid">

              <div className="small-hall-capacity-card">
                <div className="small-hall-capacity-label">
                  THEATRE
                </div>
                <div className="small-hall-capacity-number">
                  {loading ? (
                    <Skeleton width={40} />
                  ) : (
                    smallHall.theatre
                  )}
                </div>
              </div>

              <div className="small-hall-capacity-card">
                <div className="small-hall-capacity-label">
                  CLASSROOM
                </div>
                <div className="small-hall-capacity-number">
                  {loading ? (
                    <Skeleton width={40} />
                  ) : (
                    smallHall.classroom
                  )}
                </div>
              </div>

              <div className="small-hall-capacity-card">
                <div className="small-hall-capacity-label">
                  COCKTAIL
                </div>
                <div className="small-hall-capacity-number">
                  {loading ? (
                    <Skeleton width={40} />
                  ) : (
                    smallHall.cocktail
                  )}
                </div>
              </div>

              <div className="small-hall-capacity-card">
                <div className="small-hall-capacity-label">
                  SIT DOWN
                </div>
                <div className="small-hall-capacity-number">
                  {loading ? (
                    <Skeleton width={40} />
                  ) : (
                    smallHall.sitDown
                  )}
                </div>
              </div>

            </div>

          </div>

          <div className="small-hall-dimensions-section">

            <h2 className="small-hall-section-title">
              DIMENSIONS
            </h2>

            <div className="small-hall-dimensions-list">

              <div className="small-hall-dimension-card">
                <div className="small-hall-dimension-label">
                  TOTAL AREA
                </div>
                <div className="small-hall-dimension-value">
                  {loading ? (
                    <Skeleton width={220} />
                  ) : (
                    smallHall.totalArea
                  )}
                </div>
              </div>

              <div className="small-hall-dimension-card">
                <div className="small-hall-dimension-label">
                  LENGTH
                </div>
                <div className="small-hall-dimension-value">
                  {loading ? (
                    <Skeleton width={180} />
                  ) : (
                    smallHall.length
                  )}
                </div>
              </div>

              <div className="small-hall-dimension-card">
                <div className="small-hall-dimension-label">
                  WIDTH
                </div>
                <div className="small-hall-dimension-value">
                  {loading ? (
                    <Skeleton width={180} />
                  ) : (
                    smallHall.width
                  )}
                </div>
              </div>

              <div className="small-hall-dimension-card">
                <div className="small-hall-dimension-label">
                  HEIGHT
                </div>
                <div className="small-hall-dimension-value">
                  {loading ? (
                    <Skeleton width={180} />
                  ) : (
                    smallHall.height
                  )}
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

export default SmallHall;
