import React, { useState } from "react";

import farimg from "../src/images/farmer.png";
const Farmer = () => {
  const [name, setname] = useState("");
  const [mobilno, setmobilno] = useState("");
  const [productname, setproductname] = useState("");
  const [quantity, setquantity] = useState("");
  const [address, setaddress] = useState("");
  const [imgid, setimgid] = useState("");

  return (
    <>
      <div className="container-fluid mb-5 farmerbg ">
        <div className="row">
          <div className="col-10 mx-auto mt-5 pt-5">
            <div className="row d-flex  align-items-center mb-3">
              <div className="col-md-6 col-sm-12 mb-5">
                <form>
                  <div class="mb-3">
                    <label
                      for="exampleInputEmail1"
                      class="form-label"
                      style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                    >
                      Farmer Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      name="name"
                      aria-describedby="emailHelp"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => {
                        setname(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleInputPassword1"
                      class="form-label"
                      style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                    >
                      Mobile No.:
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                      name="mobileno"
                      placeholder="Enter your Mobile no."
                      value={mobilno}
                      onChange={(e) => {
                        setmobilno(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleInputPassword1"
                      class="form-label"
                      style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                    >
                      Product Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      name="productname"
                      placeholder="Enter prodect Name"
                      value={productname}
                      onChange={(e) => {
                        setproductname(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleInputPassword1"
                      class="form-label"
                      style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                    >
                      Available Quantity in Kg:
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                      name="quantity"
                      placeholder="Enter Quantity"
                      value={quantity}
                      onChange={(e) => {
                        setquantity(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleInputPassword1"
                      class="form-label"
                      style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                    >
                      Address:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      name="address"
                      placeholder="Enter your address"
                      value={address}
                      onChange={(e) => {
                        setaddress(e.target.value);
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleInputPassword1"
                      class="form-label"
                      style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                    >
                      Product Image:
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      name="imgid"
                      id="exampleInputPassword1"
                      value={imgid}
                      onChange={(e) => {
                        setimgid(e.target.value);
                      }}
                    />
                  </div>

                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                <img src={farimg} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Farmer;
