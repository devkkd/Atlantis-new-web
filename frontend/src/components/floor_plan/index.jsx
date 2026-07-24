import React, { useEffect, useState } from "react";
import api from "../../admin/services/api";

import "./index.css";

const FloorPlan = () => {
  const [floorPlan, setFloorPlan] = useState({
    image: "",
    title: "",
    subtitle: "",
    description: ""
  });

  useEffect(() => {
    getFloorPlan();
  }, []);

  const getFloorPlan = async () => {
    try {
      const { data } = await api.get("/venue");

      if (data.success && data.venue) {
        setFloorPlan({
          image: data.venue.floorPlan?.image || "",
          title: data.venue.floorPlan?.title || "",
          subtitle: data.venue.floorPlan?.subtitle || "",
          description: data.venue.floorPlan?.description || ""
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="floor-plan-section">
        <div className="floor-plan-header-row">
          <div className="floor-plan-header-line"></div>

          <h1 className="floor-plan-title floor-plan-title-spaced">
            {floorPlan.title}
          </h1>
        </div>

        <h2 className="floor-plan-subtitle">
          {floorPlan.subtitle}
        </h2>

        <p className="floor-plan-description">
          {floorPlan.description}
        </p>
      </section>

      <div className="photo">
        <img
          src={floorPlan.image || "/floor_plan.png"}
          alt="Floor Plan"
          className="Outdoor wedding venue Jaipur"
          style={{ height: "100%" }}
        />
      </div>
    </>
  );
};

export default FloorPlan;