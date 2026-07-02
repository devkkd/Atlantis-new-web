import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import api from "../../admin/services/api";



const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

const AutoManualWeddingSlider = ({ cards }) => {
  const [current, setCurrent] = useState(0);
  const startX = useRef(null);
  const deltaX = useRef(0);
  const sliderRef = useRef();
  const intervalRef = useRef();

  // Auto-advance logic
  useEffect(() => {
    startAutoAdvance();
    return () => stopAutoAdvance();
    // eslint-disable-next-line
  }, [current, cards.length]);

  const startAutoAdvance = () => {
    stopAutoAdvance();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 3000);
  };
  const stopAutoAdvance = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
  const resetAutoAdvance = () => {
    stopAutoAdvance();
    startAutoAdvance();
  };

  // Touch events
  const handleTouchStart = (e) => {
    stopAutoAdvance();
    startX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    if (startX.current !== null) {
      deltaX.current = e.touches[0].clientX - startX.current;
    }
  };
  const handleTouchEnd = () => {
    if (deltaX.current > 50 && current > 0) {
      setCurrent(current - 1);
    } else if (deltaX.current < -50 && current < cards.length - 1) {
      setCurrent(current + 1);
    }
    startX.current = null;
    deltaX.current = 0;
    resetAutoAdvance();
  };

  // Mouse events for desktop testing (optional)
  const handleMouseDown = (e) => {
    stopAutoAdvance();
    startX.current = e.clientX;
    sliderRef.current.style.cursor = "grabbing";
  };
  const handleMouseMove = (e) => {
    if (startX.current !== null) {
      deltaX.current = e.clientX - startX.current;
    }
  };
  const handleMouseUp = () => {
    if (deltaX.current > 50 && current > 0) {
      setCurrent(current - 1);
    } else if (deltaX.current < -50 && current < cards.length - 1) {
      setCurrent(current + 1);
    }
    startX.current = null;
    deltaX.current = 0;
    if (sliderRef.current) sliderRef.current.style.cursor = "grab";
    resetAutoAdvance();
  };

  // Dot click
  const handleDotClick = (idx) => {
    setCurrent(idx);
    resetAutoAdvance();
  };

  return (
    <div
      className="manual-wedding-slider"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ touchAction: "pan-y", cursor: "grab" }}
    >
      <div
        className="manual-slider-track"
        style={{
          display: "flex",
          transform: `translateX(-${current * 100}vw)`,
          transition: "transform 0.4s cubic-bezier(.7,0,.3,1)",
        }}
      >
        {cards.map((card, idx) => (
          <div
            className="wedding-card manual-slider-card"
            key={idx}
            style={{ minWidth: "100vw", maxWidth: "100vw" }}
          >
            <video
              src={card.video}
              className="wedding-card-img"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster=""
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              title={card.description}
              aria-label={card.description}
            />

            <div className="wedding-card-info">

    <span className="wedding-card-number">
        {card.number}
    </span>

    <span className="wedding-card-title">
        {card.title}
    </span>

    <p className="wedding-card-description">
        {card.description}
    </p>

</div>
          </div>
        ))}
      </div>
      <div className="manual-slider-dots">
        {cards.map((_, idx) => (
          <span
            key={idx}
            className={`manual-slider-dot${current === idx ? " active" : ""}`}
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </div>
    </div>
  );
};

const WeddingSection = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [weddingCards, setWeddingCards] = useState([]);
  useEffect(() => {

    getWeddingSection();

}, []);

const getWeddingSection = async () => {

    try {

        const { data } = await api.get("/home");

        if (data.weddingSection?.length) {

            setWeddingCards(data.weddingSection);

        }

    }

    catch (err) {

        console.log(err);

    }

};
if (!weddingCards.length) {

    return null;

}
  return (
    <section className="wedding-section">
      <div className="wedding-header-row">
        <div className="wedding-header-line"></div>
        <h1 className="wedding-title">WEDDINGS AT ATLANTIIS</h1>
        <button
          className="wedding-cta"
          onClick={() => navigate("/contact#get-in-touch")}
        >
          BOOK YOUR EVENT
        </button>
      </div>
      <h2 className="wedding-subtitle">
        WHERE EVERY LOVE STORY MEETS ROYAL ELEGANCE
      </h2>
      <p className="wedding-description">
        Celebrate your big day in a stunning wedding venue in jaipur with
        timeless memories. At atlantiis Jaipur,our grand ambiance and luxurious
        decor reflects your story. Customize your wedding destination into a
        magical reality. Whether it's an intimate wedding celebration or a
        lavish affair we make your day radiant with grace and splendor.
      </p>
      {isMobile ? (
        <AutoManualWeddingSlider cards={weddingCards} />
      ) : (
        <div className="wedding-cards-row">
          {weddingCards.map((card, idx) => (
            <div className="wedding-card" key={idx}>
              <video
                src={card.video}
                className="wedding-card-img"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className="wedding-card-info">
                <span className="wedding-card-number">{card.number}</span>
                <span className="wedding-card-title">{card.title}</span>
                <p className="wedding-card-description">
    {card.description}
</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default WeddingSection;
