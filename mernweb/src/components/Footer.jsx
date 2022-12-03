import React from "react";

const Footer = () => {
    return (
        <div>
            <section id="footer">
                <footer class="text-center">
                    <div class="container p-4 pb-0">
                        <section class="">
                        <form action="">
                            <div class="row d-flex justify-content-center">
                            <div class="col-auto">
                                <h3 class="text-white">
                                <strong>Sign up for our newsletter</strong>
                                </h3>
                            </div>
                            <div class="col-md-5 col-12">
                                <div class="form-outline mb-4">
                                <input type="email" id="form5Example27" class="form-control" />
                                <label class="form-label text-white" for="form5Example27">Email address</label>
                                </div>
                            </div>
                            <div class="col-auto">
                                <button type="submit" class="btn btn-light ms-auto mb-4 rounded-pill px-4 py-2 text-primary">
                                    <i className="fa fa-bell ms-2"></i> Subscribe
                                </button>
                            </div>
                            </div>
                        </form>
                        </section>
                    </div>
                </footer>
            </section>           
        </div>
    );
}

export default Footer;