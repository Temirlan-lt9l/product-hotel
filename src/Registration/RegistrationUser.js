import React, {useState} from "react";
import Footer from "../header/Footer.js";
import axios from "axios";
import { Link } from "react-router-dom";

function RegistrationUser(props) {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [tryPassword, setTryPassword] = useState('');
    const [fio, setFio] = useState('');
    const[ok, setOk] = useState('');

    const postData = async ()=>{
        const data = {
            login: login,
            password: password,
            tryPassword: tryPassword,
            email: email,
            phoneHumber: parseInt(phone),
            fullName: fio
          }

        const response = await axios.post("http://cepbep.ddns.net:2500/api/hotelDB/users/register", data, {
            headers: {
            "Content-Type": "application/json"
            }
            })
            localStorage.setItem("user", response.data._id )
            setOk(response.data._id)
    }
    const submitForm = async (e)=> {
        e.preventDefault()
        postData()
      }
    return(
        <div className="wrapper">   
          <header>
            <div className="logo">
               <Link to='/'><span className="material-symbols-outlined apartment">apartment</span></Link>  
            </div>
            <div className="acc">
                <Link to="/registrationHotel" ><input type="submit" value="Зарегистрировать Отель" className="login"/></Link>
                <Link to="/login"><input type="submit" value="Войти в аккаутн" className="login"/></Link>
            </div>
            </header>
        <div className="catalog">
                <form className="reg">
                <h4>ФОРМА РЕГИСТРАЦИИ</h4>
                    <input type="text" className="formInput" placeholder="Login" name="name" value={login} onChange={(e) => setLogin(e.target.value)}/>
                    <input type="text" className="formInput" placeholder="email" name="country" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="text" className="formInput" placeholder="Name" name="country" value={fio} onChange={(e) => setFio(e.target.value)}/>
                    <input type="number" className="formInput" placeholder="770170170077" name="city" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                    <input type="password" className="formInput" placeholder="Password" name="stars" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="password" className="formInput" placeholder="Try Password" name="stars" value={tryPassword} onChange={(e) => setTryPassword(e.target.value)}/>
                    <input type="submit" className="submit done" value="Submit" onClick={(e)=>submitForm(e)}/>
                    {ok && <div className="greenOk"> <p>Регистрация завершена</p> </div> }
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default RegistrationUser;