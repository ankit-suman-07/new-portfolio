import React from "react";
import "../css/ProjectsCard.css";

const ProjectsCard = ({  name, id, url, featured, skills, desc}) => {
    
    return (
        <>
        <a href={url}  target="_blank" >
            <div className="project-card" >
                <span className="project-name" >{ name }</span>
                <span className="project-desc" >{ desc }</span>
                <span className="project-skills" >{ skills }</span>
                <button className="project-btn" >Demo</button>    
            </div>
        </a>
        </>
    );
};

export default ProjectsCard;