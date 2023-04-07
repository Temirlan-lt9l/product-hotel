import React, { useEffect, useState } from "react";
import ServicesBox from "./ServicesBox.js";
import { Link } from "react-router-dom";
import axios from "axios";
import "./registHotel.css"


function RegistrationHotel(props) {
    const [name, setName] = useState('');
    const [country,setCountry] = useState('');
    const [city, setCity] = useState('');
    const [stars, setStars] = useState('');
    const [description, setDescription] = useState('');
    const [mainPhoto, setMainPhoto] = useState('');
    const [sendPhoto, setPhoto] = useState('');
    const [photoAlbum, setPhotoAlbum] = useState([]);
    const [allServices, setAllServises] = useState([]);
    const [services, setServices] = useState('');
    const [price,setPrice] = useState(''); 
    const[ok, setOk] = useState('');


    const postData = async ()=>{
        const data = {
            "name": name,
            "country": country,
            "city": city,
            "stars": parseInt(stars),
            "mainPhoto": mainPhoto,
            "description": description,
            "services": allServices,
            "photoAlbum": photoAlbum
          }

        const response = await axios.post("http://cepbep.ddns.net:2500/api/hotelDB/hotels/addHotel", data, {
            headers: {
            "Content-Type": "application/json"
            }
            })
            setOk(response.data)
    }
    const submitForm = async (e)=> {
        e.preventDefault()
        postData()
      }
      const addPhotoByLink =  () =>{
        setPhotoAlbum([...photoAlbum, sendPhoto]);
        setPhoto('')
      }

      const deletePhote = (index)=>{
        setPhotoAlbum(photoAlbum.filter((_,i)=> i != index))
      }


      useEffect(()=>setAllServises(prev => {
        return[...prev, services];
    }),[services])

    return(
        <div className="wrapper">
            <header>
            <div className="logo">
               <Link to='/'><span className="material-symbols-outlined apartment">apartment</span></Link>  
            </div>
            <div className="acc">
                <Link to="/registrationUser"><input type="submit" value="Регистрация" className="login"/></Link>
                <Link to="/login"><input type="submit" value="Войти в аккаутн" className="login"/></Link>
            </div>
            </header>
            <div className="catalog">
                <form className="reg">
                <h4>ФОРМА РЕГИСТРАЦИИ ОТЕЛЯ</h4>
                <input type="text" className="formInput" placeholder="Названия отеля" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" className="formInput" placeholder="Страна" name="country" value={country} onChange={(e) => setCountry(e.target.value)}/>
                <input type="text" className="formInput" placeholder="Город" name="city" value={city} onChange={(e) => setCity(e.target.value)}/>
                <input type="number" className="formInput" placeholder="Рейтинг " name="stars" value={stars} onChange={(e) => setStars(e.target.value)}/>
                <textarea type="text" className="formInput" placeholder="Описание" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <div className="photoBox">
                    <input type="text" className="formInput" placeholder="Ссылка на сновную фотографию " name="mainPhoto" value={mainPhoto} onChange={(e) => setMainPhoto(e.target.value)}/>
                    <div>
                        {mainPhoto && <img src={mainPhoto} className="linkImg"/>}
                    </div>
                </div>
                <div className="photoBox">
                    <input type="text" className="formInput" placeholder="Дополнительные фотографии" name="photoAlbum" value={sendPhoto} onChange={(e) => setPhoto(e.target.value)}/>
                    <div className="photoGrid"> 
                    {photoAlbum.length > 0 && photoAlbum.map((link,i) => (
                        <div  key={i} className="fix">
                            <img key={Math.random()} src={link} className="linkImg"/>
                            <span className="material-symbols-outlined absolute" onClick={()=>{deletePhote(i)}}>delete</span>
                        </div>
                    ))}
                    <div className="addPhoto">
                        <span className="material-symbols-outlined upload" onClick={()=>{addPhotoByLink()}}>upload</span>
                    </div>
                    </div>
                </div>
                <div className="photoBox">
                    <h4>Услуги</h4>
                    <div className="servicesGrid">
                       <ServicesBox value="Wifi"  text="wifi" onChange={(e) => setServices(e.target.value)}/>
                       <ServicesBox value="BAR"  text="local_bar"  onChange={(e) => setServices(e.target.value)}/>
                       <ServicesBox value="TV"   text="tv" onChange={(e) => setServices(e.target.value)}/>
                       <ServicesBox value="Pool"   text="pool" onChange={(e) => setServices(e.target.value)}/>
                       <ServicesBox value="Transfer"  text="move_up" onChange={(e) => setServices(e.target.value)}/>
                       <ServicesBox value="Balcony"  text="balcony" onChange={(e) => setServices(e.target.value)}/>
                       <ServicesBox value="Elevator"   text="elevator" onChange={(e) => setServices(e.target.value)}/>
                       <ServicesBox value="Laundry"   text="local_laundry_service" onChange={(e) => setServices(e.target.value)}/>
                    </div>
                </div>
                <input type="number" className="formInput" placeholder="Цена за номер" name="services" value={price}  onChange={(e) => setPrice(e.target.value)}/>
                <input type="submit" className="submit done" value="Submit" onClick={(e)=>submitForm(e)}/>
                {ok && <div className="greenOk"> <p>Регистрация завершена</p> </div> }
                </form>
            </div>
        </div>
    )
}

export default RegistrationHotel;