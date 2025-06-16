import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Intro extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + '/';

    return (
      <div className="intro-area pd-top-112">
        <div className="container">
          <div className="row">
            {/* Travel */}
            <div className="col-md-4">
              <div
                className="single-intro wow animated fadeInUp"
                data-wow-duration="0.6s"
                data-wow-delay="0.1s"
              >
                <h4 className="intro-title">
                  <span className="intro-count">01</span>
                  <Link className="intro-cat" to="/about">Travel Uganda</Link>
                </h4>
                <p>
                  Explore Uganda’s breathtaking landscapes from the misty mountains of Bwindi to the source of the Nile in Jinja. Molux takes you to the heart of the Pearl of Africa.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className="col-md-4">
              <div
                className="single-intro wow animated fadeInUp"
                data-wow-duration="1.0s"
                data-wow-delay="0.2s"
              >
                <h4 className="intro-title">
                  <span className="intro-count">02</span>
                  <Link className="intro-cat" to="/about">Cultural Experience</Link>
                </h4>
                <p>
                  Dive into Uganda’s rich culture visit traditional villages, taste local cuisine, and witness powerful tribal dances. Molux connects you with authentic Ugandan heritage.
                </p>
              </div>
            </div>

            {/* Relax */}
            <div className="col-md-4">
              <div
                className="single-intro wow animated fadeInUp"
                data-wow-duration="1.6s"
                data-wow-delay="0.3s"
              >
                <h4 className="intro-title">
                  <span className="intro-count">03</span>
                  <Link className="intro-cat" to="/about">Relax & Unwind</Link>
                </h4>
                <p>
                  Unplug and relax at Uganda’s top getaways from serene Lake Bunyonyi lodges to luxurious safari camps in Murchison Falls. Molux helps you find peace in nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
