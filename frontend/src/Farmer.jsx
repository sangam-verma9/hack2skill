import React from "react";
import farimg from "../src/images/farmer.png";
const Farmer = () => {
  return (
    <>
      <div className="container-fluid mb-5 farmerbg ">
        <div className="row">
          <div className="col-10 mx-auto mt-5 pt-5">
            <div className="row d-flex  align-items-center mb-3">
              <div className="col-md-6 col-sm-12 mb-5">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Farmer Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      PhoneNo.
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Product Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Available Quantity in Kg
                    </label>
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Product Image
                    </label>
                    <input
                      type="file"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-md-6 col-sm-12">
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
