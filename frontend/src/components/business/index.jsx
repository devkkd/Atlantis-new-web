import React, { useState, useEffect } from "react";
import "./index.css";
import api from "../../admin/services/api";

const BusinessEvent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const [businessImages, setBusinessImages] = useState([
    {
      image: "",
      alt: "",
    },
    {
      image: "",
      alt: "",
    },
  ]);

  const [businessContent, setBusinessContent] = useState({
    title: "",
    subtitle: "",
    description: "",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (businessImages.filter((item) => item.image).length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const total = businessImages.filter((item) => item.image).length;
        return (prev + 1) % total;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [businessImages]);

  useEffect(() => {
    getBusinessImages();
  }, []);

  const getBusinessImages = async () => {
    try {
      const { data } = await api.get("/home");

      if (data.businessSection?.length) {
        setBusinessImages(data.businessSection);
      }

      setBusinessContent({
        title: data.businessContent?.title || "",
        subtitle: data.businessContent?.subtitle || "",
        description: data.businessContent?.description || "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="business-section">
        <div className="business-header-row">
          <div className="business-header-line"></div>

          <h1 className="business-title business-title-spaced">
            {businessContent.title}
          </h1>

          <button
            className="business-cta"
            onClick={() =>
              window.open("https://wa.me/917300056712", "_blank")
            }
          >
            BOOK YOUR EVENT
          </button>
        </div>

        <h2 className="business-subtitle">
          {businessContent.subtitle}
        </h2>

        <p className="business-description">
          {businessContent.description}
        </p>
      </section>

      <div className="business-landing-container">
        {!isMobile && (
          <img
            src={businessImages[currentIndex]?.image}
            alt={businessImages[currentIndex]?.alt}
            className="business-landing-img desktop-img business-slider-fade"
            key={currentIndex}
          />
        )}

        {isMobile && (
          <img
            src={businessImages[currentIndex]?.image}
            alt={businessImages[currentIndex]?.alt}
            className="business-landing-img mobile-img business-slider-fade"
            key={currentIndex}
          />
        )}

        <div className="business-slider-dots">
          {businessImages
            .filter((item) => item.image)
            .map((_, idx) => (
              <span
                key={idx}
                className={`business-slider-dot${
                  currentIndex === idx ? " active" : ""
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default BusinessEvent;