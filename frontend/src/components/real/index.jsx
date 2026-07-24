import React, { useState, useEffect } from "react";
import "./index.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import api from "../../admin/services/api";

const Star = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#e1b24b"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: "2px" }}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const Real = () => {
  const [loading, setLoading] = useState(true);

  const [content, setContent] = useState({
    title: "",
    subtitle: "",
    description: "",
    ratingTitle: "",
    trustpilotTitle: "",
  });

  const [testimonials, setTestimonials] = useState([]);

  const marqueeTestimonials =
    testimonials.length > 0
      ? [...testimonials, ...testimonials]
      : [];

  useEffect(() => {
    getHome();
  }, []);

  const getHome = async () => {
    try {
      const { data } = await api.get("/home");

      setContent({
        title: data.realContent?.title || "",
        subtitle: data.realContent?.subtitle || "",
        description: data.realContent?.description || "",
        ratingTitle: data.realContent?.ratingTitle || "",
        trustpilotTitle: data.realContent?.trustpilotTitle || "",
      });

      setTestimonials(
        (data.reviewSection || []).filter(
          (item) =>
            (item.author || "").trim() ||
            (item.text || "").trim()
        )
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="real-section">
      <div className="real-header-row">
        <div className="real-header-line"></div>

        <h1 className="real-title real-title-spaced">
          {loading ? (
            <Skeleton width={420} height={38} />
          ) : (
            content.title
          )}
        </h1>
      </div>

      <h2 className="real-subtitle">
        {loading ? (
          <Skeleton width={350} />
        ) : (
          content.subtitle
        )}
      </h2>

      <p className="real-description">
        {loading ? (
          <>
            <Skeleton count={4} />
          </>
        ) : (
          content.description
        )}
      </p>

      <div className="real-ratings-row">
        {loading ? (
          <>
            <Skeleton width={90} />
            <Skeleton
              width={170}
              height={25}
              style={{ marginLeft: 15 }}
            />
            <Skeleton
              width={90}
              style={{ marginLeft: 20 }}
            />
            <Skeleton
              width={120}
              style={{ marginLeft: 15 }}
            />
          </>
        ) : (
          <>
            <span className="real-rating-label">
              {content.ratingTitle}
            </span>

            {[...Array(5)].map((_, i) => (
              <Star key={i} />
            ))}

            <img
              src="google.png"
              alt="Google"
              className="real-rating-logo"
            />

            <span className="real-rating-divider">|</span>

            <span className="real-rating-label">
              {content.trustpilotTitle}
            </span>

            <img
              src="trustpilot.svg"
              alt="Trustpilot"
              className="real-rating-logo trustpilot"
            />

            <img
              src="trustpilot.png"
              alt="Award"
              className="real-rating-logo award"
              style={{ marginLeft: "0.5rem" }}
            />
          </>
        )}
      </div>

      <div className="real-testimonials-row marquee" tabIndex={0}>
        <div className="real-marquee-track">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div
                  className="real-testimonial-card"
                  key={index}
                >
                  <Skeleton height={20} width={30} />

                  <Skeleton
                    count={5}
                    style={{ marginTop: 10 }}
                  />

                  <Skeleton
                    width={120}
                    style={{ marginTop: 20 }}
                  />
                </div>
              ))
            : marqueeTestimonials.map((item, index) => (
                <div
                  className="real-testimonial-card"
                  key={index}
                >
                  <div className="real-quote-mark">“</div>

                  <div className="real-testimonial-text">
                    {item.text}
                  </div>

                  <div className="real-testimonial-author">
                    – <b>{item.author}</b>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Real;