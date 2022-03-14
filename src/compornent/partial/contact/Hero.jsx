import React from 'react'
import { Link } from 'react-router-dom'
import bgcontact from '../../../images/bg/2.jpg'
const Hero = () => {
  return (
    <div className="ht__bradcaump__area" 
    style={{background:"rgba(0, 0, 0, 0)",
    backgroundImage: `url( ${ bgcontact } )`,
    backgroundRepeat:"no-repeat",
    backgroundPosition: "center center",
    backgroundSize:"cover"

}}>
            <div className="ht__bradcaump__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">Contact US</h2>
                                <nav className="bradcaump-inner">
                                  <Link className="breadcrumb-item" to="/">Home</Link>
                                  <span className="brd-separetor">/</span>
                                  <span className="breadcrumb-item active">Contact US</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Hero