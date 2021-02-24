import React from 'react';
 import Approute from "../routing/routing";
 import {UseGlobalState, UseGlobalStateUpdate} from './../../context/context'
function Dashbord() {

    const globalState = UseGlobalState();
    const setGlobalState = UseGlobalStateUpdate();
    
    return (
        <>
        <Approute />
            <div className="main">

                <h1 className="h1-1">
                    Dashbord
                </h1>
                <div className="images">
                </div>
            </div>

        </>
    )
}
export default Dashbord;