import React from "react";
import "./index.css";

const Discover = () => {
  return (
    <>
      <section className="discover-section">
        <div className="discover-header-row">
          <div className="discover-header-line"></div>
          <h1 className="discover-title discover-title-spaced">
            DISCOVER ATLANTIIS IN MOMENTS
          </h1>
        </div>
        <h2 className="discover-subtitle">
          A VISUAL JOURNEY THROUGH ELEGANCE AND CELEBRATION
        </h2>
        <p className="discover-description">
          Host product launches, seminars, award nights, or team-building
          sessions in a grand yet professional setting. Equipped with projector
          systems, soundproofing, and customized layouts, we redefine corporate
          hosting.
        </p>
      </section>
      <section className="discover-highlight-section">
        <div className="discover-highlight-row">
          <div className="discover-highlight-col">
            <img src="/discover_left.png" alt="Over 5 Years of Trusted Hospitality" className="discover-highlight-img" />
            <div className="discover-highlight-caption">
              OVER 5 YEARS OF<br />TRUSTED HOSPITALITY
            </div>
          </div>
          <div className="discover-highlight-col">
            <img src="/discover_right.png" alt="200+ Weddings & Events Celebrated with Excellence" className="discover-highlight-img" />
            <div className="discover-highlight-caption">
              200+ WEDDINGS & EVENTS<br />CELEBRATED WITH EXCELLENCE
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
