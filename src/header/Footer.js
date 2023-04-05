import React from "react";
import { Link } from "react-router-dom";
import "./headerStylr.css";

function Footer(props) {
    
    return(
        <header>
            <div className="logo">
               <Link to='/'><span className="material-symbols-outlined apartment">apartment</span></Link>  
            </div>
            <div className="acc">
                <Link to="/registrationHotel" ><input type="submit" value="Зарегистрировать Отель" className="login"/></Link>
                <Link to="/"><input type="submit" value="Войти в аккаутн" className="login"/></Link>
            </div>
        </header>
    )
}

export default Footer;