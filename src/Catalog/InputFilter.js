import React from "react";

function InputFilter(props) {
    
    return(
        <div className="checkbox">
            <input type="checkbox" name={props.nameInput} value={props.valueInput} />
            <div>{props.valueDiv}</div>
            <span>{props.amount}</span>
        </div>
    )
}

export default InputFilter;