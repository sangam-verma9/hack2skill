import React from "react";
import logo from "../src/images/logo.png";
const Register = () => {
  return (
    <>
      <img src={logo} alt="" className="registerbg" />

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-md-6 mx-auto pt-5">
            <form action="/register" method="post" className="mb-5">
              <div className="form-outline">
                <input
                  type="text"
                  id="firstName"
                  className="form-control form-control-lg"
                  name="firstName"
                  autoComplete="off"
                  placeholder="First Name*"
                  required
                />
                <label className="form-label"></label>
              </div>

              <div className="form-outline">
                <input
                  type="email"
                  id="emailAddress"
                  className="form-control form-control-lg"
                  name="email"
                  autoComplete="off"
                  placeholder="Email*"
                  required
                />
                <label className="form-label"></label>
              </div>

              <div className="form-outline">
                <input
                  type="tel"
                  id="phoneNumber"
                  className="form-control form-control-lg"
                  name="phoneno"
                  autoComplete="off"
                  placeholder="Phone Number"
                />
                <label className="form-label"></label>
              </div>

              <div className="form-outline">
                <input
                  type="text"
                  id="address"
                  className="form-control form-control-lg"
                  name="address"
                  autoComplete="off"
                  placeholder="Address*"
                  required
                />
                <label className="form-label"></label>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="password"
                    id="form3Example4c"
                    className="form-control"
                    name="password"
                    autoComplete="off"
                    placeholder="Password*"
                    required
                  />
                  <label className="form-label"></label>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="password"
                    id="form3Example4cd"
                    className="form-control"
                    name="conformpassword"
                    autoComplete="off"
                    placeholder="Repeat your password*"
                    required
                  />
                  <label className="form-label"></label>
                </div>
              </div>

              <div className="mt-4 pt-2">
                <input
                  className="btn btn-secondary btn-lg"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Register;
