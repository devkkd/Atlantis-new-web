import React, { useEffect, useState } from "react";
import "./index.css";
import api from "../../admin/services/api";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

const Contact2Head = () => {
  const [contact, setContact] = useState({
    title: "",
    subtitle: "",
    description: "",
    address: "",
    phone: "",
    email: "",
    facebook: "",
    instagram: "",
    youtube: "",
    pinterest: "",
  });

  useEffect(() => {
    getContact();
  }, []);

  const getContact = async () => {
    try {
      const { data } = await api.get("/contact");

      if (data.success) {
        setContact(data.contact);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="contact2-section">
      <div className="contact2-content-wrapper-head">
        <div className="arrow">
          <hr className="form-line1" />
        </div>

        <div className="text">
          <h1 className="form-title1">{contact.title}</h1>
        </div>
      </div>

      <div className="block1">
        <div className="empty"></div>

        <div className="material">
          <div className="contact2-content-wrapper">
            <h2 className="contact2-subtitle">
              {contact.subtitle}
            </h2>

            <p className="contact2-description">
              {contact.description}
            </p>

            <div className="contact2-group">
              <h3 className="contact2-group-title">
                ADDRESS
              </h3>

              <p className="contact2-group-content">
                {contact.address}
              </p>
            </div>

            <div className="contact2-group">
              <h3 className="contact2-group-title">
                PHONE AND EMAIL ADDRESS
              </h3>

              <p className="contact2-group-content">
                <a
                  href={`tel:${contact.phone}`}
                  className="contact2-phone-link1"
                >
                  {contact.phone}
                </a>

                {" | "}

                <a
                  href={`mailto:${contact.email}`}
                  className="contact2-email-link1"
                >
                  {contact.email}
                </a>
              </p>
            </div>
          </div>

          <div className="contact2-group">
            <h3 className="contact2-group-title">
              FOLLOW US ON SOCIAL MEDIA
            </h3>

            <div className="contact2-social-icons">
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon fb"
              >
                <FaFacebook
                  size={38}
                  color="#1877F2"
                  style={{
                    background: "#fffcf5",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                />
              </a>

              <a
                href={contact.instagram}
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
                href={contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon yt"
              >
                <FaYoutube
                  size={35}
                  color="#FF0000"
                  style={{
                    background: "#fffcf5",
                    borderRadius: "12px",
                    padding: "4px",
                  }}
                />
              </a>

              <a
                href={contact.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon pinterest"
              >
                <FaPinterest
                  size={32}
                  color="#E60023"
                  style={{
                    background: "#fffcf5",
                    borderRadius: "50%",
                    padding: "4px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact2Head;