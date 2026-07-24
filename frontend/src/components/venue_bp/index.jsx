import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";
import api from "../../admin/services/api";

const VenueBP = () => {

  const [loading, setLoading] = useState(true);

  const [venue, setVenue] = useState({
    title: "",
    subtitle: "",
    description: ""
  });

  useEffect(() => {
    getVenue();
  }, []);

  const getVenue = async () => {
    try {
      const { data } = await api.get("/venue");

      if (data.venue) {
        setVenue({
          title: data.venue.title || "",
          subtitle: data.venue.subtitle || "",
          description: data.venue.description || ""
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="venuebp-title-row">
        <span className="venuebp-line" />

        <h1 className="venuebp-title">
          {loading ? (
            <Skeleton width={260} />
          ) : (
            venue.title
          )}
        </h1>

        <span className="venuebp-line-r" />
      </div>

      <div className="venuebp-container">

        <h2 className="venuebp-subtitle">
          {loading ? (
            <Skeleton width={420} />
          ) : (
            venue.subtitle
          )}
        </h2>

        <p className="venuebp-description">
          {loading ? (
            <Skeleton count={5} />
          ) : (
            venue.description
          )}
        </p>

      </div>
    </>
  );
};

export default VenueBP;