import React from "react";
import Header from "../header/Header.js";
import Info from "../header/Info.js";
import HomeCatalog from "../Catalog/HomeCatalog.js"
import SearchBox from "../searchBox/SearchBox.js";

function Home(props) {
    
    return(
    <div className="wrapper">
        <Header/>
        <Info/>
        <SearchBox/>
        <HomeCatalog/>
    </div>
    )
}

export default Home;