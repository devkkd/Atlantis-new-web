import React, { useState, useEffect } from "react";
import "./index.css";
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
  // Duplicate testimonials for seamless infinite scroll
const [testimonials, setTestimonials] = useState([]);

const marqueeTestimonials =
    testimonials.length
        ? [...testimonials, ...testimonials]
        : [];
useEffect(() => {

    getReviews();

}, []);

const getReviews = async () => {

    try {

        const { data } = await api.get("/home");

        console.log("HOME API =>", data);
        console.log("REVIEWS =>", data.reviewSection);

        setTestimonials(

            (data.reviewSection || []).filter(

                item =>
                    (item.author || "").trim() ||
                    (item.text || "").trim()

            )

        );

    }

    catch (err) {

        console.log(err);

    }

};
if (!testimonials.length) {
    return (
        <section className="real-section">
            Loading Reviews...
        </section>
    );
}
  return (
    <>
      <section className="real-section">
        <div className="real-header-row">
          <div className="real-header-line"></div>
          <h1 className="real-title real-title-spaced">
            REAL EXPERIENCES. HONEST WORDS.
          </h1>
        </div>
        <h2 className="real-subtitle">STORIES OF CELEBRATION & SATISFACTION</h2>
        <p className="real-description">
          From weddings to corporate events, our clients share their genuine
          experiences of hosting grand occasions with us at our luxury wedding
          banquet halls in jaipur. Whether it's a dream wedding reception venue
          or a stylish luxury banquet destination, their stories speak volumes
          about our commitment to excellence.
        </p>
        {/* Ratings Row */}
        <div className="real-ratings-row">
          <span className="real-rating-label">AWESOME!</span>
          {[...Array(5)].map((_, i) => (
            <Star key={i} />
          ))}
          <img src="google.png" alt="Google" className="real-rating-logo" />
          <span className="real-rating-divider">|</span>
          <span className="real-rating-label">EXCELLENT </span>
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
        </div>
        {/* Continuous Marquee Testimonials Row */}
        <div className="real-testimonials-row marquee" tabIndex={0}>
          <div className="real-marquee-track">
            {marqueeTestimonials.map((t, idx) => (
              <div className="real-testimonial-card" key={idx}>
                <div className="real-quote-mark">“</div>
                <div className="real-testimonial-text">{t.text}</div>
                <div className="real-testimonial-author">
                  – <b>{t.author}</b>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Real;
