import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-md shadow">
                <div className="container">                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact us</NavLink>
                            </li>
                        </ul>
                        <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">My Website</NavLink>

                        {props.auth ?
                        <>
                        <NavLink className="btn btn-outline-primary px-4 py-2 rounded-pill" to="/login">
                            <i className="fa fa-sign-in me-2"></i> Login</NavLink>
                        <NavLink className="btn btn-outline-primary ms-2 px-4 py-2 rounded-pill" to="/register">
                            <i className="fa fa-user-plus me-2"></i> Register</NavLink>
                        </>
                         :
                        <>
                        <NavLink className="btn btn-outline-primary ms-2 px-4 py-2 rounded-pill" to="/logout">
                            <i className="fa fa-sign-out me-2"></i> Logout</NavLink>
                        </>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
