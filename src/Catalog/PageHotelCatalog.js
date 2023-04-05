import React from "react";
import Catalog from "./Catalog.js";
import Header from "../header/Header.js";
import Footer from "../header/Footer.js";

function PageHotelCatalog(props) {
    

    return(
        <div className="wrapper">
            <Header/>
            <Catalog/>
            <Footer/>
        </div>
    )
}

export default PageHotelCatalog;