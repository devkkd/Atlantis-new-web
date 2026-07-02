import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../../admin/services/api";
import './index.css';

// Updated images with descriptive alt attributes




// Hook to detect mobile view
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

const LandingSlider = () => {
  const isMobile = useIsMobile();
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const length = images.length || 1;
  const navigate = useNavigate();

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    setFade(false);
    const fadeTimeout = setTimeout(() => setFade(true), 50);
    return () => clearTimeout(fadeTimeout);
  }, [current]);

  useEffect(() => {
    if (isMobile) return;
    const timer = setTimeout(() => {
      setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearTimeout(timer);
  }, [current, length, isMobile]);

  useEffect(() => {
    setCurrent(0);
  }, [isMobile]);

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
  const goToSlide = idx => setCurrent(idx);

  const handleImageClick = (e) => {
    if (isMobile) return;
    const bounds = e.target.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    if (x < bounds.width / 2) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handleGalleryClick = () => {
    navigate('/gallery');
  };
  useEffect(() => {

    getHeroImages();

}, []);

const getHeroImages = async () => {

    try {

        const { data } = await api.get("/home");

       if (data.heroImages?.length) {

    const hero = data.heroImages
    .filter(item => item.image)
    .map(item => ({
        src: item.image,
        alt: item.alt || ""
    }));

    setImages(hero);

}

    } catch (err) {

        console.log(err);

    }

};
if (!images.length) {

    return (

        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            Loading...
        </div>

    );

}
  return (
    <div className="landing-slider-container">
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="slider-image"
        onClick={handleImageClick}
        style={{
          cursor: isMobile ? 'grab' : 'pointer',
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)'
        }}
        {...(isMobile ? {
          onTouchStart: handleTouchStart,
          onTouchMove: handleTouchMove,
          onTouchEnd: handleTouchEnd
        } : {})}
      />

      <div className="slider-controls">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot${current === idx ? ' active' : ''}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
        <button className="gallery-btn" onClick={handleGalleryClick}>GALLERY</button>
      </div>

      <div className="slider-book">
        <div className="slider-book-content">
          <span>BOOK YOUR EVENT</span>
          <button
            className="book-btn"
            onClick={() => window.open('https://wa.me/917300056712', '_blank')}
          >
            BOOK NOW →
          </button>
        </div>
      </div>

      <div className="slider-info">
        <div className="slider-info-content">
          <span>ATLANTIIS</span>
          <div className="stars">{'★'.repeat(5)}</div>
          <span>WELCOME TO ATLANTIIS, JAIPUR</span>
        </div>
      </div>
    </div>
  );
};

export default LandingSlider;
