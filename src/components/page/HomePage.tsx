import { useState } from "react";
import NavigationBar from "../element/eNavigationBar";
import UserProfile from "../panels/homepage/pUserProfile";
import RequestView from "../panels/homepage/pRequestView";
import RequestCreation from "../panels/homepage/pRequestCreation";


export default function HomePage(){
    const [ActiveTab, setActiveTab] = useState(0)
    function switchActiveTable(){
        switch(ActiveTab){
            case 0:     {return ( <UserProfile/>  )  }
            case 1:     {return ( <RequestView ManagerMode= {false}/> )  }
            case 2:     {return ( <RequestCreation/>  )  }
            case 3:     {return (  <RequestView ManagerMode= {true}/>  )  }
            case 4:     {return ( <h1>Tab 5</h1>  )  }
            default:    {return (  <UserProfile/> )   }
        }
    }
    return(<>
    <h1>Home Page</h1>
    <NavigationBar switchTab={setActiveTab}/>
    {switchActiveTable()}
    </>)
}