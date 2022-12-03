import React from "react";
import {NavLink} from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="container shadow my-5">
                <div className="row d-flex">
                    <div className="col-md-6 d-flex flex-column align-items-center form justify-content-center">
                        <h1 className="display-4 fw-bolder text-white">Welcome Back</h1>
                        <p className="lead text-center text-white">Enter your Credentials to Login</p>
                        <h5 className="mb-4 text-white">OR</h5>
                        <NavLink className="btn btn-outline-light px-4 py-2 rounded-pill fw-bolder" to="/register"><i className="fa fa-user-plus me-2"></i> Register</NavLink>
                    </div>
                    <div className="col-md-6 justify-content-center">
                        <h1 className="display-6 fw-bolder mb-3">Login</h1>
                    <form className="pb-2">
                        <div className="mb-2">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <button type="submit" className="btn btn-primary rounded-pill w-100 py-2">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;