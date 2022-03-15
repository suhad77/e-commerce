import React from 'react'
import bg1 from '../../../images/team/1.jpg'
import bg2 from '../../../images/team/2.jpg'
import bg4 from '../../../images/team/4.jpg'

const TeamArea = () => {
  return (
    <div>
        <section className="htc__team__area bg__white ptb--120">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section__title section__title--2 text-center">
                            <h2 className="title__line">Our Staff</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labo.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="team__wrap clearfix mt--60">
                        {/* <!-- Start Single Team --> */}
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                            <div className="team foo">
                                <div className="team__thumb">
                                    <a href="#">
                                        <img src={bg1} alt="team images" />
                                    </a>
                                </div>
                                <div className="team__bg__color"></div>
                                <div className="team__hover__info">
                                    <div className="team__hover__action">
                                        <h2><a href="#">Robiul siddikee</a></h2>
                                        <ul className="social__icon">
                                            <li><a href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-instagram"></i></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Team -->
                        <!-- Start Single Team --> */}
                        <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 xmt-30">
                            <div className="team foo">
                                <div className="team__thumb">
                                    <a href="#">
                                        <img src={bg2} alt="team images" />
                                    </a>
                                </div>
                                <div className="team__bg__color"></div>
                                <div className="team__hover__info">
                                    <div className="team__hover__action">
                                        <h2><a href="#">Robiul siddikee</a></h2>
                                        <ul className="social__icon">
                                            <li><a href="#"><i className="zmdi zmdi-twitter"></i></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-instagram"></i></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-facebook"></i></a></li>
                                            <li><a href="#"><i className="zmdi zmdi-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Team -->
                        <!-- Start Single Team --> */}
                        <div class="col-md-4 col-lg-4 hidden-sm col-xs-12 xmt-30">
                            <div class="team foo">
                                <div class="team__thumb">
                                    <a href="#">
                                        <img src={bg4} alt="team images" />
                                    </a>
                                </div>
                                <div class="team__bg__color"></div>
                                <div class="team__hover__info">
                                    <div class="team__hover__action">
                                        <h2><a href="#">Robiul siddikee</a></h2>
                                        <ul class="social__icon">
                                            <li><a href="#"><i class="zmdi zmdi-twitter"></i></a></li>
                                            <li><a href="#"><i class="zmdi zmdi-instagram"></i></a></li>
                                            <li><a href="#"><i class="zmdi zmdi-facebook"></i></a></li>
                                            <li><a href="#"><i class="zmdi zmdi-google-plus"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Single Team --> */}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default TeamArea