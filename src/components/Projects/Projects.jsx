import React from 'react'
import './Projects.css'
import Header from '../Header/Header'
import FooterLink from '../FooterLink/FooterLink'
import projectsData from '../../assets/projectsData'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className="section-container">
            <Header heading="My projects"
                details={<span>These are some of my cool projects I've worked on, do check them out! <br/> <b>Click on the project card to go live into that project..</b></span>}
            />
            <div className="project-cards-container">
                {
                    projectsData.map(({ projectName, projectDescription, imageUrl, videoUrl, projectUrl }) => {
                        return <ProjectCard projectName={projectName} projectDescription={projectDescription} imageUrl={imageUrl} videoUrl={videoUrl} projectUrl={projectUrl}/>
                    })
                }
            </div>
            <FooterLink phrase="Check out "
                link="my skills!"
                toAddress="/skills"
            />
        </div>
    )
}

export default Projects
