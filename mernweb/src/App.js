import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Logout from './components/Logout';
import ProtectedRoutes from './components/ProtectedRoutes';
import { useEffect, useState } from 'react';

function App() {

  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setauth(true)
        setauth(false)
      }

      if(res.status === 401){
        setauth(false)
        setauth(true)
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <div>
      <Router>
       <Navbar />
       <Routes>
        <Route exact path='/' element = {<Home/>} />
        <Route exact path='/about' element= {<About/>} />
        <Route exact path='/services' element= {<Services/>} />
        <Route exact path='/contact' element= {<Contact/>} />
        <ProtectedRoutes exact path='/login' element= {<Login/>} auth = {auth} />
        <ProtectedRoutes exact path='/register' element= {<Register/>} auth = {auth} />
        <ProtectedRoutes exact path='/logout' element= {<Logout/>} auth = {auth1} />
       </Routes>
       <Footer /> 
      </Router>
    </div>
  );
}

export default App;
