import React, {useState,useEffect} from "react";
import SearchColum from "../searchBox/SearchColum.js";
import axios from "axios";
import { useParams } from "react-router-dom";

function InfoCardHotel(props) {
    const params = useParams();
    const [services,setServices] = useState(null)
    const icons ={
        wifi:"wifi",
    }

    useEffect(()=>{ getData()},[])    

    const getData = async()=>{
        const response = await axios.get(`http://cepbep.ddns.net:2500/api/hotelDB/hotels/getHotelById/${params.hotelId}`)
        setServices(response.data.info.services);
    }
    return(
        <div className="catalog m0">
            <div className="colum">
                <div><h3 className="h3copy">{props.name}</h3></div>          
                <div className="catalog">
                    <div className="searchColum">
                        <SearchColum/>
                    </div>
                    <div className="colum copy">
                        <div className="allPhotoGallery">
                            <img className="mP" src={props.mainPhoto}/>
                        </div>
                        <div className="allPhotoGallery">
                           {props.gPhoto.map((obj)=><img className="gP" key={Math.random()} src={obj}/>)}
                        </div>
                         <div className="gridMini">
                            {services && services.map((obj)=><div key={Math.random()} className="servisesBox"><span>{icons[obj]}</span>{obj}</div>)}
                        </div>
                    </div>
                </div>
                <div className="descriptionHotel">
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
    )
}

export default InfoCardHotel;