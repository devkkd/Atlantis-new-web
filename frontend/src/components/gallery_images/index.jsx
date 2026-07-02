import React, { useState, useEffect } from "react";
import "./index.css";
import api from "../../admin/services/api";


const GalleryImages = React.memo(() => {
  const [segmentData, setSegmentData] = useState([
  {
    heading: "THE GRAND HALL",
    tagline: "A Regal Setting for Timeless Celebrations.",
    images: [],
  },
  {
    heading: "THE PRE-FUNCTION HALL",
    tagline: "Where Prestige Meets Professional Excellence.",
    images: [],
  },
  {
    heading: "DINING HALL",
    tagline: "Intimate Affairs in a Class of Their Own.",
    images: [],
  },
  {
    heading: "THE DRESSING SUITE",
    tagline: "Stay in Serenity, Rest in Royalty.",
    images: [],
  },
  {
    heading: "PROPERTY INSIGHTS",
    tagline: "A Grand Welcome Begins with Seamless Arrival.",
    images: [],
  },
]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  // Memoized Img component for gallery images
 const Img = React.memo(({ src, alt, ...props }) => (

    <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        {...props}
    />

));

  // Alt tags for the first 10 images
  const altTags = [
    "Banquet hall interior images Jaipur",
    "Jaipur banquet event photography",
    "Engagement ceremony decor Jaipur",
    "Wedding banquet hall Jaipur",
    "Outdoor wedding venue Jaipur",
    "Birthday party venue Jaipur",
    "Destination wedding venue Jaipur",
    "Social event venue Jaipur",
    "Party hall with decor in Jaipur",
    "Book banquet hall in Jaipur",
  ];
  useEffect(() => {

    getGallery();

}, []);

const getGallery = async () => {

    try {

      const { data } = await api.get("/gallery");

if (!data.success) return;

const gallery = data.gallery;

        setSegmentData([

            {

                heading: "THE GRAND HALL",

                tagline: "A Regal Setting for Timeless Celebrations.",

                images: gallery.grandHall || []

            },

            {

                heading: "THE PRE-FUNCTION HALL",

                tagline: "Where Prestige Meets Professional Excellence.",

                images: gallery.preFunction || []

            },

            {

                heading: "DINING HALL",

                tagline: "Intimate Affairs in a Class of Their Own.",

                images: gallery.diningHall || []

            },

            {

                heading: "THE DRESSING SUITE",

                tagline: "Stay in Serenity, Rest in Royalty.",

                images: gallery.dressingSuite || []

            },

            {

                heading: "PROPERTY INSIGHTS",

                tagline: "A Grand Welcome Begins with Seamless Arrival.",

                images: gallery.propertyInsights || []

            }

        ]);

    }

    catch (err) {

        console.log(err);

    }

};

  return (
    <div className="gallery-images-container">
      {segmentData.map((segment, idx) => (
        <div
          className="gallery-segment"
          key={idx}
          id={segment.heading === "THE GRAND HALL" ? "grand-hall-gallery" : segment.heading === "MINI HALL" ? "mini-hall-gallery" : segment.heading === "LAWN" ? "lawn-gallery" : undefined}
        >
          <div className="gallery-segment-heading-block">
            <div className="gallery-segment-heading">
              <div className="gallery-segment-line"></div>
              <h2>{segment.heading}</h2>
            </div>
            <div className="gallery-segment-tagline">{segment.tagline}</div>
          </div>
          <div className="gallery-rows">
            <div className="gallery-row">
              {segment.images.filter(Boolean).slice(0, 5).map((img, i) => (
                <Img
                  src={img}
                  alt={
                    (idx * 10 + i) < altTags.length
                      ? altTags[idx * 10 + i]
                      : `Segment ${idx + 1} Img ${i + 1}`
                  }
                  key={img}
                  style={{ cursor: "pointer" }}
                  onClick={() => openModal(img)}
                />
              ))}
            </div>
            <div className="gallery-row">
              {segment.images.filter(Boolean).slice(5, 10).map((img, i) => (
                <Img
                  src={img}
                  alt={
                    (idx * 10 + i + 5) < altTags.length
                      ? altTags[idx * 10 + i + 5]
                      : `Segment ${idx + 1} Img ${i + 6}`
                  }
                  key={img}
                  style={{ cursor: "pointer" }}
                  onClick={() => openModal(img)}
                />
              ))}
            </div>
          </div>
          {/* <div className="gallery-segment-360-view">
            <PanoramaViewer image={segment.panorama} />
          </div> */}
        </div>
      ))}
      {modalOpen && (
        <div
          className="gallery-modal-overlay"
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            className="gallery-modal-content"
            onClick={e => e.stopPropagation()}
            style={{
              position: "relative",
              background: "#fff",
              borderRadius: "8px",
              padding: "16px",
              maxWidth: "90vw",
              maxHeight: "90vh",
              boxShadow: "0 2px 16px rgba(0,0,0,0.3)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: 8,
                right: 8,
                background: "#fff",
                border: "none",
                fontSize: 24,
                cursor: "pointer",
                zIndex: 1,
              }}
              aria-label="Close"
            >
              &times;
            </button>
            <Img
              src={modalImg}
              alt="Enlarged preview"
              style={{
                maxWidth: "80vw",
                maxHeight: "80vh",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
});

export default GalleryImages;
