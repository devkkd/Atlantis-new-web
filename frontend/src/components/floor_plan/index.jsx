import React from "react";
import "./index.css";

const FloorPlan = () => {
  return (
 <>
    <section className="floor-plan-section">
      <div className="floor-plan-header-row">
        <div className="floor-plan-header-line"></div>
        {/* <h1 className="business-title">WEDDING AT ATLANTIIS</h1> */}
        <h1 className="floor-plan-title floor-plan-title-spaced">FLOOR PLAN</h1>
        {/* <button className="floor-plan-cta">BOOK YOUR EVENT</button> */}
      </div>
      <h2 className="floor-plan-subtitle">VISUALIZE YOUR EVENT WITH CONFIDENCE</h2>
      <p className="floor-plan-description">
      Explore the detailed floor plan of Atlantis Jaipur to understand our layout and plan your event effortlessly. From guest flow to stage placement, dining zones to lounge areas—our structured blueprint ensures a seamless experience for any gathering size.
      </p>
    </section>
    <div className="photo">
      <img src="/floor_plan.png" alt="Floor Plan" className="Outdoor wedding venue Jaipur" style={{height: "100%"}}/>
    </div>
 </>   
  );
};

export default FloorPlan;
