import React from "react";
import About from './About';
import Services from './Services';
import Contact from './Contact';
import {NavLink} from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">Welcome to my Website!</h1>
                            <p className="lead text-center fs-4 mb-5 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, debitis nihil non obcaecati omnis assumenda minima. Molestias odio dolores omnis exercitationem nostrum eaque consequatur aperiam quas similique, tempore id commodi?</p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink className="btn btn-light me-4 rounded-pill px-4 py-2" to="/contact">Get Quote</NavLink>
                                <NavLink className="btn btn-outline-light me-4 rounded-pill px-4 py-2" to="/services">Our Services</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Services />
            <Contact />
        </div>
    );
}

export default Home;