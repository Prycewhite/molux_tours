import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

  componentDidMount() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";

    document.body.appendChild(minscript);
  }

  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imgattr = "Footer logo";

    return (
      <footer className="footer-area" style={{ backgroundImage: 'url(' + publicUrl + 'assets/img/bg/2.png)' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget widget">
                <div className="about_us_widget">
                  <Link to="/" className="footer-logo">
                    <img src={publicUrl + "assets/img/molux logo.png"} alt={imgattr} />
                  </Link>
                  <p>
                    Molux is your trusted partner for unforgettable journeys. From breathtaking
                    safaris to cultural getaways, we specialize in crafting personalized travel
                    experiences across Uganda and beyond. Let’s explore the world together.
                  </p>
                  <ul className="social-icon">
                    <li>
                      <a className="facebook" href="https://www.facebook.com/codingeek.net/" target="_blank" rel="noreferrer"><i className="fa fa-facebook" /></a>
                    </li>
                    <li>
                      <a className="twitter" href="https://twitter.com/codingeeknet" target="_blank" rel="noreferrer"><i className="fa fa-twitter" /></a>
                    </li>
                    <li>
                      <a className="pinterest" href="https://www.instagram.com/codingeeknet/" target="_blank" rel="noreferrer"><i className="fa fa-instagram" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="footer-widget widget">
                <div className="widget-contact">
                  <h4 className="widget-title">Contact Us</h4>
                  <p>
                    <i className="fa fa-map-marker" />
                    <span>Plot 42, Entebbe Road, Kampala, Uganda</span>
                  </p>
                  <p className="location">
                    <i className="fa fa-envelope-o" />
                    <span>info@moluxtravel.com</span>
                  </p>
                  <p className="telephone">
                    <i className="fa fa-phone base-color" />
                    <span>
                      +256 777 070 444 / +256 730 304 359
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6">
              <div className="footer-widget widget">
                <h4 className="widget-title">Quick Links</h4>
                <ul className="widget_nav_menu viaje-go-top">
                  <li><Link to="/home-v2">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  {/* <li><Link to="/destination-list">Destinations</Link></li>
                  <li><Link to="/tour-details">Tours</Link></li>
                  <li><Link to="/blog">Blog</Link></li> */}
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-inner">
          <div className="copyright-text">
            © Molux 2025 All rights reserved. Poweredby <a href="#" target="_blank"><span>Ugacloud Services.</span></a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer_v1;
