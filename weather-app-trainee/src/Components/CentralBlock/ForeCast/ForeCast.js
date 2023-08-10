import { useState } from 'react';

import './fore-cast.css';
import { connect } from "react-redux";
import CardWeek from './CardWeek/CardWeek';
import CardHour from './CardHour/CardHour';

function ForeCast(btnLink) {
  
    let linkState = btnLink.boxState.btnSwip;

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

                        <CardHour props={{time:'15:00',temperature: '10°C' }}/>
                        <CardHour props={{time:'16:00',temperature: '10°C' }}/>
                        <CardHour props={{time:'17:00',temperature: '10°C' }}/>
                        <CardHour props={{time:'18:00',temperature: '10°C' }}/>
                        <CardHour props={{time:'19:00',temperature: '10°C' }}/>
                        <CardHour props={{time:'20:00',temperature: '10°C' }}/>
                        <CardHour props={{time:'21:00',temperature: '10°C' }}/>
                        <CardHour props={{time:'22:00',temperature: '10°C' }}/>
                        <CardHour props={{time:'23:00',temperature: '10°C' }}/>
                        <CardHour props={{time:'24:00',temperature: '10°C' }}/>
                        <CardHour props={{time:'01:00',temperature: '10°C' }}/>
                            <CardHour props={{time:'02:00',temperature: '10°C' }}/>
                        

                    </div>

                    <div className="forecast-cards-week" style={displayFirst}>

                        <CardWeek props={{ day: 'Завтра,', number :'', month :'', temp:'10°C', perceivedtemp:'4°C'}}/>
                        <CardWeek props={{ day: 'Пн,', number :'15', month :'Мар', temp:'10°C', perceivedtemp:'4°C'}}/>
                        <CardWeek props={{day:'Вт,', number:'16', month:'Мар', temp:'10°C', perceivedtemp:'4°C'}}/>
                        <CardWeek props={{ day:'Ср,', number :'17', month :'Мар', temp:'10°C', perceivedtemp:'4°C'}}/>
                        <CardWeek props={{ day:'Чт,', number :'18', month :'Мар', temp:'10°C', perceivedtemp:'4°C'}}/>
                        <CardWeek props={{ day:'Пт,', number :'19', month :'Мар', temp:'10°C', perceivedtemp:'4°C'}}/>
                        <CardWeek props={{day:'Сб,', number:'20', month:'Мар', temp:'10°C', perceivedtemp:'4°C'}}/>
                      

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
    return { boxState: state }
    
}

export default connect(mapStateToProps)(ForeCast);