import React from "react";
import SearchColum from "../searchBox/SearchColum.js";

function InfoCardHotel(props) {
   

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
                         <div>
                            {props.services.map((obj)=><div key={Math.random()} >{obj[0]}</div>)}
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