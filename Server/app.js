//Import all dependencies
const dotenv = require ("dotenv");
const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

//Configure ENV File and Require Connection File
dotenv.config({path: './config.env'});
require('./db/conn');
const port = process.env.PORT;

//Require model
const Users = require("./models/userSchema");

//These methods are used to get data and cookies from frontend
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.get('/', (req,res) => {
    res.send("Hello World");
})

//Registration
app.post('/register',async (req, res) => {
    try{
        //Get body or Data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username : username,
            email : email,
            password : password,
        });

        //Save Method is Used to Create User or Insert User
        //But before Saving or Inserting, password will hash
        //because of hashing. after hash it will save to db
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");
    } catch (error) {
        res.status(400).send(error);
    }
})

//Login User
app.post('/login', async(req,res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        //Find User if Exist
        const user = await Users.findOne({email : email});
        if(user){
            //Verify password
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
                //Generate Token Which is Define in User Schema
                const token = await user.generateToken();
                res.cookie("jwt", token , {
                    //Expire token in 24 hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                });
                res.status(200).send("LoggedIn");
            }
            else {
                res.status(400).send("Invalid Credentials");
            }
        }
        else {
            res.status(400).send("Invalid Credentials");
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

//Run Server
app.listen(3001, () => {
    console.log("Server is Listening");
})