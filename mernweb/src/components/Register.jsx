import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username :"",
        email :"",
        password :""
    });

    //Handle Inputs
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({...user, [name]:value});
    }

    //Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        const {username, email, password} = user;
        try {
            /*It is submitted on port 3000 by default which is front end but we need to submit it on backend which is on port 3001 so we need Proxy*/
            const res = await fetch('/register', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    username, email, password
                })
            })

            if(res.status === 400 || !res){
                window.alert("Already Used Details")
            }else{
                //you need to restart the server for proxy to work
                window.alert("Registered Successfully")
                navigate.push('/login')
            }
        }
        catch(error){
            console.log(error);
        }
    }

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
                        <form className="pb-2" onSubmit={handleSubmit} method="POST">
                        <div className="mb-2">
                                <label for="exampleInputName" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleInputName"
                                 name = "username"
                                 value = {user.username}
                                 onChange = {handleInput}
                                 />
                            </div>
                            <div className="mb-2">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                 name = "email"
                                 value = {user.email}
                                 onChange = {handleInput}
                                />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                 name = "password"
                                 value = {user.password}
                                 onChange = {handleInput}
                                />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" defaultChecked/>
                                <label class="form-check-label" for="exampleCheck1">I agree to all the terms andd Conditions</label>
                            </div>
                            <button type="submit" className="btn btn-primary rounded-pill w-100 py-2
                            ">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;