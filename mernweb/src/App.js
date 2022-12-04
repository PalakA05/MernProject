import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
        setauth1(false)
      }

      if(res.status === 401){
        setauth(false)
        setauth1(true)
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
       <Navbar auth = {auth1}/>
       <Switch>
        <Route exact path='/' component = {Home} />
        <Route exact path='/about' component= {About} />
        <Route exact path='/services' component= {Services} />
        <Route exact path='/contact' component= {Contact} />
        <ProtectedRoutes exact path='/login' component= {Login} auth = {auth1} />
        <ProtectedRoutes exact path='/register' component= {Register} auth = {auth1} />
        <ProtectedRoutes exact path='/logout' component= {Logout} auth = {auth} />
       </Switch>
       <Footer /> 
      </Router>
    </div>
  );
}

export default App;
