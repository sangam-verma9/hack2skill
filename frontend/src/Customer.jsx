import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import { Link } from "react-router-dom";
const Customer = () => {
  return (
    <>
      <div className="container">
        <div className="login">
          <Link to="/login" className="btn btn-outline-primary loginlink">
            Login
          </Link>
          <Link to="/register" className="btn btn-outline-warning loginlink">
            Signup
          </Link>
        </div>
      </div>
      <div className="container-fluid mt-5 mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {Sdata.map((currind, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={currind.imgsrc}
                    title={currind.title}
                    farmer_name={currind.farmer_name}
                    farmer_address={currind.farmer_address}
                    available={currind.available}
                    p_date={currind.p_date}
                    l_date={currind.l_date}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
