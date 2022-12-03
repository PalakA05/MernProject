import React, { useState } from "react";

const Contact = () => {

    const [msg, setmsg] = useState({
        username :"",
        email :"",
        message :""
    });

    //Handle Inputs
        const handleChange = (event) => {
            let name = event.target.name;
            let value = event.target.value;
    
            setmsg({...msg, [name]:value});
        }
    
        //Handle Submit
        const handleSubmit = async (event) => {
            event.preventDefault();
            const {username, email, message} = msg;
            try {
                /*It is submitted on port 3000 by default which is front end but we need to submit it on backend which is on port 3001 so we need Proxy*/
                const res = await fetch('/message', {
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({
                        username, email, message
                    })
                })
    
                if(res.status === 400 || !res){
                    window.alert("Message not sent. Try again later!")
                }else{
                    //you need to restart the server for proxy to work
                    window.alert("Message Sent!")
                    setmsg({
                        username:"",
                        email: "",
                        message: ""
                    })
                }
            }
            catch(error){
                console.log(error);
            }
        }
    

    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row mb-1">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Contact Us</h3>
                            <h1 className="display-6 text-center mb-4">
                                Have some <b>Questions?</b>
                            </h1>
                            <hr className="w-25 mx-auto"/>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6">
                            <img src="/assets/contact.jpeg" alt="Contact" className="w-75 mt-0"/>
                        </div>
                        <div className="col-md-6 mt-5">
                            <form onSubmit={handleSubmit} method="POST">
                            <div class="mb-3">
                                <label for="username" className="form-label">Full name</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter Your Name Here"
                                name="username"
                                value={msg.username}
                                onChange = {handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="name@example.com"
                                name="email"
                                value={msg.email}
                                onChange = {handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Your Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
                                name="message"
                                value={msg.message}
                                onChange = {handleChange}
                                ></textarea>
                            </div>
                            <button className="btn btn-outline-primary rounded-pill">Send Message
                                <i className="fa fa-paper-plane ms-2"></i>
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;