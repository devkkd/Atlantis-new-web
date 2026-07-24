import React, { useEffect, useState } from "react";
import api from "../../admin/services/api";
import "./index.css";

const GalleryBP = () => {

  const [content, setContent] = useState({
    title: "",
    subtitle: "",
    description: "",
  });

  useEffect(() => {
    getGalleryContent();
  }, []);

  const getGalleryContent = async () => {
    try {
      const { data } = await api.get("/gallery");

      if (data.gallery?.galleryLanding) {
        setContent({
          title: data.gallery.galleryLanding.title || "",
          subtitle: data.gallery.galleryLanding.subtitle || "",
          description: data.gallery.galleryLanding.description || "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="gallerybp-container">
      <div className="gallerybp-title-row">
        <span className="gallerybp-line" />
        <h1 className="gallerybp-title">
          {content.title}
        </h1>
        <span className="gallerybp-line-r" />
      </div>

      <h2 className="gallerybp-subtitle">
        {content.subtitle}
      </h2>

      <p className="gallerybp-description">
        {content.description}
      </p>
    </div>
  );
};

export default GalleryBP;