import React from "react";
import { NavLink } from "react-router-dom";
import imghome from "../src/images/imagehome.png";

const Home = () => {
  return (
    <>
      <div className="container-fluid mb-5 homebg">
        <div className="row">
          <div className="col-10 mx-auto mt-5 pt-5">
            <div className="row d-flex  align-items-center mb-3">
              <div className="col-md-6 col-sm-12 mb-5">
                <h5>
                  The Kisan Bazaar is aimed at supply of seeds, fertilizers,
                  pesticides and eco-friendly inputs at reasonable price and
                  provides service to farmers of this region.
                  <br />
                  <br />
                  We are here to provide <b>Direct</b> connection between
                  Customer and Farmer.
                </h5>

                <NavLink
                  to="/farmer"
                  className="btn btn-success"
                  style={{
                    fontSize: "1.5rem",
                    fontFamily:
                      "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                    marginTop: "15px",
                    margin: "10px",
                  }}
                >
                  Farmer
                </NavLink>
                <NavLink
                  to="/customer"
                  className="btn btn-success"
                  style={{
                    fontSize: "1.5rem",
                    fontFamily:
                      "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
                    marginTop: "15px",
                    margin: "10px",
                  }}
                >
                  Customer
                </NavLink>
                {/* <div className="login">
                  <Link
                    to="/login"
                    className="btn btn-outline-primary loginlink"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-outline-warning loginlink"
                  >
                    Signup
                  </Link>
                </div> */}
              </div>
              <div className="col-md-6 col-sm-12">
                <img src={imghome} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
