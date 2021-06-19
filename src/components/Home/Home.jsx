import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

import homeAnime from '../../assets/home_anime.gif'
import profileImage from '../../assets/Ravi.png'
import Modal from '../Modal/Modal'

const Home = () => {
    const [showModal, setshowModal] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setshowModal(true)
        }, 2400)
    }, [])
    const closeModal = () => {
        setshowModal(false)
    }
    return (
        <div className="home-container">
            {/* {showModal && <Modal closeModal={closeModal} />} */}
            <div className="left">
                <div className="header-text">
                    <h1>Hi, I'am Raviteja</h1>
                    <p>A Full Stack Developer by passion and Software Engineer, Associate by Profession</p>
                </div>
                <div className="head-btns">
                    <Link to="/about" className="btn btn-white">
                        <p className="btn-text">Know more about me</p>
                    </Link>
                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-text">Connect with me</p>
                    </Link>
                </div>
            </div>
            <div className="right">
                {/* <img src={homeAnime} alt="" className="home-anime" /> */}
                {/* <div className="splash-image">
                    <svg className="home-anime" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <g color="white">
                        <circle cx="50" cy="50" r="50" fill="currentColor"/>
                        </g>
                    </svg>
                </div>
                    <div className="splash-image">
                        <img src={profileImage} alt="about" className="profile-image" />
                    </div> */}
                <svg className="profile_bg" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0" mask-type="alpha">
                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                    </mask>
                    <g mask="url(#mask0)">
                        <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                        <image xlinkHref={profileImage} x='3' y='-20' className="profile-img" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Home
