import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import homeIconWhite from '../../assets/home_white.png'
import homeIconBlack from '../../assets/home_black.png'
import './GoHome.css'

const GoHome = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'
    // Just using to check the usage of the history object
    const history = useHistory()
    function GoToHome() {
        history.push('/')
    }
    return (
        <button onClick={GoToHome}
            className={`go-home-btn ${isHome ? 'white-bg' : 'gradient-bg'
                }`}>
            <img
                className="home-icon"
                src={isHome ? homeIconBlack : homeIconWhite}
                alt='home-icon'
            />

        </button>
    )
}

export default GoHome
