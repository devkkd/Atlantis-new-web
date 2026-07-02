import React from "react";
import "./index.css";

// Add your actual logo paths here (SVG/PNG in public or assets)
const awardLogos = [
  {
    src: "/jkma_logo.png",
    alt: "Jaipur’s top wedding and event venue"
  },
  {
    src: "/bmi_logo.jpg",
    alt: "Premium banquet hall Jaipur"
  },
  {
    src: "/tk_impex_logo.png",
    alt: "luxury banquet hall in Jaipur"
  },
  {
    src: "/dainik_bhaskar_logo.jpeg",
    alt: "Top Event & Wedding Venue Jaipur"
  },
  // Add more as needed
];


const AwardsSection = () => (
  <section className="awards-section">
    <div className="awards-header-row">
      <div className="awards-header-line"></div>
      <h1 className="awards-title">AWARDS & RECOGNITION</h1>
      <div className="awards-header-line"></div>
    </div>
    <h2 className="awards-subtitle">
    Distinguished by esteemed institutions for unparalleled excellence in hospitality and bespoke service.
    </h2>
    <div className="awards-logos-row">
      {awardLogos.map((logo, idx) => (
        <div className="awards-logo-wrapper" key={idx}>
          <img src={logo.src} alt={logo.alt} className="awards-logo" />
        </div>
      ))}
    </div>
  </section>
);

export default AwardsSection;
