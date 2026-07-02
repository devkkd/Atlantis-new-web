import React from 'react'
import ServiceLanding from '../components/service_landing'
import Servicebp from '../components/service_bp'
import Weeding from '../components/wedding'
import BusinessEvent from '../components/business'
import Menu from '../components/menu'
import Form from '../components/form'
import FooterAll from '../components/footer_all'
import { Helmet } from 'react-helmet-async'

const ServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Premium banquet hall Jaipur to make your event elegant & Royal</title>
        <meta name="description" content="Book the perfect banquet hall in Jaipur for weddings, receptions, and events. Spacious venues, elegant decor, and top-notch hospitality await you." />
        <meta name="keywords" content="Banquet hall with decoration Jaipur, AC banquet hall in Jaipur ,Indoor banquet hall jaipur, Banquet hall with parking Jaipur" />
        {/* <meta property="og:title" content="Atlantiis | Services" /> */}
        {/* <meta property="og:description" content="Discover the services offered by Atlantiis, Jaipur's top event venue for weddings, business, and celebrations." /> */}
        {/* <meta property="og:image" content="/service_landscape.png" /> */}
        {/* <meta property="og:type" content="website" /> */}
      </Helmet>
      <ServiceLanding />
      <Servicebp />
      <Weeding />
      <BusinessEvent />
      {/* <Menu /> */}
      <Form />
      <FooterAll />
    </>
  )
}

export default ServicePage