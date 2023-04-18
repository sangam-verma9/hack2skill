import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/images/logo.png";
import manwor from "../src/images/about1.jpg";
import phone from "../src/images/about2.png";
const About = () => {
  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto pt-5">
            <div className="row d-flex  align-items-center mb-3">
              <div className="col-md-6 col-sm-12 mb-5">
                <div>
                  <img src={logo} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <div>
                  <h5 className="aboutdis">
                    One of the best places to sell online is with an eCommerce
                    website of your own. It allows for conducting business
                    directly with customers, without any middleman profiting
                    from your sales. Furthermore, a custom-built online store
                    provides more ways to create a unique shopping experience
                    that fits your preferences.
                  </h5>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <div>
                  <h5 className="aboutdis">
                    Selling platform means a service offered by a noncollecting
                    seller to another person that allows the other person,
                    through a registration process with the noncollecting
                    seller, to sell that other person's tangible personal
                    property, product transferred electronically, or service.
                  </h5>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <img src={manwor} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <img src={phone} alt="" className="img-fluid imageskew" />
              </div>
              <div className="col-md-6 col-sm-12 mb-5">
                <h2 className="aboutdis">Connect with us through our App</h2>
                <div className="appbtnmain">
                  <Link
                    to="https://apple.com"
                    className="btn btn-outline-dark appbtn"
                  >
                    <b>
                      <i className="fa-brands fa-apple"></i>Download
                    </b>
                  </Link>
                  <Link
                    to="https://play.google.com/store"
                    className="btn btn-outline-dark appbtn"
                  >
                    <b>
                      <i className="fa-brands fa-google-play"></i>Download
                    </b>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
