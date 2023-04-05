import React, { useEffect, useState } from "react";
import Store from "../Reducer/Store.js";
import ActionCreate from "../Reducer/ActionCreate.js";
import { DateRange } from 'react-date-range';
import axios from "axios";
import "./searchBox.css"
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format} from "date-fns";
import { Link } from "react-router-dom";

function SearchBox(props) {
    const [openDate, setOpenDate] = useState(false)
    const [city, setCity] = useState('Almaty');
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

    const getData = async()=>{
        const response = await axios.get(`http://cepbep.ddns.net:2500/api/hotelDB/hotels/searchHotels/${city}`,
        {
            'headers':{
                    "Content-Type":"application/json"                
            }
        })
        Store.dispatch(ActionCreate(response.data))

    }
    const showHotel = (e) =>{
        getData()
        localStorage.setItem("city", city)
    }

    useEffect(()=>{getData()}, [])

        
    return(
        <div className="search">
            <form>
                <div className="inputbox one">
                    <span className="material-symbols-outlined">bed</span>
                    <input type="text" placeholder="город" className="city" value={city} onChange={(e) => setCity(e.target.value)}/>
                </div>
                <div className="inputbox two">
                    <div className="calendar" >
                    <span className="material-symbols-outlined calendarImg">calendar_month </span>
                        <span className="dash" onClick={()=> setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM.dd.yyyy")}`} - {`${format(date[0].endDate, "MM.dd.yyyy")}`} </span>
                           {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            />}
                    </div>
                </div>
                <Link className="inputbox newA" to="/pageCatalog">
                    <div className="inputbox three">
                    <input className="submit" type="submit" value="НАЙТИ" onClick={showHotel}/>
                    </div>
                </Link> 
            </form>
        </div>
    )
}

export default SearchBox;