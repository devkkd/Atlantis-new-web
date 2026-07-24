import React, { useEffect, useState } from "react";
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
  const [cms, setCms] = useState({
  title: "",
  subtitle: "",
  description: "",

  firstNameLabel: "",
  firstNamePlaceholder: "",

  lastNameLabel: "",
  lastNamePlaceholder: "",

  mobileLabel: "",
  mobilePlaceholder: "",

  emailLabel: "",
  emailPlaceholder: "",

  eventDateLabel: "",
  eventDatePlaceholder: "",

  eventTypeLabel: "",

  queryLabel: "",
  queryPlaceholder: "",

  buttonText: "",

  eventTypes: []
});
const fetchCMS = async () => {

  try {

    const { data } = await api.get("/contact-form");

    if (data.success) {
      setCms(data.contactForm);
    }

  } catch (err) {
    console.log(err);
  }

};

useEffect(() => {

  fetchCMS();

}, []);

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
    <h1 className="form-title">{cms.title}</h1>
    <hr className="form-line" />
  </div>

  <h2 className="form-subtitle">{cms.subtitle}</h2>

  <p className="form-description">{cms.description}</p>

  <form className="contact-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="firstName">
          {cms.firstNameLabel}
        </label>

        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder={cms.firstNamePlaceholder}
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">
          {cms.lastNameLabel}
        </label>

        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder={cms.lastNamePlaceholder}
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="mobileNumber">
          {cms.mobileLabel}
        </label>

        <input
          type="text"
          id="mobileNumber"
          name="mobileNumber"
          placeholder={cms.mobilePlaceholder}
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="emailAddress">
          {cms.emailLabel}
        </label>

        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          placeholder={cms.emailPlaceholder}
          value={formData.emailAddress}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="event-date">
          {cms.eventDateLabel}
        </label>

        <input
          type="date"
          id="event-date"
          name="eventDate"
          placeholder={cms.eventDatePlaceholder}
          value={formData.eventDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="eventType">
          {cms.eventTypeLabel}
        </label>

        <select
          id="eventType"
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Choose an event type
          </option>

          {cms.eventTypes?.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>

    <div className="form-group full-width">
      <label htmlFor="query">
        {cms.queryLabel}
      </label>

      <textarea
        id="query"
        name="query"
        rows="4"
        placeholder={cms.queryPlaceholder}
        value={formData.query}
        onChange={handleChange}
        required
      />
    </div>

    <button type="submit" className="send-button">
      {cms.buttonText}
    </button>
  </form>
</section>
  );
};

export default Form;