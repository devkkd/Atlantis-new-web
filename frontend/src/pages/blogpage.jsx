import React from 'react'
import FooterALL from '../components/footer_all'
import Form from '../components/form'
import Blog from '../components/blog'
import { Helmet } from 'react-helmet-async'
import BlogLanding from '../components/blog_landing'

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Wedding & Event Tips | Atlantiis Banquet Hall Jaipur Blog</title>
        <meta name="description" content="Explore expert tips, trends, and inspiration for weddings and events in Jaipur. Read blogs by Atlantiis Luxury Banquet Hall to plan your perfect celebration." />
        <meta name="keywords" content="luxury banquet hall in Jaipur, Jaipur’s top wedding and event venue, Premium banquet hall Jaipur, Top Event & Wedding Venue Jaipur" />
        {/* <meta property="og:title" content="Atlantiis | Contact" /> */}
        {/* <meta property="og:description" content="Contact Atlantiis, Jaipur's premier event venue. Get in touch for bookings, inquiries, and more information." /> */}
        {/* <meta property="og:image" content="/contact_landscape.png" /> */}
        {/* <meta property="og:type" content="website" /> */}
      </Helmet>
      <BlogLanding />
      <Blog />
      <Form />
      <FooterALL />
    </>
  )
}

export default BlogPage