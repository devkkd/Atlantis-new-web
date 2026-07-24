import React, { useEffect, useState } from "react";
import "./index.css";
import api from "../../admin/services/api";

const AwardsSection = () => {
  const [awardLogos, setAwardLogos] = useState([]);
  const [awardsContent, setAwardsContent] = useState({
    title: "",
    subtitle: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAwards();
  }, []);

  const getAwards = async () => {
    try {
      setLoading(true);

      const { data } = await api.get("/home");

      setAwardLogos(data.awardsSection || []);

      setAwardsContent({
        title:
          data.awardsContent?.title || "AWARDS & RECOGNITION",
        subtitle:
          data.awardsContent?.subtitle ||
          "Distinguished by esteemed institutions for unparalleled excellence in hospitality and bespoke service.",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="awards-section">
      <div className="awards-header-row">
        <div className="awards-header-line"></div>

        <h1 className="awards-title">
          {awardsContent.title}
        </h1>

        <div className="awards-header-line"></div>
      </div>

      <h2 className="awards-subtitle">
        {awardsContent.subtitle}
      </h2>

      <div className="awards-logos-row">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div
                className="awards-logo-wrapper"
                key={index}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100px",
                    borderRadius: "8px",
                    background:
                      "linear-gradient(90deg,#ececec 25%,#f5f5f5 37%,#ececec 63%)",
                    backgroundSize: "400% 100%",
                    animation: "loading 1.2s ease-in-out infinite",
                  }}
                />
              </div>
            ))
          : awardLogos.map((logo, index) => (
              <div
                className="awards-logo-wrapper"
                key={index}
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="awards-logo"
                  loading="lazy"
                />
              </div>
            ))}
      </div>
    </section>
  );
};

export default AwardsSection;