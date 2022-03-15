import React from 'react'
import bg1 from '../../../images/brand/1.png'
import bg2 from '../../../images/brand/2.png'
import bg3 from '../../../images/brand/3.png'
import bg4 from '../../../images/brand/4.png'
import bg5 from '../../../images/brand/5.png'

const BrandArea = () => {
  return (
    <div>
        <div class="htc__brand__area bg__white ptb--120">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <ul class="brand__list">
                            <li><a href="#">
                                <img src={bg1} alt="brand images" />
                            </a></li>
                            <li><a href="#">
                                <img src={bg2} alt="brand images" />
                            </a></li>
                            <li><a href="#">
                                <img src={bg3} alt="brand images" />
                            </a></li>
                            <li><a href="#">
                                <img src={bg4} alt="brand images" />
                            </a></li>
                            <li class="hidden-sm"><a href="#">
                                <img src={bg5} alt="brand images" />
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