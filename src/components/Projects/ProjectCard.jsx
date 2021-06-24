import './Projects.css'

import React, { useState } from 'react'
import parse from 'html-react-parser'
import Modal from '../Modal/Modal'

const ProjectCard = ({ projectName, projectDescription, imageUrl, videoUrl, projectUrl, technologyStack }) => {
    const [showFull, setShowFull] = useState(false)
    const [showModal, setshowModal] = useState(false)
    const closeModal = () => {
        setshowModal(false)
    }
    const techStack = <div>Tech Stack:{
        technologyStack.map((tech, index) => {
            return <span key={index} className="tech-span">{tech}</span>
        })}</div>


    const [modalData, setModalData] = useState({ "modalTitle": projectName, "modalBodyPara1": parse(projectDescription), "modalBodyPara2": projectUrl + (videoUrl ? '\n' + videoUrl : ''), "modalSubTitle": techStack })
    const { modalTitle, modalSubTitle, modalBodyPara1, modalBodyPara2 } = modalData

    return (
        <div className="project-card">
            {/* Modal for detailed view */}
            {showModal && <Modal closeModal={closeModal} modalTitle={modalTitle} modalSubTitle={modalSubTitle} modalBodyPara1={modalBodyPara1} modalBodyPara2={modalBodyPara2} />}


            <a href={projectUrl} className="project-external-link" target="_blank" rel="noreferrer">
                <div className="image-container">
                    <img src={imageUrl} alt="" className="project-image" />
                </div>
            </a>
            <div className="project-details-container">
                <h3 className="project-heading">{projectName}</h3>
                {/* 
                <p className="techStack">Tech Stack: &nbsp;
                    {techStack}
                </p> */}
                <p className={showFull ? "project-details" : "project-details-line-clamp"}>{parse(projectDescription)}</p>
                {/* <a style={{ textDecoration: "underline", color: "blue", cursor: "pointer", marginTop: "-20px" }} onClick={() => setShowFull(!showFull)}>{showFull ? "Hide" : <p>See More</p>}</a> */}
                <span className="link" style={{ marginTop: "-10px" }} onClick={() => setshowModal(true)}>More Details</span>


                {
                    videoUrl != null
                    &&
                    <a href={videoUrl} className="project-yt-link">
                        Watch it!
                    </a>
                }
            </div>
        </div>
    )
}

export default ProjectCard
