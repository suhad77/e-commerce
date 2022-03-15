import React from 'react'
import Footer from '../../compornent/partial/footer/Footer'
import Header from '../../compornent/partial/Header'
import PortfolioHero from '../../compornent/partial/portfolio/PortfolioHero'
import Testimonial from '../../compornent/partial/portfolio/Testimonial'

const portfolio = () => {
  return (
    <div>
        <Header />
        <PortfolioHero />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default portfolio