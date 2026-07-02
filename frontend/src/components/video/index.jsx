import React from 'react';
// import landingVideo from '../../assets/landing_page_vid.mp4';
import './index.css';

const Video = () => (
  <section className="video-hero-section">
    <video
      className="video-hero"
      src={landingVideo}
      autoPlay
      loop
      muted
      playsInline
    />
    {/* Optional overlay content can go here */}
  </section>
);

export default Video;
