import React from "react";
import "./index.css";

const menuCards = [
  {
    img: "/m1.png",
    number: "01",
    title: "VEG & NON-VEG Menu",
  },
  {
    img: "m2.png",
    number: "02",
    title: "LIVE COUNTERS & MOCKTAIL BARS",
  },
  {
    img: "m3.png",
    number: "03",
    title: "THEMATIC DECOR PACKAGES",
  },
  {
    img: "m4.png",
    number: "04",
    title: "PERSONAL EVENT MANAGER",
  },
];

const MenuSection = () => {
  return (
    <section className="menu-section">
      <div className="menu-header-row">
        <div className="menu-header-line"></div>
        <h1 className="menu-title menu-title-spaced">CURATED MENUS</h1>
        <button className="menu-cta">BOOK YOUR EVENT</button>
      </div>
      <h2 className="menu-subtitle">CUSTOM DECOR. IMPECCABLE TASTE.</h2>
      <p className="menu-description">
      Choose from an array of culinary delights crafted by our in-house chefs—from traditional Rajasthani feasts to international cuisine.
      Our decor partners transform your vision into reality with bespoke floral arrangements, lighting themes, and table settings tailored to your event.
      </p>
      <div className="menu-cards-row">
        {menuCards.map((card, idx) => (
          <div className="menu-card" key={idx}>
            <img src={card.img} alt={card.title} className="menu-card-img" />
            <div className="menu-card-info">
              <span className="menu-card-number">{card.number}</span>
              <span className="menu-card-title">{card.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection