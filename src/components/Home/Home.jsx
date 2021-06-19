import React, { useEffect, useState } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

import homeAnime from '../../assets/home_anime.gif'
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
            {showModal && <Modal closeModal={closeModal} />}
            <div className="header-text">
                <h1>Hi, I'm Raviteja</h1>
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
            <div className="splash-image">
                <img src={homeAnime} alt="" className="home-anime" />
            </div>
        </div>
    )
}

export default Home
