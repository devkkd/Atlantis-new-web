import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import logo from "../../assets/atlantis_logo_black.png";
import api from "../../admin/services/api";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  const [footer, setFooter] = useState({
    logo: "",
    home: "HOME",
    venue: "Venue",
    services: "SERVICES",
    gallery: "GALLERY",
    blog: "BLOGS",
    description: "",
    address: "",
    phone: "",
    email: "",
    copyright: "",
    poweredBy: "",
    poweredByLink: "",
    facebook: "",
    instagram: "",
    youtube: "",
    pinterest: "",
    bottomText: "",
  });

  useEffect(() => {
    fetchFooter();
  }, []);

  const fetchFooter = async () => {
    try {
      const { data } = await api.get("/footer");

      if (data.success) {
        setFooter(data.footer);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
 <footer className="footer-section1">
  <div className="footer-main">
    <div className="footer-col footer-logo-col">
      <img
        src={footer.logo || logo}
        alt="footer-logo"
        className="footer-logo"
      />
    </div>

    <div className="footer-col footer-links-col">
      <Link to="/" className="footer-link">
        {footer.home}
      </Link>

      <Link to="/venue" className="footer-link">
        {footer.venue}
      </Link>

      <Link to="/services" className="footer-link">
        {footer.services}
      </Link>

      <Link to="/gallery" className="footer-link">
        {footer.gallery}
      </Link>

      <Link to="/blog" className="footer-link">
        {footer.blog}
      </Link>
    </div>

    <div className="footer-col footer-contact-col">
      <div className="footer-contact-desc">
        {footer.description}
      </div>

      <div className="footer-contact-address">
        {footer.address}
      </div>

      <div className="footer-contact-phone">
        <a
          href={`tel:${footer.phone}`}
          className="footer-contact-link"
        >
          {footer.phone}
        </a>
      </div>

      <div className="footer-contact-email">
        <a
          href={`mailto:${footer.email}`}
          className="footer-contact-link"
        >
          {footer.email}
        </a>
      </div>
    </div>
  </div>

  <div className="faded-text-divider"></div>

  <div className="footer-bottom">
    <div className="footer-bottom-left">
      {footer.copyright}

      {footer.poweredBy && (
        <>
          {" "} | Crafted and Powered by{" "}
          <a
            href={footer.poweredByLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#b28c47",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            {footer.poweredBy}
          </a>
        </>
      )}
    </div>

    <div className="footer-bottom-right">
      <span className="footer-follow">FOLLOW US</span>

      <a
        href={footer.facebook}
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
        href={footer.instagram}
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
        href={footer.youtube}
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
        href={footer.pinterest}
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

  <div className="block">
    {footer.bottomText}
  </div>
</footer>
  );
};

export default Footer;
