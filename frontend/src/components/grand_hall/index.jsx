import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const GrandHall = () => {
  return (
    <>
      <section className="grand-hall-section">
        <div className="grand-hall-header-row">
          <div className="grand-hall-header-line"></div>
          <h1 className="grand-hall-title grand-hall-title-spaced">
            THE GRAND BANQUET HALL
          </h1>
        </div>
        <h2 className="grand-hall-subtitle">WHERE ELEGANCE MEETS SCALE</h2>
        <p className="grand-hall-description">
          Our luxurious wedding banquet hall is designed for large scale wedding
          receptions, and gala events . with rich interiors customizable
          lighting and state of the art acoustics this banquet hall has a nice
          capacity to host up to 1200 guest comfortably – making every moment
          majestic and memorable
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
                      src="/grand_hall.png"
                      alt="Destination wedding venue Jaipur"
                      className="grand-area-img"
                    />
                  </div>
                  <Link
                    to="/gallery#grand-hall-gallery"
                    className="bottom-banner-grand-hall"
                  >
                    SEE THE GRAND BANQUET HALL IMAGES →
                  </Link>
                </div>
              </div>
            </div>

            <div className="info-section">
              <div className="capacity-section">
                <h2 className="section-title">SEATING CAPACITY</h2>
                <div className="capacity-grid">
                  <div className="capacity-card">
                    <div className="capacity-label">THEATRE</div>
                    <div className="capacity-number">1000</div>
                  </div>
                  <div className="capacity-card">
                    <div className="capacity-label">CLASSROOM</div>
                    <div className="capacity-number">500</div>
                  </div>
                  <div className="capacity-card">
                    <div className="capacity-label">COCKTAIL</div>
                    <div className="capacity-number">750</div>
                  </div>
                  <div className="capacity-card">
                    <div className="capacity-label">SIT DOWN</div>
                    <div className="capacity-number">500</div>
                  </div>
                </div>
              </div>

              <div className="dimensions-section">
                <h2 className="section-title">DIMENSIONS</h2>
                <div className="dimensions-list">
                  <div className="dimension-card">
                    <div className="dimension-label">TOTAL AREA</div>
                    <div className="dimension-value">
                      SQ. FT. - 13,120 | SQ. MTR. - 1,218.89
                    </div>
                  </div>
                  <div className="dimension-card">
                    <div className="dimension-label">LENGTH</div>
                    <div className="dimension-value">
                      FT. - 160 | MTR. - 48.77
                    </div>
                  </div>
                  <div className="dimension-card">
                    <div className="dimension-label">WIDTH</div>
                    <div className="dimension-value">
                      FT. - 82 | MTR. - 24.99
                    </div>
                  </div>
                  <div className="dimension-card">
                    <div className="dimension-label">HEIGHT</div>
                    <div className="dimension-value">
                      FT. - 28 | MTR. - 8.53
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
