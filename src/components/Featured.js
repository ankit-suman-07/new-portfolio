import React, { useState } from "react";
import ProjectsCard from "../components/ProjectsCard";
import { ProjectList } from '../helper/ProjectList';
import "../css/Featured.css";

const Featured = () => {
    const filter = "featured";

    return (
        <div className="featured" >
            <div className="featured-heading" >
                Featured Projects
            </div>
            <div className="featured-list" >
                {
                    
                ProjectList.map((project, idx) => {
                    if ((project.tag).includes(filter)) {
                        return (
                            <ProjectsCard id={idx} name={project.name}  url={project.url} featured={project.featured} skills={project.skills} desc={project.description} />
                        );
                    }
                    
                })}
            </div>
            
        </div>
    );
};

export default Featured;