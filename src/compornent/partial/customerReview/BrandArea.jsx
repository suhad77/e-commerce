import React from 'react'
import brand1 from '../../../images/brand/1.png'
import brand2 from '../../../images/brand/2.png'
import brand3 from '../../../images/brand/3.png'
import brand4 from '../../../images/brand/4.png'
import brand5 from '../../../images/brand/5.png'

const BrandArea = () => {
  return (
    <div>
        <div className="htc__brand__area bg__white ptb--120">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="brand__list">
                            <li><a href="#">
                                <img src={brand1} alt="brand images" />
                            </a></li>
                            <li><a href="#">
                                <img src={brand2} alt="brand images" />
                            </a></li>
                            <li><a href="#">
                                <img src={brand3} alt="brand images" />
                            </a></li>
                            <li><a href="#">
                                <img src={brand4} alt="brand images" />
                            </a></li>
                            <li className="hidden-sm"><a href="#">
                                <img src={brand5} alt="brand images" />
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BrandArea