import React, { useEffect, useState } from "react";
import api from "../../admin/services/api";
import "./index.css";

const ServiceBP = () => {

  const [service, setService] = useState({
    title: "",
    subtitle: "",
    description: "",
  });

  useEffect(() => {
    getService();
  }, []);

  const getService = async () => {
    try {
      const { data } = await api.get("/service");

      if (data.success) {
        setService(data.service.serviceLanding);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="servicebp-container">
      <div className="servicebp-title-row">
        <span className="servicebp-line" />
        <h1 className="servicebp-title">
          {service.title}
        </h1>
        <span className="servicebp-line-r" />
      </div>

      <h2 className="servicebp-subtitle">
        {service.subtitle}
      </h2>

      <p className="servicebp-description">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceBP;