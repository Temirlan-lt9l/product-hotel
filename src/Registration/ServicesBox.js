import React from "react";

function ServicesBox(props) {
    

    return(
        <div className="servicesBox">
            <span className="material-symbols-outlined icon">{props.text}</span>
            <input type="checkbox" className="servicesInput"  value={props.value}  onChange={props.onChange}/>
        </div>
    )
}

export default ServicesBox;