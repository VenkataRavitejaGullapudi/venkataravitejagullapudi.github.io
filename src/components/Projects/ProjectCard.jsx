import './Projects.css'

import React from 'react'

const ProjectCard = ({ projectName, projectDescription, imageUrl, videoUrl, projectUrl }) => {

    return (
        <div className="project-card">
            <div className="image-container">
                <a href={projectUrl} className="project-external-link">
                    <img src={imageUrl} alt="" className="project-image" />
                </a>
            </div>
            <div className="project-details-container">
                <h2 className="project-heading">{projectName}</h2>
                <p className="project-details">{projectDescription}</p>
                {
                    videoUrl!=null
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
