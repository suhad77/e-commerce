import React from 'react'
import bg from '../../../images/bg/6.jpg'
import client1 from '../../../images/test/client/1.png'
// import client2 from '../../../images/test/client/2.png'
// import client3 from '../../../images/test/client/3.png'

const TestimonialArea = () => {
  return (
    <div>
        <div className="htc__testimonial__area ptb--150" style={{background:"rgba(0,0,0,0)", backgroundImage:`url(${bg})`,backgroundRepeat: "no-repeat" , backgroundPosition: "center / center" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                        <div className="testimonial__wrap owl-carousel owl-theme clearfix">
                            {/* <!-- Start Single Testimonial --> */}
                            <div className="testimonial">
                                <div className="testimonial__thumb">
                                    <img src={client1} alt="testimonial images" />
                                </div>
                                <div className="testimonial__details">
                                    <p>Lorem ipsum dolor sit , consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud ullamco laboris is nisi ut aliquip ex ea commodo </p>
                                    <div className="test__info">
                                        <span><a href="#">Farhana shuvo</a></span>
                                        <span> - </span>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Single Testimonial -->
                            <!-- Start Single Testimonial --> */}
                            {/* <div className="testimonial">
                                <div className="testimonial__thumb">
                                    <img src={client2} alt="testimonial images" />
                                </div>
                                <div className="testimonial__details">
                                    <p>Lorem ipsum dolor sit , consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud ullamco laboris is nisi ut aliquip ex ea commodo </p>
                                    <div className="test__info">
                                        <span><a href="#">Robiul siddikee</a></span>
                                        <span> - </span>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div> */}
                            {/* <!-- End Single Testimonial -->
                            <!-- Start Single Testimonial --> */}
                            {/* <div className="testimonial">
                                <div className="testimonial__thumb">
                                    <img src={client3} alt="testimonial images" />
                                </div>
                                <div className="testimonial__details">
                                    <p>Lorem ipsum dolor sit , consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud ullamco laboris is nisi ut aliquip ex ea commodo </p>
                                    <div className="test__info">
                                        <span><a href="#">Robiul siddikee</a></span>
                                        <span> - </span>
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div> */}
                            {/* <!-- End Single Testimonial --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialArea