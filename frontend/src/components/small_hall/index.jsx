import React from "react";
import "./index.css";
import { Link } from 'react-router-dom';

const SmallHall = () => {
  return (
    <>
      <section className="small-hall-section">
        <div className="small-hall-header-row">
          <div className="small-hall-header-line"></div>
          <h1 className="small-hall-title small-hall-title-spaced">THE PRE-FUNCTION HALL /<br></br> SMALL BANQUET</h1>
        </div>
        <h2 className="small-hall-subtitle">PERFECT FOR INTIMATE GATHERINGS & PRE-EVENT FUNCTIONS</h2>
        <p className="small-hall-description">
        Ideal for haldi, mehendi, cocktail parties, or VIP lounges, this versatile space offers a cozy yet stylish setting. Designed to complement the main event, it ensures seamless flow and elegant comfort for smaller groups and pre-function activities.
        </p>
      </section>

      <div className="small-container">
        <div className="small-wrapper">
          <div className="small-grid">
            <div className="small-section">
              <div className="small-card">
                <div className="small-container">
                  {/* Main venue area */}
                  <div className="small-area">
                    <img src="/small_hall.png" alt="Social event venue Jaipur" className="small-area-img" />
                  </div>
                {/* Bottom banner as a link */}
                <Link to="/gallery#mini-hall-gallery" className="bottom-banner-small-hall">
                SEE The Pre-Function Hall / Small Banquet IMAGES →
                </Link>
                </div>
              </div>
            </div>

            {/* Information Section */}
            <div className="small-hall-info-section">
              {/* Seating Capacity */}
              <div className="small-hall-capacity-section">
                <h2 className="small-hall-section-title">SEATING CAPACITY</h2>
                {/* Updated grid to show 4 columns on larger screens, 2 on medium screens */}
                <div className="small-hall-capacity-grid">
                  <div className="small-hall-capacity-card">
                    <div className="small-hall-capacity-label">THEATRE</div>
                    <div className="small-hall-capacity-number">450</div>
                  </div>
                  <div className="small-hall-capacity-card">
                    <div className="small-hall-capacity-label">CLASSROOM</div>
                    <div className="small-hall-capacity-number">200</div>
                  </div>
                  <div className="small-hall-capacity-card">
                    <div className="small-hall-capacity-label">COCKTAIL</div>
                    <div className="small-hall-capacity-number">330</div>
                  </div>
                  <div className="small-hall-capacity-card">
                    <div className="small-hall-capacity-label">SIT DOWN</div>
                    <div className="small-hall-capacity-number">200</div>
                  </div>
                </div>
              </div>

              {/* Dimensions */}
              <div className="small-hall-dimensions-section">
                <h2 className="small-hall-section-title">DIMENSIONS</h2>
                <div className="small-hall-dimensions-list">
                  {/* Total Area */}
                  <div className="small-hall-dimension-card">
                    <div className="small-hall-dimension-label">TOTAL AREA</div>
                    <div className="small-hall-dimension-value">
                      SQ. FT. - 6,032 | SQ. MTR. - 560.39
                    </div>
                  </div>

                  {/* Length */}
                  <div className="small-hall-dimension-card">
                    <div className="small-hall-dimension-label">LENGTH</div>
                    <div className="small-hall-dimension-value">
                      FT. - 104 | MTR. - 31.70
                    </div>
                  </div>

                  {/* Width */}
                  <div className="small-hall-dimension-card">
                    <div className="small-hall-dimension-label">WIDTH</div>
                    <div className="small-hall-dimension-value">
                      FT. - 58 | MTR. - 17.68
                    </div>
                  </div>

                  {/* Height */}
                  <div className="small-hall-dimension-card">
                    <div className="small-hall-dimension-label">HEIGHT</div>
                    <div className="small-hall-dimension-value">
                      FT. - 15 | MTR. - 4.57
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
