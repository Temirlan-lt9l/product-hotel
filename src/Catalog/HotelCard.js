import React  from "react";
import { Link } from "react-router-dom";
import "./hotel.css";
import NotImg from "./hotel.png"



function HotelCard(props) {

    const stars = props.star;
   const star = (star) =>{
        if(star == 5) {
            return <div>
                <span className="material-symbols-outlined stars">stars</span>
                <span className="material-symbols-outlined stars">stars</span>
                <span className="material-symbols-outlined stars">stars</span>
                <span className="material-symbols-outlined stars">stars</span>
                <span className="material-symbols-outlined stars">stars</span>
            </div>
        }
        else if (star == 4) {
            return <div>
            <span className="material-symbols-outlined stars">stars</span>
            <span className="material-symbols-outlined stars">stars</span>
            <span className="material-symbols-outlined stars">stars</span>
            <span className="material-symbols-outlined stars">stars</span>
        </div>
        }
        else if(star == 3) {
            return <div>
            <span className="material-symbols-outlined stars">stars</span>
            <span className="material-symbols-outlined stars">stars</span>
            <span className="material-symbols-outlined stars">stars</span>
        </div>
        }
        else if(star == 2) {
            return <div>
            <span className="material-symbols-outlined stars">stars</span>
            <span className="material-symbols-outlined stars">stars</span>
        </div>
        }
        else if(star == 1) {
            return <div>
            <span className="material-symbols-outlined stars">stars</span>
        </div>
        }
        else if(star == 0) {
            return
        }
   }

   
    return(
    <div className="box">
        <div className="boxPhoto">
        {props.img.slice(0,5) =="https" ? <img src={props.img}/> : <img src={NotImg}/>} 
        </div>
        <div className="boxDescription">
            <div className="about">
                <div>
               <Link to={`/${props._id}`}> <h3>{props.name}</h3> <div>{star(stars)}</div></Link>
               <p className="cityName">{props.cityName}</p>
                </div>
                <p className="description">
                {props.description}
                </p>
            </div>
            <div className="grade">
                <div className="score">
                    <div className="review">
                        <h4>review</h4>
                        <p>№review</p>
                    </div>
                    <div className="total">{props.total}</div>
                </div>
                <div className="price">
                    <span>{props.price}</span>
                   <Link to={`/${props._id}`}>
                        <button>
                            <span className="show">Show apartmen</span>
                            <span className="material-symbols-outlined arrow">chevron_right</span>
                        </button>
                    </Link> 
                </div>
            </div>
        </div>
    </div>
    )
}

export default HotelCard;