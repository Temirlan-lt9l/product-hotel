import React from "react";
import { Outlet} from "react-router-dom";



function RouterLayout (props) {
    return(
       <div className="wrapper">
        <Outlet/>
       </div>
    )
}

export default RouterLayout;