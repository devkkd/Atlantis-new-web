import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Lawn = () => {
  return (
    <>
      <section className="lawn-hall-section">
        <div className="lawn-hall-header-row">
          <div className="lawn-hall-header-line"></div>
          <h1 className="lawn-hall-title lawn-hall-title-spaced">THE LAWN</h1>
        </div>
        <h2 className="lawn-hall-subtitle">CELEBRATE UNDER THE OPEN SKY</h2>
        <p className="lawn-hall-description">
          Our beautiful landscaped outdoor wedding lawn is perfect for vibrant
          day events or romantic evening ceremonies with flexible outdoor wedding decoration
          possibilities and ample space, it adds charms and freshness to
          weddings, cultural functions or casual stories.
        </p>
      </section>

      <div className="lawn-container">
        <div className="lawn-wrapper">
          <div className="lawn-grid">
            <div className="lawn-section">
              <div className="lawn-card">
                <div className="lawn-container">
                  {/* Main venue area */}
                  <div className="lawn-area">
                    <img
                      src="/lawn.jpg"
                      alt="Party hall with decor in Jaipur"
                      className="lawn-area-img"
                    />
                  </div>
                  {/* Bottom banner as a link */}
                  <Link
                    to="/gallery#lawn-gallery"
                    className="bottom-banner-lawn-hall"
                  >
                    SEE The Lawn IMAGES →
                  </Link>
                </div>
              </div>
            </div>

            {/* Information Section */}
            <div className="lawn-hall-info-section">
              {/* Seating Capacity */}
              <div className="lawn-hall-capacity-section">
                <h2 className="lawn-hall-section-title">SEATING CAPACITY</h2>
                {/* Updated grid to show 4 columns on larger screens, 2 on medium screens */}
                <div className="lawn-hall-capacity-grid">
                  <div className="lawn-hall-capacity-card">
                    <div className="lawn-hall-capacity-label">THEATRE</div>
                    <div className="lawn-hall-capacity-number">620</div>
                  </div>
                  <div className="lawn-hall-capacity-card">
                    <div className="lawn-hall-capacity-label">CLASSROOM</div>
                    <div className="lawn-hall-capacity-number">375</div>
                  </div>
                  {/* <div className="lawn-hall-capacity-card">
                    <div className="lawn-hall-capacity-label">COCKTAIL</div>
                    <div className="lawn-hall-capacity-number">330</div>
                  </div> */}
                  {/* <div className="lawn-hall-capacity-card">
                    <div className="lawn-hall-capacity-label">SIT DOWN</div>
                    <div className="lawn-hall-capacity-number">200</div>
                  </div> */}
                </div>
              </div>

              {/* Dimensions */}
              <div className="lawn-hall-dimensions-section">
                <h2 className="lawn-hall-section-title">DIMENSIONS</h2>
                <div className="lawn-hall-dimensions-list">
                  {/* Total Area */}
                  <div className="lawn-hall-dimension-card">
                    <div className="lawn-hall-dimension-label">TOTAL AREA</div>
                    <div className="lawn-hall-dimension-value">
                      SQ. FT. - 12,825 | SQ. MTR. - 1,191.48
                    </div>
                  </div>

                  {/* Length */}
                  <div className="lawn-hall-dimension-card">
                    <div className="lawn-hall-dimension-label">LENGTH</div>
                    <div className="lawn-hall-dimension-value">
                      FT. - 135 | MTR. - 41.15
                    </div>
                  </div>

                  {/* Width */}
                  <div className="lawn-hall-dimension-card">
                    <div className="lawn-hall-dimension-label">WIDTH</div>
                    <div className="lawn-hall-dimension-value">
                      FT. - 95 | MTR. - 28.96
                    </div>
                  </div>

                  {/* Height */}
                  {/* <div className="lawn-hall-dimension-card">
                    <div className="lawn-hall-dimension-label">HEIGHT</div>
                    <div className="lawn-hall-dimension-value">
                      FT. - 15 | MTR. - 4.57
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
