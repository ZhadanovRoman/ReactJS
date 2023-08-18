import { useEffect, useState } from 'react';

import './fore-cast.css';
import { useDispatch, connect } from "react-redux";
import CardWeek from './CardWeek/CardWeek';
import CardHour from './CardHour/CardHour';
import CardsSliderBtn from './CardSliderBtn/CardSliderBtn';
import { PreloadState } from '../../../action';
import { CityDataArray} from '../../../action';



function ForeCast(props) {



    let preloadState = props.boxState.preloadState
    let linkState = props.boxState.btnSwip;
    let cityName = props.boxState.cityData;
    const [weekArr, setWeekArr] = useState([]);
    const [hourArr, setHourArr] = useState([]);

    const [weekBtnState, setWeekBtnState] = useState({});
    const [hourBtnState, setHourBtnState] = useState({});
    const [displayFirst, setDisplayFirst] = useState({});
    const [displaySecond, setDisplaySecond] = useState({});
    const dispatch = useDispatch();


    useEffect(() => {
        if (cityName.name) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.name}&lang=ru&units=metric&APPID=535f8a50b4bc24608c72fcde2aecb52b`)

                .then(res => res.json())
                .then(
                    (result) => {
                        dispatch(CityDataArray(result.list[0]))
                        setHourArr(result.list.slice(0, 12))
                        setWeekArr(() => [
                            result.list[5],
                            result.list[11],
                            result.list[17],
                            result.list[23],
                            result.list[29],
                            result.list[35],
                            result.list[38]
                        ])
                    }
                )
                
            dispatch(PreloadState(true));
        } else { }

    }, [cityName])

    function byWeekBtn() {
        if (weekCount !== 1) {
            setRightBtnSlider({ opacity: 1 });
        };
        if (weekCount !== 0) {
            setLeftBtnSlider({ opacity: 1,transform: 'rotate(180deg)' });
        };
        setWeekBtnState(() => {
            return {
                color: 'var(--gray48)',
                borderBottom: '2px solid var(--gray48)',
                marginBottom: '-1px'
            }
        })
        setHourBtnState(() => {
            return {
                color: 'var(--hintAC)',
                borderBottom: 'none',
                marginBottom: '0'
            }
        })
        setDisplayFirst(() => {
            return {
                display: 'flex'
            }
        })
        setDisplaySecond(() => {
            return {
                display: 'none'
            }
        })
        setHourOrWeek(true)
    }

    function byHourBtn() {
        if (hourCount !== 11) {
            setRightBtnSlider({ opacity: 1 });
        };
        if (hourCount !== 0) {
            setLeftBtnSlider({ opacity: 1,transform: 'rotate(180deg)' });
        };
        setWeekBtnState(() => {
            return {
                color: 'var(--hintAC)',
                borderBottom: 'none',
                marginBottom: '0'
            }
        })
        setHourBtnState(() => {
            return {
                color: 'var(--gray48)',
                borderBottom: '2px solid var(--gray48)',
                marginBottom: '-1px'
            }
        })
        setDisplayFirst(() => {
            return {
                display: 'none'
            }
        })
        setDisplaySecond(() => {
            return {
                display: 'flex'
            }
        })
        setHourOrWeek(false)
    }



    ///////////*******вывод данных для дней недели */
    const days = [
        'Вс,', 'Пн,', 'Вт,', 'Ср,', 'Чт,', 'Пт,', 'Сб,'
    ];
    const months = [
        'янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
    ]


    let count = 0
    let countDay = 0;

    let countDay2 = 0;
    let nextDay;

    const [numChange, setNumChange] = useState(undefined)
    const [numChangeNum, setNumChangeNum] = useState(2)
    const [monthChange, setMonthChange] = useState(2)
    const [dayChange, setDayChange] = useState(0)

    function getNumDay() {

        if (count === 0) {
            count = +numChangeNum;
            return numChange       ///new Date().getDate()+1
        } else {
            return new Date().getDate() + count++;
        }
    }
    function getMonth() {
        if (count === monthChange) {//1
            return
        } else { return ' ' + months[new Date().getMonth()] }

    }
    function getDay() {
        if (nextDay >= 6) {
            return days[countDay2++]
        } else {

            if (countDay === dayChange) {//-1
                countDay = +1;
                return 'завтра'
            } else {
                countDay = +1;
                nextDay = new Date().getDay() + countDay++

                return days[nextDay]
            };
        }
    }
    ///////////////***//// */



    const startHourCards = [
        <CardHour key={Math.random()} props={{ time: '15:00', temperature: '10°C', imgIcon: " " }} />,
        <CardHour key={Math.random()} props={{ time: '16:00', temperature: '10°C', imgIcon: " " }} />,
        <CardHour key={Math.random()} props={{ time: '17:00', temperature: '10°C', imgIcon: " " }} />,
        <CardHour key={Math.random()} props={{ time: '18:00', temperature: '10°C', imgIcon: " " }} />,
        <CardHour key={Math.random()} props={{ time: '19:00', temperature: '10°C', imgIcon: " " }} />,
        <CardHour key={Math.random()} props={{ time: '20:00', temperature: '10°C', imgIcon: " " }} />,
        <CardHour key={Math.random()} props={{ time: '21:00', temperature: '10°C', imgIcon: " " }} />,
        <CardHour key={Math.random()} props={{ time: '22:00', temperature: '10°C', imgIcon: " " }} />,
        <CardHour key={Math.random()} props={{ time: '23:00', temperature: '10°C', imgIcon: " " }} />,
        <CardHour key={Math.random()} props={{ time: '24:00', temperature: '10°C', imgIcon: " " }} />,
        <CardHour key={Math.random()} props={{ time: '01:00', temperature: '10°C', imgIcon: " " }} />,
        <CardHour key={Math.random()} props={{ time: '02:00', temperature: '10°C' }} />
    ]
    const startWeekCards = [
        <CardWeek key={Math.random()} props={{ day: 'Завтра,', number: '', month: '', temp: '10°C', perceivedtemp: '4°C', imgIcon: " " }} />,
        <CardWeek key={Math.random()} props={{ day: 'Пн,', number: '15', month: 'Мар', temp: '10°C', perceivedtemp: '4°C', imgIcon: " " }} />,
        <CardWeek key={Math.random()} props={{ day: 'Вт,', number: '16', month: 'Мар', temp: '10°C', perceivedtemp: '4°C', imgIcon: " " }} />,
        <CardWeek key={Math.random()} props={{ day: 'Ср,', number: '17', month: 'Мар', temp: '10°C', perceivedtemp: '4°C', imgIcon: " " }} />,
        <CardWeek key={Math.random()} props={{ day: 'Чт,', number: '18', month: 'Мар', temp: '10°C', perceivedtemp: '4°C', imgIcon: " " }} />,
        <CardWeek key={Math.random()} props={{ day: 'Пт,', number: '19', month: 'Мар', temp: '10°C', perceivedtemp: '4°C', imgIcon: " " }} />,
        <CardWeek key={Math.random()} props={{ day: 'Сб,', number: '20', month: 'Мар', temp: '10°C', perceivedtemp: '4°C', imgIcon: " " }} />
    ]
    //////*    обработка кнопок слайдера*///////
    const [leftBtnSlider, setLeftBtnSlider] = useState({ opacity: 0.2, transform: 'rotate(180deg)' })
    const [rightBtnSlider, setRightBtnSlider] = useState({})
    const [hourCount, setHourCount] = useState(0);
    const [weekCount, setWeekCount] = useState(0);
    const [hourOrWeek, setHourOrWeek] = useState(true);


    function leftBtnSlide() {
        setLeftBtnSlider(() => {
            return {
                opacity: 1,
                transform: 'rotate(180deg)'
            }
        });

        if (hourOrWeek === false) {
            /////левая кнопка ХОУР
            setRightBtnSlider(() => {
                return {
                    opacity: 1
                }
            })
            console.log(hourCount + 'hourCount')
            if (hourCount === 0) {
                setLeftBtnSlider({
                    pointerEvents: 'none',
                    opacity: .2,
                    transform: 'rotate(180deg)'
                })

            } else { //////////////////// слайдер в лево hour
                let itemLeftHourArr = Object.assign([], hourArr);/// добавляем в начало 
                let item = itemLeftHourArr.splice(-1, 1)[0]
                itemLeftHourArr.splice(0, 0, item)
                setHourCount(hourCount - 1)
                setHourArr(itemLeftHourArr)

            }
        } else {
            setNumChange('');
            setNumChangeNum(2);
            setMonthChange(2);
            setDayChange(0);
            /////левая кнопка ВИИК
            setRightBtnSlider(() => {
                return {
                    opacity: 1
                }
            })
            console.log(weekCount + 'weekCount')
            if (weekCount === 0) {
                setLeftBtnSlider({
                    pointerEvents: 'none',
                    opacity: .2,
                    transform: 'rotate(180deg)'
                })
                setRightBtnSlider({ opacity: 1 })
            } else {//////////////////// слайдер в лево week
                let itemLeftWeekArr = Object.assign([], weekArr);/// добавляем в начало 
                let item = itemLeftWeekArr.splice(-1, 1)[0]
                itemLeftWeekArr.splice(0, 0, item)
                setWeekCount(weekCount - 1)
                setWeekArr(itemLeftWeekArr)

            }
        }
    };



    function rightBtnSlide() {
        setLeftBtnSlider(() => {
            return {
                opacity: 1,
                transform: 'rotate(180deg)'
            }
        });

        if (hourOrWeek === false) {

            ////правая кнопка ХОУР')
            if (hourCount === 11) {
                setRightBtnSlider({ pointerEvents: 'none', opacity: .2 })
            } else {
                //////////////////// слайдер в право hour
                let itemRightHourArr = Object.assign([], hourArr);/// убираем первый Hour элемент в конец 
                let item = itemRightHourArr.splice(0, 1)[0];
                itemRightHourArr.splice(itemRightHourArr.length, 1, item);
                setHourCount(hourCount + 1)
                setHourArr(itemRightHourArr)
                //////////
                console.log(hourCount + 'hourCount')
            }
        } else {
            ////парвая кнопка ВИИК')
            setNumChange(new Date().getDate() + 2);
            setNumChangeNum(3);
            setMonthChange(1);
            setDayChange(-1);
            if (weekCount === 1) {
                setRightBtnSlider({ pointerEvents: 'none', opacity: .2 })
            } else {
                //////////////////// слайдер в право week
                let itemRightWeekArr = Object.assign([], weekArr);/// убираем первый Week элемент в конец 
                let item = itemRightWeekArr.splice(0, 1)[0];
                itemRightWeekArr.splice(itemRightWeekArr.length, 1, item);
                setWeekCount(weekCount + 1)
                setWeekArr(itemRightWeekArr)
                //////////
                console.log(weekCount + 'weekCount')
            }
        }
    }




    return (
        <>
            <div className="forecast-container">
                <div className="forecast-nav">
                    <h3 className="forecast-nav-title title">Прогноз</h3>
                    <span className="forecast-by-week forecast-by-week__before" style={weekBtnState} onClick={byWeekBtn}>на неделю</span>
                    <span className="forecast-by-hour" style={hourBtnState} onClick={byHourBtn} >почасовой</span>
                </div>

                <div className="forecast-cards">

                    <CardsSliderBtn props={linkState} style={leftBtnSlider} onClick={leftBtnSlide} />

                    <div className="forecast-cards-hour" style={displaySecond}>
                        {hourArr[0] !== undefined && preloadState === true ? hourArr.map(el => {
                            return (
                                <CardHour key={Math.random()}
                                    props={{
                                        time: el.dt_txt.slice(11, 16),
                                        temperature: Math.round(el.main.temp) + '°C',
                                        imgIcon: el.weather[0].icon
                                    }} />
                            )
                        }) : startHourCards.map(el => el)
                        }

                    </div>

                    <div className="forecast-cards-week" style={displayFirst}>


                        {weekArr[0] !== undefined && preloadState === true ? weekArr.map(el => {
                            return (
                                <CardWeek key={Math.random()}
                                    props={{

                                        day: getDay(),
                                        number: getNumDay(),
                                        month: getMonth(),
                                        temp: Math.round(el.main.temp) + '°C',
                                        perceivedtemp: Math.round(el.main.feels_like) + '°C',
                                        imgIcon: el.weather[0].icon
                                    }} />
                            )
                        }) : startWeekCards.map(el => el)
                        }
                    </div>
                    <CardsSliderBtn props={linkState} style={rightBtnSlider} onClick={rightBtnSlide} />
                </div>
            </div>
        </>
    )
}
function mapStateToProps(state) {
    return { boxState: state }

}

export default connect(mapStateToProps)(ForeCast);