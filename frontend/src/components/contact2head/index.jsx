import React from 'react';
import './index.css';
import { FaFacebook, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

const Contact2Head = () => {
  return (
    <section className="contact2-section">
      {/* This header will now be centered globally */}
      <div className="contact2-content-wrapper-head">
        <div className='arrow'>
          <hr className="form-line1" />
        </div>  
        <div className='text'>
          <h1 className='form-title1'>CONTACT US</h1>
        </div>
      </div>

      {/* This wrapper contains all left-aligned content */}
      <div className='block1'>
      <div className='empty'></div>
      <div className='material'>
      <div className="contact2-content-wrapper">
        <h2 className="contact2-subtitle">ATLANTIIS - THE LUXURY BANQUET</h2>
        <p className="contact2-description">
          Situated near Sitapura and close to major city landmarks, Atlantiis Jaipur is easy to reach for guests across the city and beyond.
        </p>

        <div className="contact2-group">
          <h3 className="contact2-group-title">ADDRESS</h3>
          <p className="contact2-group-content">
            Infront of Novotel Hotel, Near JECC, Tonk Rd, Sitapura Industrial Area, Govardhan Nagar, Jaipur, Rajasthan 302022
          </p>
        </div>

        <div className="contact2-group">
          <h3 className="contact2-group-title">PHONE AND EMAIL ADDRESS</h3>
          <p className="contact2-group-content">
            <a href="tel:+919828060003" className="contact2-phone-link1">+91 98280 60003</a> | <a href="mailto:info@atlantiisbanquet.com" className="contact2-email-link1">info@atlantiisbanquet.com</a>
          </p>
          </div>
        </div>

        <div className="contact2-group">
          <h3 className="contact2-group-title">FOLLOW US ON SOCIAL MEDIA</h3>
          <div className="contact2-social-icons">
            {/* <span className="social-handle">atlantiisjaipur</span> */}
            <a href="https://www.facebook.com/profile.php?id=61577228375903" target="_blank" rel="noopener noreferrer" className="footer-social-icon fb">
          <FaFacebook size={38} color="#1877F2" style={{ background: "#fffcf5", borderRadius: "50%", padding: "4px" }} />
        </a>
        <a href="https://www.instagram.com/atlantiis_banquet/" target="_blank" rel="noopener noreferrer" className="footer-social-icon ig">
          <FaInstagram size={30} color="#fff" style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", borderRadius: "50%", padding: "4px" }} />
        </a>
        <a href="https://www.youtube.com/@AtlantisBanquet" target="_blank" rel="noopener noreferrer" className="footer-social-icon yt">
          <FaYoutube size={35} color="#FF0000" style={{ background: "#fffcf5", borderRadius: "12px", padding: "4px" }} />
        </a>
        <a href="https://in.pinterest.com/atlantiisbanquet/" target="_blank" rel="noopener noreferrer" className="footer-social-icon pinterest">
          <FaPinterest size={32} color="#E60023" style={{ background: "#fffcf5", borderRadius: "50%", padding: "4px" }} />
        </a>
          </div>
        </div>
      </div> {/* End of contact2-content-wrapper */}
    </div>
    </section>
  );
};

export default Contact2Head;
