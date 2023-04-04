import React, {useEffect, useState} from "react";
import Header from "../header/Header.js";
import InfoCardHotel from "./InfoCardHotel.js";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./infoHotel.css"

function InfoHotel(props) {
    const params = useParams()
    const [hotel, setHotel]= useState(null);
    console.log(params);
   
    useEffect(()=>{ getData()},[])    

    const getData = async()=>{
        const response = await axios.get(`http://cepbep.ddns.net:2500/api/hotelDB/hotels/getHotelById/${params.hotelId}`)
        setHotel(response.data)
    }
    if(hotel) {
        return(
        <div className="wrapper">
            <Header/>
            {hotel ? <InfoCardHotel name={hotel.name} mainPhoto={hotel.info.mainPhoto} gPhoto={hotel.info.photoAlbum} description={hotel.info.description}/>: <span className="loader"></span>}
        </div>
    )
}
}

export default InfoHotel;