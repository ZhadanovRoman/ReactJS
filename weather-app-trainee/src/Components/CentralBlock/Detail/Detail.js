
import './detail.css';

function Detail(){
    return(
        <>
         <div className="detail">
                <h3 className="detail-title title">Подробно на сегодня</h3>
                <div className="detail-first-row">
                    <div className="detail-wind-block">
                        <h4 className="detail-block-title first-row-title">Скорость ветра</h4>
                        <div className="detail-block-data">
                            <span className="block-data-number">7</span>
                            <span className="block-data-text">м/с</span>
                        </div>
                        <div className="block-wind-direction">
                            <img src="./img/directionWind.svg" alt="direction of wind" />
                            <span className="wind-direction-span">СЗ</span>
                        </div>
                    </div>
                    <div className="detail-humidity-block">
                        <h4 className="detail-block-title first-row-title">Влажность</h4>
                        <div className="detail-block-data">
                            <span className="block-data-number">84</span>
                            <span className="block-data-text">%</span>
                        </div>
                    </div>
                </div>
                <div className="detail-second-row">
                    <div className="detail-visibility-block">
                        <h4 className="detail-block-title second-row-title">Видимость</h4>
                        <div className="detail-block-data">
                            <span className="block-data-number">6.2</span>
                            <span className="block-data-text">км</span>
                        </div>
                    </div>
                    <div class="detail-pressure-block">
                        <h4 className="detail-block-title second-row-title">Давление</h4>
                        <div className="detail-block-data">
                            <span className="block-data-number">742</span>
                            <span className="block-data-text data-text-pressure">мм рт.ст.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail;