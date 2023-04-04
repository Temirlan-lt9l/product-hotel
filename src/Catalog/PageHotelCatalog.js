import React from "react";
import Catalog from "./Catalog.js";
import Header from "../header/Header.js";

function PageHotelCatalog(props) {
    

    return(
        <div className="wrapper">
            <Header/>
            <Catalog/>
        </div>
    )
}

export default PageHotelCatalog;