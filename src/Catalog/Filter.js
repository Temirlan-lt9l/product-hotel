import React, { useState } from "react";
import Store from "../Reducer/Store.js";
import axios from "axios";
import "./filter.css"
import ActionCreate from "../Reducer/ActionCreate.js";

function Filter(props) {
    const [valuePrice, setValuePrice] = useState('');
    const [valueStar, setValueStar] = useState('');
    const [valueServices, setValueServices] = useState('');


    const filter = async () => {
        const filter =  {
            stars: parseInt(valueStar) ,
            services:valueServices,
            price:parseInt(valuePrice),
          }
        const response = await axios.post(`http://cepbep.ddns.net:2500/api/hotelDB/hotels/postHotelFilter`, {
        filter: {
          stars: parseInt(valueStar)
        }
      })
      console.log(filter);
        console.log(response.data);
      Store.dispatch(ActionCreate(response.data))
    }
    const sendFilter = () =>{
        filter()
    }
    
      
    
    return(
        <div className="boxInput">
            <div className="boxInput">Все фильтры</div>
            <div className="boxInput">
                <h5>Ваш бюджет (за ночь)</h5>
                <div className="boxFilter">
                    <input type="checkbox" name='60 000 kzt - 80 000 kzt ' value='60 000 kzt - 80 000 kzt ' onChange={(e)=>{setValuePrice(e.target.name)}}/>
                    <div>20 000 kzt - 40 000 kzt </div>
                    <span>100</span>
                    </div>
                    <div className="boxFilter">
                    <input type="checkbox" name='60 000 kzt - 80 000 kzt ' value='60 000 kzt - 80 000 kzt ' onChange={(e)=>{setValuePrice(e.target.name)}}/>
                    <div>50 000 kzt - 70 000 kzt </div>
                    <span>100</span>
                    </div>
                    <div className="boxFilter">
                    <input type="checkbox" name='60 000 kzt - 80 000 kzt ' value='60 000 kzt - 80 000 kzt ' onChange={(e)=>{setValuePrice(e.target.name)}}/>
                    <div>80 000 kzt - 90 000 kzt </div>
                    <span>100</span>
                    </div>
            </div>
            <div className="boxInput">
                <h5>Звезды</h5>
                <div className="boxFilter">
                    <input type="checkbox" name='5 ' value=' 5 звезд' onChange={(e)=>{setValueStar(e.target.name)}}/>
                    <div>5 звезд </div>
                    <span>100</span>
                    </div>
                    <div className="boxFilter">
                    <input type="checkbox" name=' 4' value='4 звезды' onChange={(e)=>{setValueStar(e.target.name)}}/>
                    <div>4 звезды </div>
                    <span>100</span>
                    </div>
                    <div className="boxFilter">
                    <input type="checkbox" name=' 3' value='3 звезды ' onChange={(e)=>{setValueStar(e.target.name)}}/>
                    <div>3 звезды</div>
                    <span>100</span>
                    </div>
                    <div className="boxFilter">
                    <input type="checkbox" name='2 ' value= "2 звезды" onChange={(e)=>{setValueStar(e.target.name)}}/>
                    <div>2 звезды</div>
                    <span>100</span>
                    </div>
                    <div className="boxFilter">
                    <input type="checkbox" name='1 ' value='1 звезда ' onChange={(e)=>{setValueStar(e.target.name)}}/>
                    <div>1 звезда </div>
                    <span>100</span>
                    </div>
                    <div className="boxFilter">
                    <input type="checkbox" name='0 ' value=' Без звезд' onChange={(e)=>{setValueStar(e.target.name)}}/>
                    <div>Без звезд </div>
                    <span>100</span>
                    </div>
            </div>
            <div className="boxInput">
                <h5>Чем заняться в свободное время</h5>
                   <div className="boxFilter">
                    <input type="checkbox" name='pool' value= "Pool" onChange={(e)=>{setValueServices(e.target.name)}}/>
                    <div>Pool</div>
                    <span>100</span>
                    </div> 
                   <div className="boxFilter">
                    <input type="checkbox" name='transfer' value='transfer' onChange={(e)=>{setValueServices(e.target.name)}}/>
                    <div>transfer</div>
                    <span>100</span>
                    </div>
                   <div className="boxFilter">
                    <input type="checkbox" name='elevator' value='elevator' onChange={(e)=>{setValueServices(e.target.name)}}/>
                    <div>elevator</div>
                    <span>100</span>
                    </div>
            <div className="boxInput">
                <h5>Удобства в номере</h5>
                     <div className="boxFilter">
                        <input type="checkbox" name='wifi' value= "wifi" onChange={(e)=>{setValueServices(e.target.name)}}/>
                        <div>WI-FI</div>
                        <span>100</span>
                    </div>
                    <div className="boxFilter">
                        <input type="checkbox" name='bar' value='bar' onChange={(e)=>{setValueServices(e.target.name)}}/>
                        <div>Mini BAR</div>
                        <span>100</span>
                    </div>
                    <div className="boxFilter">
                        <input type="checkbox" name='tv' value='tv' onChange={(e)=>{setValueServices(e.target.name)}}/>
                        <div>TV</div>
                        <span>100</span>
                    </div>
            </div>
        </div>
        <button className="filterBtn" onClick={sendFilter}>Filter</button>
        </div>
    )
}

export default Filter;