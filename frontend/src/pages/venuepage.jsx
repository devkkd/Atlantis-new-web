import React from 'react'
import VenueLanding from '../components/venue_landing'
import Venuebp from '../components/venue_bp'
import FloorPlan from '../components/floor_plan'
import GrandHall from '../components/grand_hall'
import SmallHall from '../components/small_hall'
import Lawnn from '../components/lawn'
import Form from '../components/form'
import FooterAll from '../components/footer_all'
import { Helmet } from 'react-helmet-async'

const VenuePage = () => {
  return (
    <>
      <Helmet>
        <title>Atlantiis - Outdoor event space | perfect venue for outdoor event </title>
        <meta name="description" content="Our luxurious banquet hall is a multi purpose event space in jaipur designed for large scale wedding receptions, and any other type of event " />
        <meta name="keywords" content="Wedding venue in Jaipur , Engagement hall Jaipur , Corporate event venue in Jaipur , Business meeting venue Jaipur" />
        {/* <meta property="og:title" content="Atlantiis | Venue" />
        <meta property="og:description" content="Explore Atlantiis venue options in Jaipur for weddings, business events, and celebrations." />
        <meta property="og:image" content="/venue_landscape.png" />
        <meta property="og:type" content="website" /> */}
      </Helmet>
      <VenueLanding />
      <Venuebp />
      <FloorPlan />
      <GrandHall />
      <SmallHall />
      <Lawnn />
      <Form />
      <FooterAll />
    </>
  )
}

export default VenuePage