import React from "react";
import {Link } from "react-router-dom";
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
                            <ProjectsCard id={idx} name={project.name}  url={project.url} featured={project.featured} skills={project.skills} desc={project.description} image={project.background} />
                        );
                    }
                    else {
                        return null;
                    }
                    
                })}
            </div>
            <div className="all-projects-link"  >
                <Link exact to="/projects" className="bottom-link" >All Projects &gt;&gt;&gt; </Link>
            </div>
            
        </div>
    );
};

export default Featured;