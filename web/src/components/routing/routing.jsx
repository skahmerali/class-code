// import './style.css';
// import Singup from './../singup/singup';
// import Login from './../login/login';
// import Dashbord from './../dashbord/dashbord';


import {


  Link
} from "react-router-dom";



function Approute() {
  return (
    <div className="App">



     
        <nav>
          <ul>
            <li>
              <Link to="/">Dashbord</Link>
            </li>
            <li>
              <Link to="/Signup">Signup</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            
          </ul>
        </nav>
  
       

    </div>
  );
}

export default Approute;
