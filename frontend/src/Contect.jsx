import React from "react";
import Form from "./Form";
import logo from "../src/images/logo.png";

const Contect = () => {
  return (
    <>
      <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto pt-5">
            <div className="row d-flex  align-items-center  mb-3">
              <div className="col-md-6 col-sm-12 mb-sm-5">
                <h4>
                  For general queries, contact us:
                  <br />
                  👉 kissanbazar@gmail.com <br />
                  <br /> For media queries, contact us:
                  <br />
                  👉 kissanbazar131@gmail.com
                  <br />
                  <br />
                  You can get in our touch by calling on
                  <br />
                  👉 +91 1234567890
                  <br />
                  👉 +91 1234567890 <br />
                  👉 +91 1234567890.
                </h4>
              </div>
              <div className="col-md-6 col-sm-12">
                <Form />

                <img src={logo} alt="" className="registerbg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contect;
