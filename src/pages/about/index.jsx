import React from 'react'
import AboutHero from '../../compornent/partial/about/AboutHero'
import StoreArea from '../../compornent/partial/about/StoreArea'
import ChoseUsArea from '../../compornent/partial/about/ChoseUsArea'
import Footer from '../../compornent/partial/footer/Footer'
import Header from '../../compornent/partial/Header'
import TeamArea from '../../compornent/partial/about/TeamArea'
import Testimonial from '../../compornent/partial/about/Testimonial'
import BrandArea from '../../compornent/partial/about/BrandArea'

const About = () => {
  return (
    <div>
        <Header />
        <AboutHero />
        <StoreArea />
        <ChoseUsArea />
        <TeamArea />
        <Testimonial />
        <BrandArea />
        <Footer />
    </div>
  )
}

export default About