import React  from "react";
import { Link } from "react-router-dom";
import NotImg from "./hotel.png"
import "./hotel.css";

function HomeHotelCard(props) {
    
    return(
    <div className="box2">
        <div className="boxPhoto2">
           {props.img.slice(0,5) =="https" ? <img src={props.img}/> : <img src={NotImg}/>} 
        </div>
        <div className="boxDescription2">
            <div className="about2">
                <div>
               <Link to={`/${props._id}`}> <h4 className="fondSizeh4">{props.name}</h4></Link>
               <p className="cityName">{props.cityName}</p>
                </div>
                <Link to={`/${props._id}`} className="price2">
                    <button>
                        <span className="show2">Show apartmen</span>
                        <span className="material-symbols-outlined arrow">chevron_right</span>
                    </button>
                </Link>   
            </div>
        </div>
           
    </div>
    )
}

export default HomeHotelCard;