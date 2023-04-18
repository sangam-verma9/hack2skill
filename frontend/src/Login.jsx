import React from "react";
import { Link } from "react-router-dom";
import logo from "../src/images/logo.png"
const Login = () => {
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto pt-5">
                        <div className="row d-flex  align-items-center mb-3">
                            <div className="col-md-6 col-sm-12 mb-5">
                                <form action="/login" method="post">

                                    {/* <!-- Email input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form3Example3" className="form-control form-control-lg"
                                            placeholder="Enter a valid email address" name="email" autoComplete="off" />
                                        <label className="form-label">Email address</label>
                                    </div>

                                    {/* <!-- Password input --> */}
                                    <div className="form-outline mb-3">
                                        <input type="password" id="form3Example4" className="form-control form-control-lg"
                                            placeholder="Enter password" name="password" />
                                        <label className="form-label">Password</label>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        {/* <!-- Checkbox --> */}
                                        <div className="form-check mb-0">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                            <label className="form-check-label">
                                                Remember me
                                            </label>
                                        </div>
                                        <a href="#!" className="text-body link-danger ">Forgot password?</a>
                                    </div>

                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <button type="submit" className="btn btn-outline-success btn-lg"
                                            style={{paddingLeft: "2.5rem", paddingRight: "2.5rem", borderColor:"rgb(84, 38, 126)"}}>Login</button>
                                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register"
                                            className="link-success">Register</Link></p>
                                    </div>

                                </form>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src={logo} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;