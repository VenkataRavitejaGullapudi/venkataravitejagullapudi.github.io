import './Projects.css'

import React, { useState } from 'react'

const ProjectCard = ({ projectName, projectDescription, imageUrl, videoUrl, projectUrl }) => {
    const [showFull, setShowFull] = useState(false)
    return (
        <div className="project-card">
            <a href={projectUrl} className="project-external-link">
                <div className="image-container">
                    <img src={imageUrl} alt="" className="project-image" />
                </div>
            </a>
            <div className="project-details-container">
                <h2 className="project-heading">{projectName}</h2>
                <p className={showFull?"project-details":"project-details-line-clamp"}>{projectDescription}</p>
                <a style={{ textDecoration: "underline", color: "blue", cursor: "pointer",marginTop:"-20px" }} onClick={() => setShowFull(!showFull)}>{showFull ? "Hide" : <p>See More</p>}</a>
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
