import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class HolidayFun extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/static/react/';

    return (
      <div
        className="holiday-plan-area tp-holiday-plan-area mg-top-96"
        style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/bg/8.png)' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-9">
              <div className="section-title text-center">
                <h2
                  className="title wow animated fadeInUp"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.1s"
                >
                  Discover Your Perfect Holiday
                </h2>
                <p
                  className="wow animated fadeInUp"
                  data-wow-duration="0.6s"
                  data-wow-delay="0.2s"
                >
                  From the serene shores of Lake Bunyonyi to the vibrant streets of Zanzibar, Molux
                  curates unforgettable holiday experiences tailored just for you.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Uganda - Lake Bunyonyi */}
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-destinations-list style-two wow animated fadeInUp"
                data-wow-duration="0.4s"
                data-wow-delay="0.1s"
              >
                <div className="thumb">
                  <img src={publicUrl + 'assets/img/destination-list/6.png'} alt="Lake Bunyonyi" />
                </div>
                <div className="details">
                  <p className="location">
                    <img src={publicUrl + 'assets/img/icons/1.png'} alt="map" />
                    Uganda
                  </p>
                  <h4 className="title">Lake Bunyonyi Escape</h4>
                  <p className="content">3 Days for 2 Persons</p>
                  <div className="tp-price-meta">
                    <h2>350 <small>$</small></h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Tanzania - Zanzibar */}
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-destinations-list style-two wow animated fadeInUp"
                data-wow-duration="0.7s"
                data-wow-delay="0.2s"
              >
                <div className="thumb">
                  <img src={publicUrl + 'assets/img/destination-list/6.png'} alt="Zanzibar" />
                </div>
                <div className="details">
                  <p className="location">
                    <img src={publicUrl + 'assets/img/icons/1.png'} alt="map" />
                    Tanzania
                  </p>
                  <h4 className="title">Zanzibar Beach Holiday</h4>
                  <p className="content">5 Days for 2 Persons</p>
                  <div className="tp-price-meta">
                    <h2>790 <small>$</small></h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Kenya - Maasai Mara */}
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-destinations-list style-two wow animated fadeInUp"
                data-wow-duration="0.9s"
                data-wow-delay="0.3s"
              >
                <div className="thumb">
                  <img src={publicUrl + 'assets/img/destination-list/6.png'} alt="Maasai Mara" />
                </div>
                <div className="details">
                  <p className="location">
                    <img src={publicUrl + 'assets/img/icons/1.png'} alt="map" />
                    Kenya
                  </p>
                  <h4 className="title">Maasai Mara Safari</h4>
                  <p className="content">4 Days for 4 Persons</p>
                  <div className="tp-price-meta">
                    <h2>950 <small>$</small></h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Rwanda - Volcanoes National Park */}
            <div className="col-lg-3 col-sm-6">
              <div
                className="single-destinations-list style-two wow animated fadeInUp"
                data-wow-duration="1.1s"
                data-wow-delay="0.4s"
              >
                <div className="thumb">
                  <img src={publicUrl + 'assets/img/destination-list/6.png'} alt="Volcanoes NP" />
                </div>
                <div className="details">
                  <p className="location">
                    <img src={publicUrl + 'assets/img/icons/1.png'} alt="map" />
                    Rwanda
                  </p>
                  <h4 className="title">Gorilla Trekking Adventure</h4>
                  <p className="content">3 Days for 2 Persons</p>
                  <div className="tp-price-meta">
                    <h2>880 <small>$</small></h2>
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

export default HolidayFun;
