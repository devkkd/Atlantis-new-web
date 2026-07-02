import React from 'react'
import GalleryLanding from '../components/gallery_landing'
import Form from '../components/form'
import FooterAll from '../components/footer_all'
import Gallerybp from '../components/gallery_bp'
import GalleryImages from '../components/gallery_images'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// ScrollToHash component for anchor navigation
const ScrollToHash = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return null;
};

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - Atlantiis Banquet Hall | Event and venue highlight</title>
        <meta name="description" content="Witness stunning decor, grand celebrations & real event moments at our Jaipur banquet hall. Explore our gallery to envision your perfect celebration." />
        <meta name="keywords" content="Banquet hall gallery , Event gallery banquet hall , Banquet hall decoration images , Banquet interior gallery, Event setup pictures banquet hall" />
        {/* <meta property="og:title" content="Atlantiis | Gallery" />
        <meta property="og:description" content="View the gallery of Atlantiis, Jaipur's luxury event venue. Explore photos of weddings, business events, and celebrations." />
        <meta property="og:image" content="/gallery_landscape.png" />
        <meta property="og:type" content="website" /> */}
      </Helmet>
      <ScrollToHash />
      <GalleryLanding />
      <Gallerybp />
      <GalleryImages />
      <Form />
      <FooterAll />
    </>
  )
}

export default GalleryPage