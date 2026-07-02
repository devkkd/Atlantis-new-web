import React, { useState } from 'react';
import './index.css';
import api from "../../admin/services/api";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    emailAddress: '',
    eventDate: '',
    eventType: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        // 1. Save in MongoDB
        const { data } = await api.post("/message", formData);

        // 2. WhatsApp Message
        const phoneNumber = "917300056712";

        const message =
            `New Event Inquiry!%0A` +
            `First Name: ${formData.firstName}%0A` +
            `Last Name: ${formData.lastName}%0A` +
            `WhatsApp Number: ${formData.mobileNumber}%0A` +
            `Email Address: ${formData.emailAddress}%0A` +
            `Event Date: ${formData.eventDate}%0A` +
            `Event Type: ${formData.eventType}%0A` +
            `Query: ${formData.query}`;

        const url = `https://wa.me/${phoneNumber}?text=${message}`;

        // 3. Open WhatsApp
        window.open(url, "_blank");

        // 4. Success Message
        alert(data.message);

        // 5. Reset Form
        setFormData({

            firstName: "",

            lastName: "",

            mobileNumber: "",

            emailAddress: "",

            eventDate: "",

            eventType: "",

            query: ""

        });

    }

    catch (err) {

        console.log(err);

        alert("Failed to send message.");

    }

};

  return (
    <section className="form-section" id="get-in-touch">
      <div className="form-header">
        <hr className="form-line" />
        <h1 className="form-title">GET IN TOUCH WITH ATLANTIIS</h1>
        <hr className="form-line" />
      </div>
      <h2 className="form-subtitle">WE'RE HERE TO MAKE YOUR EVENT EXTRAORDINARY</h2>
      <p className="form-description">
        Have questions or ready to start planning your celebration? Fill out the form below, and our dedicated event specialists will
        <br />
        get back to you promptly to assist with bookings, tours, and customized packages.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">FIRST NAME</label>
            <input type="text" id="firstName" name="firstName" placeholder="ENTER YOUR FIRST NAME" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">LAST NAME</label>
            <input type="text" id="lastName" name="lastName" placeholder="ENTER YOUR LAST NAME" value={formData.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="mobileNumber">WHATSAPP NUMBER</label>
            <input type="text" id="mobileNumber" name="mobileNumber" placeholder="ENTER YOUR WHATSAPP NUMBER" value={formData.mobileNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress">EMAIL ADDRESS</label>
            <input type="email" id="emailAddress" name="emailAddress" placeholder="ENTER YOUR EMAIL ADDRESS" value={formData.emailAddress} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="event-date">EVENT DATE</label>
            <input type='date' id="event-date" name="eventDate" placeholder="Select your event date" value={formData.eventDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="eventType">EVENT TYPE</label>
            <select id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} required>
              <option value="" disabled>Choose an event type</option>
              <option value="WEDDING">Wedding</option>
              <option value="BIRTHDAY">Birthday</option>
              <option value="ANNIVERSARY">Anniversary</option>
              <option value="CORPORATE">Corporate</option>
              <option value="OTHER">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="query">QUERY</label>
          <textarea id="query" name="query" rows="4" placeholder="WRITE HERE...." value={formData.query} onChange={handleChange} required></textarea>
        </div>

        <button type="submit" className="send-button">SEND →</button>
      </form>
    </section>
  );
};

export default Form;