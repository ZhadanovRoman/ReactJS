import '../fore-cast.css';
import { useState, useEffect } from 'react';
import PreloaderGif from '../PreloaderGif/PreloaderGif';
import { connect } from 'react-redux';

function CardHour(props) {

    let bgIcon = props.props.imgIcon

    let preloaderState = props.boxState.preloadState;
    const [cardText, setCardText] = useState({});
    const [cardIcon, setCardIcon] = useState('');
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (preloaderState === false) {
            setCardText(() => {
                return {
                    visibility: 'hidden'
                }
            });
        } else {
            setCardText(() => {
                return {
                    visibility: 'visible'
                }
            })
        }
        setShow(s => !s);

        setCardIcon(() => {

            return {
                backgroundImage: `url(https://openweathermap.org/img/wn/${bgIcon}@2x.png)`
            }
        })
    }, [preloaderState, bgIcon])







    return (
        <div style={show ? cardIcon : {}} className={show ? "forecast-card-hour" : "forecast-card-fake"}>
            <span className="card-hour-time" style={cardText}>{props.props.time}</span>
            <PreloaderGif /><span className='forecast-card-hour_after'></span>
            <span className="card-hour-temperature" style={cardText}>{props.props.temperature}</span>
        </div>
    )

}

function mapStateToProps(state) {
    return { boxState: state }
}
export default connect(mapStateToProps)(CardHour);