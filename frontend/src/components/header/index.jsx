import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../../admin/services/api";
import "./index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const [header, setHeader] = useState({
    logo: "",
    home: "HOME",
    venue: "VENUE",
    services: "SERVICES",
    gallery: "GALLERY",
    contact: "CONTACT US",
    phone: "+91 73000 56712",
    buttonText: "CALL US",
  });

  useEffect(() => {
    getHeader();
  }, []);

  const getHeader = async () => {
    try {
      const { data } = await api.get("/header");

      if (data.success) {
        setHeader(data.header);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    {
      to: "/",
      label: header.home,
    },
    {
      to: "/venue",
      label: header.venue,
    },
    {
      to: "/services",
      label: header.services,
    },
    {
      to: "/gallery",
      label: header.gallery,
    },
    {
      to: "/contact",
      label: header.contact,
    },
  ];

  return (
    <header className={`header ${isVisible ? "visible" : "hidden"}`}>
      <nav className="nav-container">
        {/* Logo Area */}
        <div className="logo-area">
          <Link to="/">
            {header.logo ? (
              <img
                src={header.logo}
                alt="Atlantis Logo"
                className="logo-img"
              />
            ) : (
              <div
                className="logo-img"
                style={{
                  width: "140px",
                  height: "70px",
                  background: "#f5f5f5",
                  borderRadius: "6px",
                }}
              />
            )}
          </Link>
        </div>

        {/* Nav Links */}
        <ul className={`exact-nav-links${menuOpen ? " show" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`nav-link${
                  location.pathname === link.to ? " active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Area */}
        <div className={`exact-nav-contact${menuOpen ? " show" : ""}`}>
          <span className="contact-number">{header.phone}</span>

          <a
            href={`tel:${header.phone}`}
            className="exact-call-btn"
          >
            {header.buttonText}
          </a>
        </div>

        {/* Hamburger for mobile */}
        <div
          className={`hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;