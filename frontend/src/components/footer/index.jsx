import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "../../assets/atlantis_logo_black.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-main">
      <div className="footer-col footer-logo-col">
        <img
          src={logo}
          alt="luxury banquet hall in Jaipur"
          className="footer-logo"
        />
      </div>
      <div className="footer-col footer-links-col">
        <Link to="/" className="footer-link">
          HOME
        </Link>
        <Link to="/venue" className="footer-link">
          Venue
        </Link>
        <Link to="/services" className="footer-link">
          SERVICES
        </Link>
        <Link to="/gallery" className="footer-link">
          GALLERY
        </Link>
        <Link to="/blog" className="footer-link">BLOGS</Link>
        {/* <Link to="/contact" className="footer-link">CONTACT</Link> */}
      </div>
      <div className="footer-col footer-contact-col">
        {/* <div className="footer-contact-title">CONTACT US</div> */}
        <div className="footer-contact-desc">
          Situated near Sitapura and close to major city landmarks,
          <br />
          Atlantiis Jaipur is easy to reach for guests across the city and
          beyond.
        </div>
        <div className="footer-contact-address">
          Infront of Novotel Hotel, Near JECC, Tonk Rd, Sitapura Industrial
          <br />
          Area, Govardhan Nagar, Jaipur, Rajasthan 302022
        </div>
        <div className="footer-contact-phone">
          <a href="tel:+917300056712" className="footer-contact-link">
            +91 73000 56712
          </a>
        </div>
        <div className="footer-contact-email">
          <a
            href="mailto:info@atlantiisbanquet.com"
            className="footer-contact-link"
          >
            info@atlantiisbanquet.com
          </a>
        </div>
      </div>
    </div>

    <div className="faded-text-divider"></div>

    <div className="footer-bottom">
      <div className="footer-bottom-left">
        © COPYRIGHT ATLANTIIS | ALL RIGHTS RESERVED | Crafted and Powered by{" "}
        <a
          href="https://www.kontentkraftdigital.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#b28c47",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Kontent Kraft Digital
        </a>
      </div>
      <div className="footer-bottom-right">
        <span className="footer-follow">FOLLOW US</span>
        <a
          href="https://www.facebook.com/profile.php?id=61577228375903"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-icon fb"
        >
          <FaFacebook
            size={38}
            color="#1877F2"
            style={{
              background: "#f6e5bc",
              borderRadius: "50%",
              padding: "4px",
            }}
          />
        </a>
        <a
          href="https://www.instagram.com/atlantiis_banquet/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-icon ig"
        >
          <FaInstagram
            size={30}
            color="#fff"
            style={{
              background:
                "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              borderRadius: "50%",
              padding: "4px",
            }}
          />
        </a>
        <a
          href="https://www.youtube.com/@AtlantisBanquet"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-icon yt"
        >
          <FaYoutube
            size={35}
            color="#FF0000"
            style={{
              background: "#f6e5bc",
              borderRadius: "12px",
              padding: "4px",
            }}
          />
        </a>
        <a
          href="https://in.pinterest.com/atlantiisbanquet/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-icon pinterest"
        >
          <FaPinterest
            size={32}
            color="#E60023"
            style={{
              background: "#f6e5bc",
              borderRadius: "50%",
              padding: "4px",
            }}
          />
        </a>
      </div>
    </div>
    <div className="block">ATLANTIIS-THE LUXURY BANQUET</div>
    {/* <div className="footer-faded-text">ATLANTIIS - THE LUXURY BANQUET</div> */}
  </footer>
);

export default Footer;
