import React, { useEffect, useState } from "react";
import "./index.css";
import api from "../../admin/services/api";

const Celebration = () => {

  const [celebration, setCelebration] = useState({

    title1: "",

    subtitle1: "",

    title2: "",

    subtitle2: ""

  });

  useEffect(() => {

    getCelebration();

  }, []);

  const getCelebration = async () => {

    try {

      const { data } = await api.get("/home");

      if (data.celebrationSection) {

        setCelebration(data.celebrationSection);

      }

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <section className="celebration-section">

      <div className="celebration-title-row">

        <hr className="celebration-line" />

        <h1 className="celebration-title">

          {celebration.title1}

        </h1>

        <hr className="celebration-line" />

      </div>

      <p className="celebration-subtitle">

        {celebration.subtitle1}

      </p>

      <div
        className="celebration-title-row"
        style={{ marginTop: "4vh" }}
      >

        <h2 className="celebration-title">

          {celebration.title2}

        </h2>

      </div>

      <p className="celebration-subtitle">

        {celebration.subtitle2}

      </p>

    </section>

  );

};

export default Celebration;