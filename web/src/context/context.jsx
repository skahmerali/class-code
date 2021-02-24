

import React, {useState, useEffect, useContext } from 'react';
import { baseUrl } from "../core/index"

import axios from "axios";
 const GlobalStateContext = React.createContext()
 const GlobalStateUpdateContext = React.createContext()




 export const UseGlobalState = () => useContext(GlobalStateContext)
 export const UseGlobalStateUpdate = () => useContext(GlobalStateUpdateContext)


 export function GlobalStateProvider({ children }) {
    const [data, setData] = useState({
        user: null,
        darkTheme: false,
        loginStatus: false,
        token: null
    })

    useEffect(() => {
        
        axios({
            method: "get",
            url: baseUrl + '/profile',
            withCredentials: true
        })
        .then(function (response) {
            // sir : handle success
            console.log("response: ", response.status);
            if (response.status === 200) {
                setData(prev => ({ ...prev, loginStatus: true }))
            }
        })
        .catch(function (error) {
            // sir : handle error
            console.log("error: ==== ", error);
            if (error && error.response && error.response.status) {
                console.log("error ==============> ", error.response.status);
                setData(prev => ({ ...prev, loginStatus: false }))
            }
        })
        
      

        return () => {
            console.log("cleanup")
        }
    }, [])
    
    
    
    return (
        
        <GlobalStateContext.Provider value={data}>
            <GlobalStateUpdateContext.Provider value={setData}>
                {children}
            </GlobalStateUpdateContext.Provider>
        </GlobalStateContext.Provider>

    )
}
