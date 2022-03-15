import React from 'react'
import Footer from '../../compornent/partial/footer/Footer'
import Header from '../../compornent/partial/Header'
import ProductArea from '../../compornent/partial/shop/ProductArea'
import ShopHero from '../../compornent/partial/shop/ShopHero'

const shop = () => {
  return (
    <div>
        <Header />
        <ShopHero />
        <ProductArea />
        <Footer />
    </div>
  )
}

export default shop