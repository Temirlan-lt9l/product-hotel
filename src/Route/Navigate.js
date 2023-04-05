import React from "react";
import NotFound from "../NotFound.js";
import RouterLayout from "./RouterLayout.js";
import Home from "../Home/Home.js";
import InfoHotel from "../InfoHotel/InfoHotel.js";
import PageHotelCatalog from "../Catalog/PageHotelCatalog.js";
import RegistrationHotel from "../Registration/RegistrationHotel.js";
import RegistrationUser from "../Registration/RegistrationUser.js";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function Navigate(props) {
    
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<RouterLayout />}>  
                <Route index element={<Home/>}></Route>
                <Route path="registrationHotel" element={<RegistrationHotel/>}/>
                <Route path="registrationUser" element={<RegistrationUser/>}/>
                <Route path="/:hotelId" element={<InfoHotel/>}/>
                <Route path="pageCatalog" element={<PageHotelCatalog/>}/>
                <Route path="*" element={<NotFound/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Navigate;