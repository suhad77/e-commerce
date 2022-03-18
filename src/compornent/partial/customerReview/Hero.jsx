import React from 'react'
import bg from "../../../images/bg/2.jpg"

const Hero = () => {
  return (
    <div>
        <div className="ht__bradcaump__area" style={{background:"rgba(0,0,0,0)", backgroundImage:`url(${bg})`,backgroundRepeat: "no-repeat" , backgroundPosition: "center / center" }}>
            <div className="ht__bradcaump__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="bradcaump__inner text-center">
                                <h2 className="bradcaump-title">Customer Review</h2>
                                <nav className="bradcaump-inner">
                                  <a className="breadcrumb-item" href="index.html">Home</a>
                                  <span className="brd-separetor">/</span>
                                  <span className="breadcrumb-item active">Customer Review</span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero