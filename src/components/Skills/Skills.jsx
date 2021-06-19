import './Skills.css'
import React from 'react'
import Header from '../Header/Header'
import FooterLink from '../FooterLink/FooterLink'
import skillVector from '../../assets/skills_vector.png'
import { skillList } from '../../assets/skillsData'
import SkillCard from './SkillCard'

const Skills = () => {
    return (
        <div className="section-container">
            <Header
                heading="My Skills"
                details="Loves to learn more Technologies and Develop more Skills. This is the tech stack I've worked with!"
            />
            <div className="skill-card-container">
                {
                    skillList.map((skill) =><SkillCard skillName={skill.skillName} skillUrl={skill.skillUrl} />)                
                }
            </div>
            <FooterLink phrase="Connect me " link="here." toAddress="/contact"></FooterLink>
            <div className="skills-vector-frame">
                <img src={skillVector} alt="skills" className="skills-vector" />
            </div>
        </div>
    )
}

export default Skills
