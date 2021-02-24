import React from 'react';
import './style.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { baseUrl } from "./../../core/index"
import {UseGlobalState, UseGlobalStateUpdate} from './../../context/context'
import {
    useHistory
} from "react-router-dom";
 function Login(){

     const golobalState = UseGlobalState()
     const setGlobalState = UseGlobalStateUpdate() 
     let history=useHistory();
    
function login(event) {

    event.preventDefault()
    axios({
    // var loginEmail = document.getElementById('loginEmail').value
    // var loginPassword = document.getElementById('loginPassword').value

    // console.log(email, password)

        url: baseUrl + "/login",
        method: "POST",
        data: {
            "loginEmail": document.getElementById('loginEmail').value,
            "loginPassword": document.getElementById('loginPassword').value
        },
        withCredentials: true
    }).then(function (response) {
        console.log("response: ", response.data);

        setGlobalState(prev => {
            return { ...prev, loginStatus: true }
        })

    }).catch(function (error) {
        // handle error
        console.log("error: ==== ", error);
        if (error && error.response && error.response.status) {
            console.log("error ==============> ", error.response.status);
        }
        
    })
}
// return false;


// const Http = new XMLHttpRequest();
// // const url = "http://localhost:3000/login"
// Http.open("POST","http://localhost:5000/login")
// Http.setRequestHeader("Content-Type", "application/json");
// Http.send(JSON.stringify({
    //     email: loginEmail,
    //     password: loginPassword
    // }));
    
    
    // Http.onreadystatechange = (e) => {
        //     if (Http.readyState === 4) {
            
            //         // console.log(Http.responseText);
            //         const jsonResponse = JSON.parse(Http.responseText)
            //         if (jsonResponse.status === 200) {
                //             alert(jsonResponse.token);
                //             console.log(jsonResponse.token)
                //             history.push("/dashbord");
                //             localStorage.setItem("token", jsonResponse.token);
                //             globalStateUpdate(preval => {
                    //                 return {...preval, loginStatus : true, token: jsonResponse.token}
                    //             })
                    //         } else {
                        //             alert(jsonResponse.message);
                        //         }
                        //     }
                        // }
                        
                        
                        
                        
                        
                        
                        return(
                            <div className="main">
             <div className="head">
             <h1> Login Form</h1>

             </div>
             <div className="form">
             <form onSubmit={ login }>
                
                 <label className=""> Email :  
                     <input type="text" id="loginEmail" placeholder="EMAIL"/>
                 </label>
               
                 <label className="">
                    Passsword : 
                    <input type="password" id="loginPassword" placeholder="PASSWORD"/>
                 </label>
               <button>Login</button>
             </form>

             </div>
         </div>
     )
     
    }
     export default Login;