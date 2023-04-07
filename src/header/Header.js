import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./headerStylr.css";

function Header(props) {
   const [userId, setUserId]= useState('')
    const getUser = async()=>{
        const response = await axios.get(`http://cepbep.ddns.net:2500/api/hotelDB/users/${localStorage.getItem('user')}`,
        {
            'headers':{
                    "Content-Type":"application/json"                
            }
        })
        setUserId(response.data._id)
    }
    useEffect(()=>{getUser()}
    ,[])

    return(
        <header>
            <div className="logo">
               <Link to='/'><span className="material-symbols-outlined apartment">apartment</span></Link>  
            </div>
            <div className="acc">
                <Link to="/registrationHotel" ><input type="submit" value="Зарегистрировать Отель" className="login"/></Link>
                <Link to="/registrationUser"><input type="submit" value="Регистрация" className="login"/></Link>
                <Link to="/login"><input type="submit" value="Войти в аккаутн" className="login"/></Link>
            </div>
        </header>
    )
}

export default Header;