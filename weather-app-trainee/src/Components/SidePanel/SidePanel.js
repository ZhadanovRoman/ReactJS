import React, { useState } from 'react';

import './side-panel.css';

import { useDispatch } from 'react-redux';
import { btnsSwipperState } from '../../action';


function SidePanel() {

    const dispatch = useDispatch();
    const [searchOpen, setSearchOpen] = useState({});
    const [isOpen, setIsOpen] = useState(true);
    //const [buttonSwiper, setButtonSwiper] = useState({});
    const [buttonThemeChange, setButtonThemeChange] = useState({});
    const [containerBg, setContainerBg] = useState({});

  // dispatch(btnsSwipperState(buttonSwiper));

    function menuOpen() {
        setSearchOpen(() => {
            return {
                visibility: 'visible',
                left: '0px'
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
            dispatch(btnsSwipperState('./img/active-dark.svg' ));
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
                    left: '3%',
                    background: 'var(--gray48)'
                }
            })
            dispatch(btnsSwipperState('./img/active.svg' ));

        }

    }


    return (

        <>

            <section className="sideP">
                <div className="sideP-container" style={containerBg}>
                    <button onClick={menuOpen} className="sideP-btn" tabIndex="1">Поиск города</button>

                    <label className="sideP-check" htmlFor="check">
                        <input type="checkbox" class="sideP-check-inpt" />
                        <div className="sideP-check-box" onClick={themeDarkOn}>
                            <div className="sideP-check-circle" style={buttonThemeChange}>
                                <img src="./img/moon.svg" alt="checkbox button" />
                            </div>

                        </div>
                    </label>



                    <img className="sideP-precipitation-img" src="./img/snow.svg" alt="snow" />

                    <div className="sideP-temperature">
                        <span className="sideP-temperature-num">1</span>
                        <span className="sideP-temperature-celsius">°C</span>
                    </div>
                    <h2 className="sideP-precipitation-text">Снег</h2>
                    <p className="sideP-temperature-feel">Ощущается как
                        <span className="temperature-feel-num">-3</span>
                        <span className="temperature-feel-celsius">°C</span>
                    </p>
                    <div className="sideP-day-date">
                        <span className="sideP-day">Сегодня</span>
                        <div className="sideP-date">
                            <span className="sideP-date-week">Вс,</span>
                            <span className="sideP-date-num">13</span>
                            <span className="sideP-date-month">мар</span>
                        </div>
                    </div>
                    <div className="sideP-location">
                        <img className="sideP-location-img" src="./img/location-on.svg" alt="location" />
                        <span className="sideP-location-city">Москва</span>
                    </div>
                </div>

                <div className="sideP-second-container" style={searchOpen} >
                    <div className="sideP-close-block" tabIndex="2" onClick={menuClose}>
                        <span className="sideP-btn-close"></span>
                        <span className="sideP-btn-close2"></span>
                    </div>
                    <div className="sideP-search-block">
                        <input className="sideP-input" tabIndex="3" />
                        <button className="sideP-btn-search" tabIndex="4">Найти</button>
                    </div>
                </div>

            </section>
        </>
    )


}
export default SidePanel;