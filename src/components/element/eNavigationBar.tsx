
export default function NavigationBar(props){
    const {switchTab} = props;
    return (
    <>
    <table> 
            <tbody>
                <tr><td><button onClick={()=> {switchTab(0)} }>Your Profile</button></td>
                    <td><button onClick={()=> {switchTab(1)} }>View Your Reimbursement</button></td>
                    <td><button onClick={()=> {switchTab(2)} }>Make a Reimbursement Request</button></td>
                    <td><button onClick={()=> {switchTab(3)} }>Manage Reimbursement</button></td>
                    <td><button onClick={()=> {switchTab(4)} }>Stats</button></td>
                </tr>
            </tbody>
        </table>
    </>
    )
}