import { Helmet } from "react-helmet-async";
import React from "react";
import LandingSlider from "../components/landing_slider";
import Celebration from "../components/celebration";
import Hover from "../components/hover";
import Atlantiis from "../components/atlantiis";
import Menu from "../components/menu";
import PanoramaViewer from "../components/360_tour";
import Wedding from "../components/wedding";
import Business from "../components/business";
import Discover from "../components/discover";
import Award from "../components/award";
import Real from "../components/real";
import Magic from "../components/magic_unfold";
import Form from "../components/form";
import FooterAll from "../components/footer_all";
const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>
          {" "}
          Atlantiis | Premier Banquet Hall In Jaipur for your dream events
        </title>
        <meta
          name="description"
          content="Book your Dream Event with premium banquet hall of Jaipur, perfect place for destination wedding, corporate events, or any other type of event "
        />
        <meta
          name="keywords"
          content="banquet hall in jaipur , function halls near me , royal palace banquet hall, good banquet halls near me , banquet halls near me. "
        />
        {/* <meta property="og:title" content="Atlantiis | Home" />
        <meta property="og:description" content="Welcome to Atlantiis, Jaipur's premier event venue for all occasions." />
        <meta property="og:image" content="/atlantiis_landscape.png" />
        <meta property="og:type" content="website" /> */}
      </Helmet>
      <LandingSlider />
      <Celebration />
      <Hover />
      <Atlantiis />
      {/* <Menu /> */}
      {/* <PanoramaViewer /> */}
      <Wedding />
      <Business />
      {/* <Discover /> */}
      <Award />
      <Real />
      <Magic />
      <Form />
      <FooterAll />
    </>
  );
};

export default HomePage;
