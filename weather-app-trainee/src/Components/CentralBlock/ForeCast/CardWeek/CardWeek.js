import '../fore-cast.css'
import PreloaderGif from '../PreloaderGif/PreloaderGif';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';


function CardWeek(props) {
    let preloaderState = props.boxState.preloadState;
    const [cardText, setCardText] = useState({})
    const [show, setShow] = useState(false);
    useEffect(() => {
       if(preloaderState===false){ setCardText(() => {
            return {
                visibility: 'hidden'
            }
        });
    }else{
        setCardText(() => {
            return {
                visibility: 'visible'
            }
    })
}
        setShow(s=>!s);
    }, [preloaderState])
    return (
        <div className={show ? "forecast-card-week" : "forecast-card-fake"}>
            <div className="card-week-date">
                <span className="card-week-day" style={cardText}>{props.props.day}</span>
                <span className="card-week-number" style={cardText}>{props.props.number}</span>
                <span className="card-week-month" style={cardText}>{props.props.month}</span>
            </div><PreloaderGif />
            <div className="card-week-temperature">
                <span className="card-week-temp" style={cardText}>{props.props.temp}</span>
                <span className="card-week-perceivedtemp" style={cardText}>{props.props.perceivedtemp}</span>
            </div>
        </div>
    )
}
function mapStateToProps(state) {

    return { boxState: state }

}
export default connect(mapStateToProps)(CardWeek);