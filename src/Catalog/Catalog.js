import React,  {useEffect, useState} from "react";
import HotelCard from "./HotelCard.js";
import Filter from "./Filter.js";
import SearchColum from "../searchBox/SearchColum.js";
import Store from "../Reducer/Store.js";
import "./catalog.css";

function Catalog(props) {
    let [hotel,setHotel] = useState([])
    useEffect(()=>{
        Store.subscribe(()=>{
            const data = Store.getState()
            setHotel(data.hotelValue)
        })
    },[])
    
    return(
        <div className="catalog">
            <div className="filter">
                <SearchColum/>
                <Filter/>
            </div>
            <div className="conteiner">
              {hotel.map((obj) =><HotelCard key={obj._id} _id={obj._id} star={obj.stars} total={obj.rating} price="60 000" name={obj.name} cityName={obj.city} description={obj.info.description} img={obj.info.mainPhoto}/>)}  
            </div>
        </div>
    )
}

export default Catalog;