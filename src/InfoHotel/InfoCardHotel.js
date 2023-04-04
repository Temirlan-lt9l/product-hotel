import React, {useState, useEffect} from "react";
import SearchColum from "../searchBox/SearchColum.js";

function InfoCardHotel(props) {
    
    return(
        <div className="catalog">
            <div className="colum">
                <div><h3 className="h3Copy">{props.name}</h3></div>          
                <div className="catalog">
                    <div className="searchColum">
                        <SearchColum/>
                    </div>
                    <div className="colum copy">
                        <div className="allPhotoGallery">
                            <img className="mP" src={props.mainPhoto}/>
                        </div>
                        <div>
                            {/* {props.services.map((obj)=><div>{obj}</div>)} */}
                        </div>
                        <div className="allPhotoGallery">
                           {props.gPhoto.map((obj)=><img className="gP" key={Math.random()} src={obj}/>)}
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