import React, {useState} from "react";
import Footer from "../header/Footer.js";
import axios from "axios";
import { Link } from "react-router-dom";

function Login(props) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const[ok, setOk] = useState('')

    const postData = async ()=>{
        const data = {
            login: login,
            password: password,
          }

        const response = await axios.post("http://cepbep.ddns.net:2500/api/hotelDB/users/login", data, {
            headers: {
            "Content-Type": "application/json"
            }
            })
            localStorage.setItem("user", response.data[0]._id )
            setOk(response.data[0]._id )
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
                <Link to="/registrationUser"><input type="submit" value="Регистрация" className="login"/></Link>
            </div>
            </header>
        <div className="catalog">
                <form className="reg">
                <h4>Войти в аккаутн</h4>
                    <input type="text" className="formInput" placeholder="Login" name="name" value={login} onChange={(e) => setLogin(e.target.value)}/>
                    <input type="password" className="formInput" placeholder="Password" name="stars" value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <Link to='/'><input type="submit" className="submit done" value="Submit" onClick={(e)=>submitForm(e)}/></Link>  
                  {ok && <div className="greenOk"> <p>Регистрация завершена</p> </div> }
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Login;