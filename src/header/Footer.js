import React , {useState}from "react";
import { Link } from "react-router-dom";
import "./headerStylr.css";

function Footer(props) {
    const [value, setValue] = useState('')
    
    return(
        <footer>
            <div className="logo">
               <Link to='/'><span className="material-symbols-outlined apartment">apartment</span></Link>  
            </div>
            <div className="mailBox">
                <h2 className="h2Mail">Сэкономьте время и деньги!</h2>
                <div className="mail">
                    <input className="inputMail" type="text" placeholder="Ваш электронный адрес" value={value} onChange={(e)=>setValue(e.target.value)}/>
                    <button className="btnMail">Подписаться</button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;