import React from 'react'
import ContactLanding from '../components/contact_landing'
import Form from '../components/form'
import Contact2Head from '../components/contact2head'
import Location from '../components/location'
import Footer from '../components/footer'
import { Helmet } from 'react-helmet-async'

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Reach Out | Top Event & Wedding Venue Jaipur</title>
        <meta name="description" content="Get in touch with us to book your event at the best banquet hall in Jaipur. Call, email, or visit us today to plan your perfect celebration." />
        <meta name="keywords" content="Contact Atlantiis banquet hall Jaipur, Banquet hall inquiry Jaipur, Jaipur banquet enquiry number, " />
        {/* <meta property="og:title" content="Atlantiis | Contact" /> */}
        {/* <meta property="og:description" content="Contact Atlantiis, Jaipur's premier event venue. Get in touch for bookings, inquiries, and more information." /> */}
        {/* <meta property="og:image" content="/contact_landscape.png" /> */}
        {/* <meta property="og:type" content="website" /> */}
      </Helmet>
      <ContactLanding />
      <Form />
      <Contact2Head />
      <Location />
      <Footer />
    </>
  )
}

export default ContactPage