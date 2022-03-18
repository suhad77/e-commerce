import React from 'react'
import Header from '../../compornent/partial/Header'
import Hero from '../../compornent/partial/customerReview/Hero'
import Footer from '../../compornent/partial/footer/Footer'
import TestimonialArea from '../../compornent/partial/customerReview/TestimonialArea'
import BrandArea from '../../compornent/partial/customerReview/BrandArea'

const CustomerReview = () => {
  return (
    <div>
        <Header />
        <Hero />
        <TestimonialArea />
        <BrandArea />
        <Footer />
    </div>
  )
}

export default CustomerReview