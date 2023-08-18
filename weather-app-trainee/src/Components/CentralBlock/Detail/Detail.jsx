import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import HumidityScale from './HumidityScale/HumidityScale';
import './detail.css';


function Detail(props) {
    const weatherData = props.boxState.cityData

    const [windDirection, setWindDirection] = useState({});
    const [windDirectionSpan, setWindDirectionSpan] = useState('СЗ');

    

    const [windNum, setWindNum] = useState('7');
    const [humidityNum, setHumidityNum] = useState('84')
    const [visibilityNum, setVisibilityNum] = useState('6.2')
    const [pressureNum, setPressureNum] = useState('742')
    useEffect(() => {
        if (weatherData.wind) {
            setWindNum(Math.round(weatherData.wind.speed));
            setHumidityNum(weatherData.main.humidity);
            setVisibilityNum(weatherData.visibility / 1000);
            setPressureNum(Math.round(weatherData.main.pressure * 0.75));

            setWindDirection(()=>{
                return{
                    transform: 'rotate('+(45+weatherData.wind.deg)+'deg)'
            }
          })
          if(Number(weatherData.wind.deg)>350 || Number(weatherData.wind.deg)<10 ){setWindDirectionSpan('C')};
          if(Number(weatherData.wind.deg)>10 && Number(weatherData.wind.deg)<80 ){setWindDirectionSpan('CВ')};
          if(Number(weatherData.wind.deg)>80 && Number(weatherData.wind.deg)<100 ){setWindDirectionSpan('В')};
          if(Number(weatherData.wind.deg)>100 && Number(weatherData.wind.deg)<170 ){setWindDirectionSpan('ЮВ')};
          if(Number(weatherData.wind.deg)>170 && Number(weatherData.wind.deg)<190 ){setWindDirectionSpan('Ю')};
          if(Number(weatherData.wind.deg)>190 && Number(weatherData.wind.deg)<260 ){setWindDirectionSpan('ЮЗ')};
          if(Number(weatherData.wind.deg)>260 && Number(weatherData.wind.deg)<280 ){setWindDirectionSpan('З')};
          if(Number(weatherData.wind.deg)>280 && Number(weatherData.wind.deg)<350 ){setWindDirectionSpan('ЮВ')}
        } else { };
       
    }, [weatherData])


    return (
        <>
            <div className="detail">
                <h3 className="detail-title title">Подробно на сегодня</h3>
                <div className="detail-first-row">
                    <div className="detail-wind-block">
                        <h4 className="detail-block-title first-row-title">Скорость ветра</h4>
                        <div className="detail-block-data">
                            <span className="block-data-number">{windNum}</span>
                            <span className="block-data-text">м/с</span>
                        </div>
                        <div className="block-wind-direction">
                            <img src="./img/directionWind.svg" style={windDirection} alt="direction of wind" />
                            <span className="wind-direction-span">{windDirectionSpan}</span>
                        </div>
                    </div>
                    <div className="detail-humidity-block">
                        <h4 className="detail-block-title first-row-title">Влажность</h4>
                        <div className="detail-block-data">
                            <span className="block-data-number">{humidityNum}</span>
                            <span className="block-data-text">%</span>
                        </div>
                        <HumidityScale props={humidityNum} />
                    </div>
                </div>
                <div className="detail-second-row">
                    <div className="detail-visibility-block">
                        <h4 className="detail-block-title second-row-title">Видимость</h4>
                        <div className="detail-block-data">
                            <span className="block-data-number">{visibilityNum}</span>
                            <span className="block-data-text">км</span>
                        </div>
                    </div>
                    <div className="detail-pressure-block">
                        <h4 className="detail-block-title second-row-title">Давление</h4>
                        <div className="detail-block-data">
                            <span className="block-data-number">{pressureNum}</span>
                            <span className="block-data-text data-text-pressure">мм рт.ст.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
function mapStateToProps(state) {
    return { boxState: state }

}
export default connect(mapStateToProps)(Detail);