import React from "react";
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <div className="container shadow my-5">
                <div className="row d-flex">
                    <div className="col-md-6 d-flex flex-column align-items-center form justify-content-center order-2">
                        <h1 className="display-4 fw-bolder text-white">Hello, Friend!</h1>
                        <p className="lead text-center text-white">Enter your Details to Register</p>
                        <h5 className="mb-4 text-white">OR</h5>
                        <NavLink className="btn btn-outline-light px-4 py-2 rounded-pill" to="/login"><i className="fa fa-sign-in me-2"></i> Login</NavLink>
                    </div>
                    <div className="col-md-6 justify-content-center">
                        <h1 className="display-6 fw-bolder mb-3">Register</h1>
                        <form className="pb-2">
                        <div className="mb-2">
                                <label for="exampleInputName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleInputName" aria-describedby="UserName"/>
                            </div>
                            <div className="mb-2">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" defaultChecked/>
                                <label class="form-check-label" for="exampleCheck1">I agree to all the terms andd Conditions</label>
                            </div>
                            <button type="submit" className="btn btn-primary rounded-pill w-100 py-2">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;