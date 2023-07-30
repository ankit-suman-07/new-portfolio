import React from "react";
import "../css/ProjectsCard.css";

const ProjectsCard = ({ name, id, url, featured, skills, desc, image }) => {
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "20%", // Adjust backgroundSize as per your requirement
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    // opacity: 0.6,
  };

  return (
    <>
      <a href={url} target="_blank">
        <div className="background-div" style={backgroundStyle}>
          <div className="project-card">
            <span className="project-name">{name}</span>
            <span className="project-desc">{desc}</span>
            <span className="project-skills">{skills}</span>
            <button className="project-btn">Demo</button>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProjectsCard;
