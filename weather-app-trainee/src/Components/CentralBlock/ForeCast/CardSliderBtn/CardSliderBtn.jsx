import '../fore-cast.css'

function CardsSliderBtn(props){
   
     return(
                   <span className="cards-right-btn" tabIndex="8" style={props.style} onClick={props.onClick}>
                        <img className="right-btn-img" src={props.props} alt="slider button" />
                    </span>
   )
}

export default CardsSliderBtn;