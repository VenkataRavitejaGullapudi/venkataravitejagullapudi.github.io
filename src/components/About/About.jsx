import React from 'react'
import './About.css'
import aboutVector from '../../assets/about_vector.png'
import Header from '../Header/Header'
import FooterLink from '../FooterLink/FooterLink'
import aboutAnime from '../../assets/about_anime.gif'

const about_me = "Associate Software Engineer | Full Stack Developer | Smart India Hackathon 2k19 Grand finale Finalist."
const title_descs = [
    {
        "title": "Software Engineer, Associate",
        "desc": "Working as Software Engineer, Associate at Infor since October 2020."
    },
    {
        "title": "Full Stack Developer",
        "desc": "Developing Applications is my passion and I completely dedicate myself to it. I have built many apps with different technologies that include both frontend and backend.",
        "link":"mailto:ravitejagullapudi@gmail.com",
        "link_text":"Hire me"
    },
    {
        "title": "Smart India Hackathon Finalist",
        "desc": "Got selected and acheived 2nd Runner-Up Award in Ministry of Textiles through the Smart India Hackathon Grand Finale 2k19 (A 36 Hours Hackathon)."
    }
]

const About = () => {
    return (
        <div className="section-container">
            <Header
                heading="About me"
                details={about_me}
            />
            <div className="about-main">
                <div className="about-main-left">
                    <div className="about-head">
                    {/* Sub sections */}
                    {
                        title_descs.map((obj,index) => {
                            return <React.Fragment key={index}>
                                <h3 className="about-sub-head">{obj.title}</h3>
                                <p className="about-details">
                                        {obj.desc}
                                <br/>
                                {
                                    (obj.link && obj.link_text)&&
                                        <a className="about-link-element"
                                            href={obj.link}
                                        >{obj.link_text}</a> 
                                }
                                </p>
                            </React.Fragment>
                        })
                    }
                    </div>
                </div>
                <div className="about-main-left">
                    <img className="about-anime" alt="About Animation" src={aboutAnime}/>
                </div>
            </div>
            <FooterLink
                phrase="Checkout my "
                link="Projects..!"
                toAddress="/projects" />
            {/* Vector frame */}
            <div className="vector-frame">
                <img src={aboutVector} alt="about" className="about-vector" />
            </div>
        </div>
    )
}

export default About
