import React from 'react'
import bg from '../../../images/bg/4.jpg'
import bg1 from '../../../images/test/client/1.png'
import bg2 from '../../../images/test/client/2.png'
import bg3 from '../../../images/test/client/3.png'

const Testimonial = () => {
  return (
    <div>
        <div className="htc__testimonial__area ptb--120" style={{
        background: "rgba(0, 0, 0, 0)",
         backgroundImage:`url(${bg})`, 
         backgroundRepeat: "no-repeat",
          backgroundPosition: "center center"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="testimonial__wrap owl-carousel owl-theme clearfix">
                            {/* <!-- Start Single Testimonial --> */}
                            <div className="testimonial">
                                <div className="testimonial__thumb">
                                    <img src={bg1} alt="testimonial images" />
                                </div>
                                <div className="testimonial__details">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod teincidi dunt ut labore et dolore gna aliqua. Ut enim ad minim veniam,</p>
                                    <div className="test__info">
                                        <span><a href="#">Robiul siddikee</a></span>
                                        <span> - </span>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Testimonial -->
                            <!-- Start Single Testimonial --> */}
                            <div className="testimonial">
                                <div className="testimonial__thumb">
                                    <img src={bg2} alt="testimonial images" />
                                </div>
                                <div className="testimonial__details">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod teincidi dunt ut labore et dolore gna aliqua. Ut enim ad minim veniam,</p>
                                    <div className="test__info">
                                        <span><a href="#">Robiul siddikee</a></span>
                                        <span> - </span>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Testimonial -->
                            <!-- Start Single Testimonial --> */}
                            <div className="testimonial">
                                <div className="testimonial__thumb">
                                    <img src={bg3} alt="testimonial images" /> 
                                </div>
                                <div className="testimonial__details">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod teincidi dunt ut labore et dolore gna aliqua. Ut enim ad minim veniam,</p>
                                    <div className="test__info">
                                        <span><a href="#">Robiul siddikee</a></span>
                                        <span> - </span>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Testimonial --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial