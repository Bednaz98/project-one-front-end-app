import React, { useReducer, useState } from "react";
import HTTPRequestHandler from "../../Project1-GitUtil-Reimbursement/Classes/HTTPRequestHandler";
import {Profile, Request} from '../../Project1-GitUtil-Reimbursement/Types/Entity';

/** Action for reducer function*/ 
export enum SysReducerAction{
    SetProfile
}



/**Object to content the state, dispatcher and initialized state*/
export interface ContextObject{
    HTTPHandler:HTTPRequestHandler
    readUserProfile:Profile
    setUserProfile:React.Dispatch<React.SetStateAction<Profile>>
    SetHTTPHandler:React.Dispatch<React.SetStateAction<HTTPRequestHandler>>
}


/**used to for default context values; assignment of null just for intellisense*/
const contextValue: ContextObject = {
    HTTPHandler: undefined,
    readUserProfile: undefined,
    setUserProfile: null,
    SetHTTPHandler: null,
}
export const sysContext = React.createContext(contextValue)



export default function SuperProvider({children}){
    /*HTTP handler*/ 
    
    const temp:Profile = {FirstName: "",LastName: ""}
    const [readUserProfile, setUserProfile] = useState(temp)
    const [HTTPHandler, setHTTPHandler] = useState(new HTTPRequestHandler(undefined,3001))
    /**re-assignment so typescript is happy assign to 'any'*/
    const readState:ContextObject = {
        HTTPHandler: HTTPHandler,
        readUserProfile,
        setUserProfile: setUserProfile,
        SetHTTPHandler: setHTTPHandler
    };


    return(<>
        <sysContext.Provider value = { {...readState} }>
            {children}
        </sysContext.Provider>
    
    </>)


}