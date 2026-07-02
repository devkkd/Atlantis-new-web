import React from 'react';
import './index.css';

const Location = () => {
  return (
    <section className="location-section">
      <div className="location-header">
        {/* <hr className="location-line" /> */}
        {/* <h1 className="location-title">LOCATE US</h1> */}
        {/* <hr className="location-line" /> */}
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.8606701121535!2d75.82184987880031!3d26.780710905762433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9c1b6099e4b%3A0x41b3be08e3f5d802!2sATLANTIIS%20(An%20Ultra%20Luxury%20Banquet%20Hall%20and%20Open%20Garden)!5e0!3m2!1sen!2sin!4v1750150272046!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Atlantis Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
