import React,{useState, useEffect} from "react";
import axios from "axios";
import Store from "../Reducer/Store.js";
import ActionCreate from "../Reducer/ActionCreate.js";
import { Link } from "react-router-dom";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {format} from "date-fns";
import { DateRange } from 'react-date-range';




function SearchColum(props) {
    const [city, setCity] = useState(localStorage.getItem("city"));
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
    
    const getData = async()=>{
        console.log(city);
        const response = await axios.get(`http://cepbep.ddns.net:2500/api/hotelDB/hotels/searchHotels/${city}`,
        {
            'headers':{
                    "Content-Type":"application/json"                
            }
        })
        Store.dispatch(ActionCreate(response.data))
    }

    const showHotel = () =>{
        getData()
        localStorage.setItem("city", city)
    }

    useEffect(()=>{showHotel()},[])

    
    return(       
        <form className="colum">
            <div className="inputbox one hundred">
                <span className="material-symbols-outlined">bed</span>
                <input type="text" placeholder="город" className="city" value={city} onChange={(e) => setCity(e.target.value)}/>
            </div>
            <div className="inputbox two hundred">
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
            <div className="inputbox three hundred">
               <Link to="/pageCatalog" className="linkHome"><input className="submit he" type="submit" value="НАЙТИ" onClick={showHotel}/></Link>
            </div>
        </form>
    )
}

export default SearchColum;