import React from 'react'
import BlogArea from '../../compornent/partial/blog/BlogArea'
import BlogHero from '../../compornent/partial/blog/BlogHero'
import Footer from '../../compornent/partial/footer/Footer'
import Header from '../../compornent/partial/Header'

const blog = () => {
  return (
  <div>
      <Header />
      <BlogHero />
      <BlogArea />
      <Footer />
  </div>
  )
}

export default blog