import React,{useState, useEffect} from "react";
import HomeHotelCard from "./HomeHotelCard.js";
import Store from "../Reducer/Store.js";


function HomeCatalog(props) {
    let [hotel,setHotel] = useState([])
    useEffect(()=>{
        Store.subscribe(()=>{
            const data = Store.getState()
            setHotel(data.hotelValue)
        })
    },[])
    return(
    <div className="grid">
        {hotel.map((obj) =><HomeHotelCard key={obj._id} _id={obj._id} name={obj.name} cityName={obj.city}  img={obj.info.mainPhoto}/>)}      
    </div>
    )
}

export default HomeCatalog;