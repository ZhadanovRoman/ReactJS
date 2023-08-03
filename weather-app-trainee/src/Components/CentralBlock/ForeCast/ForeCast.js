import { useState } from 'react';

import './fore-cast.css';
import { connect } from "react-redux";

function ForeCast(btnLink) {
    let linkState = btnLink.btnState.btnSwip;

    const [weekBtnState, setWeekBtnState] = useState({});
    const [hourBtnState, setHourBtnState] = useState({});
    const [displayFirst, setDisplayFirst] = useState({});
    const [displaySecond, setDisplaySecond] = useState({});

    function byWeekBtn() {
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
    }

    function byHourBtn() {
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

                    <span className="cards-left-btn" tabIndex="7" >
                        <img className='left-btn-img' src={linkState} alt="slider button" />
                    </span>
                    <div className="forecast-cards-hour" style={displaySecond}>

                        <div className="forecast-card-hour">
                            <span className="card-hour-time">15:00</span>
                            <span className="card-hour-temperature">10°C</span>
                        </div>

                        <div className="forecast-card-hour">
                            <span className="card-hour-time">16:00</span>
                            <span className="card-hour-temperature">10°C</span>
                        </div>

                        <div className="forecast-card-hour">
                            <span className="card-hour-time">17:00</span>
                            <span className="card-hour-temperature">10°C</span>
                        </div>

                        <div className="forecast-card-hour">
                            <span className="card-hour-time">18:00</span>
                            <span className="card-hour-temperature">10°C</span>
                        </div>

                        <div className="forecast-card-hour">
                            <span className="card-hour-time">19:00</span>
                            <span className="card-hour-temperature">10°C</span>
                        </div>

                        <div className="forecast-card-hour">
                            <span className="card-hour-time">20:00</span>
                            <span className="card-hour-temperature">10°C</span>
                        </div>


                        <div class="forecast-card-hour">
                            <span className="card-hour-time">21:00</span>
                            <span className="card-hour-temperature">10°C</span>
                        </div>

                        <div className="forecast-card-hour">
                            <span className="card-hour-time">22:00</span>
                            <span className="card-hour-temperature">10°C</span>
                        </div>

                        <div class="forecast-card-hour">
                            <span className="card-hour-time">23:00</span>
                            <span className="card-hour-temperature">10°C</span>
                        </div>

                        <div className="forecast-card-hour">
                            <span className="card-hour-time">24:00</span>
                            <span className="card-hour-temperature">10°C</span>
                        </div>

                        <div class="forecast-card-hour">
                            <span className="card-hour-time">01:00</span>
                            <span className="card-hour-temperature">10°C</span>
                        </div>

                        <div className="forecast-card-hour">
                            <span className="card-hour-time">02:00</span>
                            <span className="card-hour-temperature">10°C</span>
                        </div>

                    </div>

                    <div className="forecast-cards-week" style={displayFirst}>

                        <div className="forecast-card-week">
                            <div className="card-week-date">
                                <span className="card-week-day">Завтра</span>
                                <span className="card-week-number"></span>
                                <span className="card-week-month"></span>
                            </div>
                            <div class="card-week-temperature">
                                <span className="card-week-temp">10°C</span>
                                <span className="card-week-perceivedtemp">4°C</span>
                            </div>
                        </div>

                        <div className="forecast-card-week">
                            <div className="card-week-date">
                                <span className="card-week-day">Пн</span>
                                <span className="card-week-number">15</span>
                                <span className="card-week-month">Мар</span>
                            </div>
                            <div className="card-week-temperature">
                                <span className="card-week-temp">10°C</span>
                                <span className="card-week-perceivedtemp">4°C</span>
                            </div>
                        </div>

                        <div className="forecast-card-week">
                            <div className="card-week-date">
                                <span className="card-week-day">Вт</span>
                                <span className="card-week-number">16</span>
                                <span className="card-week-month">Мар</span>
                            </div>
                            <div className="card-week-temperature">
                                <span className="card-week-temp">10°C</span>
                                <span className="card-week-perceivedtemp">4°C</span>
                            </div>
                        </div>

                        <div className="forecast-card-week">
                            <div className="card-week-date">
                                <span className="card-week-day">Ср</span>
                                <span className="card-week-number">17</span>
                                <span className="card-week-month">Мар</span>
                            </div>
                            <div className="card-week-temperature">
                                <span className="card-week-temp">10°C</span>
                                <span className="card-week-perceivedtemp">4°C</span>
                            </div>
                        </div>

                        <div className="forecast-card-week">
                            <div className="card-week-date">
                                <span className="card-week-day">Чт</span>
                                <span className="card-week-number">18</span>
                                <span className="card-week-month">Мар</span>
                            </div>
                            <div className="card-week-temperature">
                                <span className="card-week-temp">10°C</span>
                                <span className="card-week-perceivedtemp">4°C</span>
                            </div>
                        </div>

                        <div className="forecast-card-week">
                            <div className="card-week-date">
                                <span className="card-week-day">Пт</span>
                                <span className="card-week-number">19</span>
                                <span className="card-week-month">Мар</span>
                            </div>
                            <div className="card-week-temperature">
                                <span className="card-week-temp">10°C</span>
                                <span className="card-week-perceivedtemp">4°C</span>
                            </div>
                        </div>

                        <div class="forecast-card-week">
                            <div class="card-week-date">
                                <span className="card-week-day">Сб</span>
                                <span className="card-week-number">20</span>
                                <span className="card-week-month">Мар</span>
                            </div>
                            <div class="card-week-temperature">
                                <span className="card-week-temp">10°C</span>
                                <span className="card-week-perceivedtemp">4°C</span>
                            </div>
                        </div>

                    </div>
                    <span className="cards-right-btn" tabIndex="8">
                        <img className="right-btn-img" src={linkState} alt="slider button" />
                    </span>
                </div>
            </div>
        </>
    )
}
function mapStateToProps(state) {
    return { btnState: state }
}

export default connect(mapStateToProps)(ForeCast);