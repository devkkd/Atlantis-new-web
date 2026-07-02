import React from 'react';
import './index.css';
import BlogLandscape from '/contact_landscape.jpeg';
import BlogPotrait from '/landing_potrait_5.jpeg';

const BlogLanding = () => (
  <div className="blog-landing-container">
    <img src={BlogLandscape} alt="venue Landscape" className="blog-landing-img desktop-img" />
    <img src={BlogPotrait} alt="venue Potrait" className="blog-landing-img mobile-img" />
  </div>
);

export default BlogLanding;
