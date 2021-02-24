import React from 'react';
import Singup from './../singup/singup';
import Login from './../login/login';
import Dashbord from './../dashbord/dashbord';
// import Approute from '../routing/routing'
// import  Router  from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,


} from "react-router-dom";


function Nav() {
  return(
    <>
      <Router>
        <Switch>
          <Route path="/Signup">
            <Singup />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/">
            <Dashbord />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default Nav; 