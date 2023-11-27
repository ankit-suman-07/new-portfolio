import React, { useState, useRef, useEffect } from "react";
import ProjectsCard from "../components/ProjectsCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ProjectList } from '../helper/ProjectList';
import "../css/Projects.css";

const Projects = () => {
    const [filter, setFilter] = useState("all");
    const [activeButton, setActiveButton] = useState("all");

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setActiveButton(newFilter);
    };

    const topRef = useRef(null);

  // Scroll to the top when the component mounts
  useEffect(() => {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

    return (
        <div id="top" ref={topRef} >
            <Navbar />
            <div className="projects"  >
            <div className="projects-search" >
            <button
                    className={activeButton === "all" ? "active-filter" : "all"}
                    onClick={() => handleFilterChange("all")}
                >
                    All
                </button>
                <button
                    className={activeButton === "clone" ? "active-filter" : "clone"}
                    onClick={() => handleFilterChange("clone")}
                >
                    Clone
                </button>
                <button
                    className={activeButton === "react" ? "active-filter" : "react"}
                    onClick={() => handleFilterChange("react")}
                >
                    React
                </button>
                <button
                    className={activeButton === "game" ? "active-filter" : "game"}
                    onClick={() => handleFilterChange("game")}
                >
                    Games
                </button>
                <button
                    className={activeButton === "css" ? "active-filter" : "css"}
                    onClick={() => handleFilterChange("css")}
                >
                    CSS
                </button>
            </div>
            <div className="projects-list" >
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
            
            </div>
            <Footer />
        </div>
    );
};

export default Projects;