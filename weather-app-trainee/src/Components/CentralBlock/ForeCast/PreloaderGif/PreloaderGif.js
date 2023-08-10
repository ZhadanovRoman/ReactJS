import './preloader-gif.css'
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
function PreloaderGif(preloaderState) {
    let preloaderBoolian = preloaderState.boxState.preloadState;
    const [cardPreloader, setCardPreloader] = useState({});

    useEffect(() => {


        if (preloaderBoolian === true) {
            setCardPreloader(() => {

                return {
                    display: 'none'
                }
            })
        } else {
            setCardPreloader(() => {
                return {
                    dislay: 'inline-block'
                }
            })
        }
    }, [preloaderBoolian])

    return (
        <div className="lds-ellipsis" style={cardPreloader}><div style={cardPreloader}></div><div></div><div></div><div></div></div>
    )
};
function mapStateToProps(state) {

    return { boxState: state }

}
export default connect(mapStateToProps)(PreloaderGif);