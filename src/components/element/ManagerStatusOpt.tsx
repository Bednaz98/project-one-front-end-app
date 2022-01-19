import React from "react"
import { Request } from "../../Project1-GitUtil-Reimbursement/Types/Entity"
import { RequestStatus } from "../../Project1-GitUtil-Reimbursement/Types/Enums"
import { sysContext } from "../wrappers/wProviderWrapper"


export default function ManagerStatusOpt(props){
    const SetRequestStatus:Function= props.SetRequestStatus

    function DisplayButtons(){
        return (<>
            <button onClick={ ()=> {SetRequestStatus(RequestStatus.Denied)} } >  Deny   </button>
            <button onClick={ ()=> {SetRequestStatus(RequestStatus.Approved)} } > Approve </button>
        </>)
    }

    return(<>
    {DisplayButtons()}
    </>)
}