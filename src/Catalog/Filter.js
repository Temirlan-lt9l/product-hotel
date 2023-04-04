import React from "react";
import InputFilter from "./InputFilter.js";
import "./filter.css"

function Filter(props) {
    
    return(
        <div className="boxInput">
            <div className="boxInput">Все фильтры</div>
            <div className="boxInput">
                <h5>Ваш бюджет (за ночь)</h5>
                <InputFilter nameInput="1" valueImput="60 000&nbsp;KZT - 80 000&nbsp;KZT" valueDiv="60 000&nbsp;KZT - 80 000&nbsp;KZT" amount="100"/>
                <InputFilter nameInput="2" valueImput="90 000&nbsp;KZT - 100 000&nbsp;KZT" valueDiv="90 000&nbsp;KZT - 100 000&nbsp;KZT" amount="80"/>
                <InputFilter nameInput="3" valueImput="110 000&nbsp;KZT - 120 000&nbsp;KZT" valueDiv="110 000&nbsp;KZT - 120 000&nbsp;KZT" amount="70"/>
            </div>
            <div className="boxInput">
                <h5>Звезды</h5>
                <InputFilter nameInput="1" valueImput="5 звезд" valueDiv="5 звезд" amount="100"/>
                <InputFilter nameInput="2" valueImput="4 звезды" valueDiv="4 звезды" amount="80"/>
                <InputFilter nameInput="3" valueImput="3 звезды" valueDiv="3 звезды" amount="70"/>
            </div>
            <div className="boxInput">
                <h5>Чем заняться в свободное время</h5>
                <InputFilter nameInput="1" valueImput="Пляж" valueDiv="Пляж" amount="100"/>
                <InputFilter nameInput="2" valueImput="Бар" valueDiv="Бар" amount="80"/>
                <InputFilter nameInput="3" valueImput="Массаж" valueDiv="Массаж" amount="70"/>
            </div>
            <div className="boxInput">
                <h5>Удобства в номере</h5>
                <InputFilter nameInput="1" valueImput="WI-FI" valueDiv="WI-FI" amount="100"/>
                <InputFilter nameInput="2" valueImput="TV" valueDiv="TV" amount="80"/>
                <InputFilter nameInput="3" valueImput="BAR" valueDiv="BAR" amount="70"/>
            </div>
        </div>
    )
}

export default Filter;