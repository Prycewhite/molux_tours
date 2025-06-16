import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Offer extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <div className="offer-area pd-top-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center">
                <h2 className="title">Special Offers & Discounts</h2>
                <p>
                  Explore the beauty of Uganda with Molux! Check out our latest tour packages and seasonal discounts — crafted to give you unforgettable experiences at unbeatable prices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="destinations-list-slider-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-10 offset-xl-1 order-lg-12">
                <div className="destinations-list-slider">
                  
                  {/* Bwindi */}
                  <div className="d-list-slider-item">
                    <div className="single-destinations-list text-center">
                      <div className="thumb">
                        <span className="d-list-tag">Special Offer</span>
                        <img src={publicUrl + "assets/img/destination-list/1.png"} alt="Bwindi" />
                        <div className="d-list-btn-wrap">
                          <div className="d-list-btn viaje-go-top">
                            <Link className="btn btn-yellow" to="/contact">
                              Book Now <i className="fa fa-paper-plane" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="details">
                        <h4 className="title">Bwindi Forest</h4>
                        <p className="content">Gorilla trekking in a lush rainforest paradise</p>
                        <ul className="tp-list-meta border-bt-dot">
                          <li><i className="fa fa-calendar-o" /> 20 June</li>
                          <li><i className="fa fa-clock-o" /> 3 days</li>
                          <li><i className="fa fa-star" /> 4.8</li>
                        </ul>
                        <div className="tp-price-meta tp-price-meta-cl">
                          <p>Price</p>
                          <h2>450 <small>$</small></h2>
                          <del>600<span>$</span></del>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Jinja */}
                  <div className="d-list-slider-item">
                    <div className="single-destinations-list text-center">
                      <div className="thumb">
                        <img src={publicUrl + "assets/img/destination-list/1.png"} alt="Jinja" />
                        <div className="d-list-btn-wrap">
                          <div className="d-list-btn viaje-go-top">
                            <Link className="btn btn-yellow" to="/contact">
                              Book Now <i className="fa fa-paper-plane" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="details">
                        <h4 className="title">Jinja Adventures</h4>
                        <p className="content">White water rafting on the Nile & bungee thrills</p>
                        <ul className="tp-list-meta border-bt-dot">
                          <li><i className="fa fa-calendar-o" /> 12 July</li>
                          <li><i className="fa fa-clock-o" /> 2 days</li>
                          <li><i className="fa fa-star" /> 4.6</li>
                        </ul>
                        <div className="tp-price-meta tp-price-meta-cl">
                          <p>Price</p>
                          <h2>300 <small>$</small></h2>
                          <del>400<span>$</span></del>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Murchison Falls */}
                  <div className="d-list-slider-item">
                    <div className="single-destinations-list text-center">
                      <div className="thumb">
                        <span className="d-list-tag">Special Offer</span>
                        <img src={publicUrl + "assets/img/destination-list/1.png"} alt="Murchison" />
                        <div className="d-list-btn-wrap">
                          <div className="d-list-btn viaje-go-top">
                            <Link className="btn btn-yellow" to="/contact">
                              Book Now <i className="fa fa-paper-plane" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="details">
                        <h4 className="title">Murchison Falls Safari</h4>
                        <p className="content">Wildlife safari & boat cruise on the Nile</p>
                        <ul className="tp-list-meta border-bt-dot">
                          <li><i className="fa fa-calendar-o" /> 5 August</li>
                          <li><i className="fa fa-clock-o" /> 4 days</li>
                          <li><i className="fa fa-star" /> 4.7</li>
                        </ul>
                        <div className="tp-price-meta tp-price-meta-cl">
                          <p>Price</p>
                          <h2>550 <small>$</small></h2>
                          <del>700<span>$</span></del>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Kidepo */}
                  <div className="d-list-slider-item">
                    <div className="single-destinations-list text-center">
                      <div className="thumb">
                        <span className="d-list-tag">Special Offer</span>
                        <img src={publicUrl + "assets/img/destination-list/1.png"} alt="Kidepo" />
                        <div className="d-list-btn-wrap">
                          <div className="d-list-btn viaje-go-top">
                            <Link className="btn btn-yellow" to="/contact">
                              Book Now <i className="fa fa-paper-plane" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="details">
                        <h4 className="title">Kidepo Valley</h4>
                        <p className="content">Remote safari paradise in Northern Uganda</p>
                        <ul className="tp-list-meta border-bt-dot">
                          <li><i className="fa fa-calendar-o" /> 18 August</li>
                          <li><i className="fa fa-clock-o" /> 5 days</li>
                          <li><i className="fa fa-star" /> 4.9</li>
                        </ul>
                        <div className="tp-price-meta tp-price-meta-cl">
                          <p>Price</p>
                          <h2>680 <small>$</small></h2>
                          <del>850<span>$</span></del>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-lg-2 align-self-center order-lg-11">
                <div className="container">
                  <div className="destinations-slider-controls">
                    <div className="slider-nav tp-control-nav" />
                    <div className="tp-slider-extra slider-extra">
                      <div className="text">
                        <span className="first">01</span>
                        <span className="last" />
                      </div>
                      <div
                        className="d-list-progress"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span className="slider__label sr-only" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Offer;
