import React, { useRef } from 'react';
import './style.css';
import { UseGlobalState, UseGlobalStateUpdate } from "./../../context/context"
import {axios} from "axios";
import { baseUrl } from "./../../core/index"
import {
    useHistory
} from "react-router-dom";
 function Singup(){
    const globalState = UseGlobalState()
    const setGlobalState = UseGlobalStateUpdate()

    let history = useHistory()

    function signup(event) {
        event.preventDefault()




        var userEmail = useRef()
        var userName = useRef()
        var userPassword = useRef()
        var userPhone =useRef()
        // var userName = document.getElementById('name').value
        // var userEmail = document.getElementById('email').value.toLowerCase()
        // var userPhone = document.getElementById('phone').value
        // var userPassword = document.getElementById('password').value
    
        // console.log(userEmail)
    
        var userData = {
            userName: userName.current.value,
            userEmail: userEmail.current.value,
            userPhone: userPhone.current.value,
            userPassword: userPassword.current.value
        }
        // console.log(userData)
    
        
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("password").value = ""
        

        axios({
            method: 'post',
            url: baseUrl + '/signup',
            data: userData,
            withCredentials: true
        })
            .then(function (response) {
                alert(response.data.message)
                history.push('/login')
            })
            .catch(function (error) {

                alert(error.response.data.message)
            });









        // const Http = new XMLHttpRequest();
        // Http.open("POST","http://localhost:5000/signup");
        // // const url = "http://localhost:5000/signup";
        // Http.setRequestHeader("Content-Type", "application/json");
    
        // Http.send(JSON.stringify(userData));
    
        // Http.onreadystatechange = (e) => {
        //     if (Http.readyState === 4) {
    
        //         const jsonResponse = JSON.parse(Http.responseText)
    
        //         if (jsonResponse.status === 200) {
        //             alert(jsonResponse.message);
        //             history.push("/login");
        //             console.log(jsonResponse.message);
        //         } else {
        //             console.log(jsonResponse.status);
        //             alert(jsonResponse.message);
        //         }
        //     }
        // }


        
        return false;
    
    }











     return(
         <div className="main">
             <div className="head">
             <h1> Signup Form</h1>

             </div>
             <div className="form">
             <form onSubmit={signup}>
                 <label className="">
                     Name :  
                     <input type="text" ref={userName} id="name" placeholder="FULL NAME"/>
                 </label >
                 <label className=""> Email : 
                     <input type="text" ref={userEmail} id="email" placeholder="EMAIL"/>
                 </label>
                 <label className="">
                     Phone Number : 
                    <input type="text" ref={userPhone} id="phone" placeholder="   Phone Number"/>
                 </label>
                 <label className="">
                    Passsword:
                    <input type="password" ref={userPassword} id="password"placeholder="PASSWORD"/>
                 </label>
                 {/* <label className="">

                     Gender:
                 <select id="gen">
                     <option value="male">MALE</option>
                     <option value="female">Female</option>
                 </select>
                 </label> */}
                 <button>Signup</button>
             </form>

             </div>
         </div>
     )
 }
 export default Singup;