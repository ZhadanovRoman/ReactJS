import React, { useEffect, useState} from 'react';
import './side-panel.css';

import { useDispatch, connect } from 'react-redux';
import { btnsSwipperState, CityData, PreloadState } from '../../action';
import CitysList from './CitysList/CitysList';
import ErrorSpan from './ErrorSpan/ErrorSpan';

let citysArr = [];

function SidePanel(props) {
    let dataForSidePanel = props.boxState.cityDataArr  //подробные данные массив в часах
    
    
    let selectedCity = props.boxState.selectedCityItem;
    const dispatch = useDispatch();
    const [searchOpen, setSearchOpen] = useState({});
    const [isOpen, setIsOpen] = useState(true);
    const [buttonThemeChange, setButtonThemeChange] = useState({});
    const [containerBg, setContainerBg] = useState({});
    
  

    function menuOpen() {
        setSearchOpen(() => {
            return {
                visibility: 'visible',
                left: '0px',

            }
        })
    }

    function menuClose() {
        setSearchOpen(() => {
            return {
                left: '-460px',
                visibility: 'hidden'
            }
        })

    }

    function themeDarkOn() {
        setIsOpen((prev) => !prev);
        if (isOpen) {
            document.documentElement.style.setProperty('--gray48', '#E6E6E6');
            document.documentElement.style.setProperty('--bgF1', '#100E1C');
            document.documentElement.style.setProperty('--whiteFF', '#212331');
            setContainerBg(() => {
                return {
                    backgroundImage: "url(./img/Cloud-backgroundDark.svg)"
                }
            })
            setButtonThemeChange(() => {
                return {
                    left: '54%',
                    background: 'var(--accent)'
                }
            })
            dispatch(btnsSwipperState('./img/active-dark.svg'));
        } else {
            document.documentElement.style.setProperty('--gray48', '#48484A');
            document.documentElement.style.setProperty('--bgF1', '#F1F1F1');
            document.documentElement.style.setProperty('--whiteFF', '#FFFFFF');
            setContainerBg(() => {
                return {
                    backgroundImage: "url(./img/Cloud-backgroundJPG.jpg)"
                }
            })
            setButtonThemeChange(() => {
                return {
                    left: '5%',
                    background: 'var(--gray48)'
                }
            })
            dispatch(btnsSwipperState('./img/active.svg'));

        }

    }

    /**************************************** передаем город введенный в инпут */
   
    useEffect(()=>{
        if(selectedCity.length>0){
            getData(selectedCity);
        }else{}
    },[ selectedCity])

    
 

    const [inputVal, setInputVal] = useState('');
    const [locationCity, setLocationSity] = useState('Москва');
    const [errorUps,setErrorUps] = useState('')

    function sendData(e) {
        e.preventDefault();
        dispatch(PreloadState(false));
        getData(inputVal);
    }

    async function getData(city) {

        const res = await fetch(`https://nominatim.openstreetmap.org/search.php?q=${city}&format=json&addressdetails=1&limit=1`);
        const data = await res.json();
        
        if (data.length > 0) {
            setErrorUps(()=>{''})
            let cityName = city.charAt(0).toUpperCase() + city.slice(1);
               if(citysArr.indexOf(cityName)===-1){
                citysArr.push(cityName);
               }
            
            getCityData(data[0].lat,data[0].lon)
            
            setLocationSity(() => {
                return cityName;
            })
            menuClose()
        }else{
              setErrorUps(()=>{
                return 'Упс! Город не найден,попробуйте другой'
              })
        }
    }

   async function getCityData(lat,lon){
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${'535f8a50b4bc24608c72fcde2aecb52b'}&units=metric&lang=ru`)
           const data = await res.json();
          
          dispatch(CityData(data))
              
    }

    const regexp = /\w/;
   function inptValid(event){ 
    if(regexp.test(event.target.value)===true){
        setErrorUps(()=>{
            return 'Только КИРИЛЛИЦА!!!'
        })
    }else{setErrorUps(()=>{''})}
    setInputVal(event.target.value)
}


//////////// обработка и вывод данных в Бар
const days = [
    'Вс,', 'Пн,', 'Вт,', 'Ср,', 'Чт,', 'Пт,', 'Сб,'
];
const months = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
]
const [sidePanelIcon,setSidePanelIcon] = useState('./img/snow.svg');
    const [sidePanelTemp,setSidePanelTemp] = useState('1');
    const [sidePanelDescr,setSidePanelDescr] = useState('Снег');
    const [sidePanelFeels,setSidePanelFeels] = useState('-3');
    const [sidePanelDay,setSidePanelDay] = useState('Вс,');
    const [sidePanelDayNum,setSidePanelDayNum] = useState('13');
    const [sidePanelMonth,setSidePanelMonth] = useState('Мар');

useEffect(()=>{
    if(dataForSidePanel.weather){
        
        setSidePanelIcon(() => {
            return (
                 `https://openweathermap.org/img/wn/${dataForSidePanel.weather[0].icon}@4x.png`
            )
        })
        setSidePanelTemp(Math.round(dataForSidePanel.main.temp));
        setSidePanelDescr(dataForSidePanel.weather[0].description.charAt(0).toUpperCase()+dataForSidePanel.weather[0].description.slice(1))
        setSidePanelFeels(' '+Math.round(dataForSidePanel.main.feels_like))
        setSidePanelDay(days[new Date().getDay()])
        setSidePanelDayNum(new Date().getDate()+' ')
        setSidePanelMonth(months[new Date().getMonth()])
    }
        
},[dataForSidePanel])



    return (

        <>

            <section className="sideP">
                <div className="sideP-container" style={containerBg}>
                    <button onClick={menuOpen} className="sideP-btn" tabIndex="1">Поиск города</button>

                    <label className="sideP-check" htmlFor="check">
                        <input type="checkbox" className="sideP-check-inpt" />
                        <div className="sideP-check-box" onClick={themeDarkOn}>
                            <div className="sideP-check-circle" style={buttonThemeChange}>
                                <img src="./img/moon.svg" alt="checkbox button" />
                            </div>

                        </div>
                    </label>



                    <img className="sideP-precipitation-img" src={sidePanelIcon} alt="snow" />

                    <div className="sideP-temperature">
                        <span className="sideP-temperature-num">{sidePanelTemp}</span>
                        <span className="sideP-temperature-celsius">°C</span>
                    </div>
                    <h2 className="sideP-precipitation-text">{sidePanelDescr}</h2>
                    <p className="sideP-temperature-feel">Ощущается как
                        <span className="temperature-feel-num">{sidePanelFeels}</span>
                        <span className="temperature-feel-celsius">°C</span>
                    </p>
                    <div className="sideP-day-date">
                        <span className="sideP-day">Сегодня</span>
                        <div className="sideP-date">
                            <span className="sideP-date-week">{sidePanelDay}</span>
                            <span className="sideP-date-num">{sidePanelDayNum}</span>
                            <span className="sideP-date-month">{sidePanelMonth}</span>
                        </div>
                    </div>
                    <div className="sideP-location">
                        <img className="sideP-location-img" src="./img/location-on.svg" alt="location" />
                        <span className="sideP-location-city" >{locationCity}</span>
                    </div>
                </div>

                <div className="sideP-second-container" style={searchOpen} >
                    <div className="sideP-close-block" tabIndex="2" onClick={menuClose}>
                        <span className="sideP-btn-close"></span>
                        <span className="sideP-btn-close2"></span>
                    </div>
                    <ErrorSpan errorText={errorUps}/>
                    <form className="sideP-search-block" onSubmit={sendData}>
                        <input className="sideP-input"  tabIndex="3" onChange={inptValid} />
                        <button type='submit' className="sideP-btn-search" tabIndex="4">Найти</button>
                    </form>
                    <CitysList locationCity={citysArr}/>
                </div>

            </section>
        </>
    )


}
function mapStateToProps(state) {
    return { boxState: state }
    
}
export default connect(mapStateToProps)(SidePanel);