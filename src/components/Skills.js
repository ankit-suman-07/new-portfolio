import React from 'react';
import "../css/Skills.css";

import NextIcon from "../assets/skills/next.png";
import ReactIcon from "../assets/skills/react.png";
import ReduxIcon from "../assets/skills/redux.png";
// import JestIcon from "../assets/skills/jest.png";
import NodeIcon from "../assets/skills/nodejs.png";
import FirebaseIcon from "../assets/skills/firebase.png";
import MongoDBIcon from "../assets/skills/mongodb.png";
// import BabelIcon from "../assets/skills/babel.png";
// import WebpackIcon from "../assets/skills/webpack.png";
import LinuxIcon from "../assets/skills/linux.png";
import GitIcon from "../assets/skills/github.png";
import PythonIcon from "../assets/skills/python.png";
import JavaIcon from "../assets/skills/java.png";
import DSAIcon from "../assets/skills/dsa.png";
import CSSIcon from "../assets/skills/css.png";
import HTMLIcon from "../assets/skills/html.png";

export const Skills = () => {
    // const skillset = ["Next.js", "React.js", "Redux", "Jest", "Node.js", "Firebase", "MongoDB", "Babel", "Webpack", "Linux", "Git & Github", "Python", "Java", "Data Structures", "CSS", "HTML"];
    // const skillimage = [NextIcon, ReactIcon, ReduxIcon, JestIcon, NodeIcon, FirebaseIcon, MongoDBIcon, BabelIcon, WebpackIcon, LinuxIcon, GitIcon, PythonIcon, JavaIcon, DSAIcon, CSSIcon, HTMLIcon];

    const skillset = ["Next.js", "React.js", "Redux", "Node.js", "Firebase", "MongoDB", "Linux", "Git & Github", "Python", "Java", "Data Structures", "CSS", "HTML"];
    const skillimage = [NextIcon, ReactIcon, ReduxIcon, NodeIcon, FirebaseIcon, MongoDBIcon, LinuxIcon, GitIcon, PythonIcon, JavaIcon, DSAIcon, CSSIcon, HTMLIcon];
    return (
    <div className='skills-comp' >
        <div className="skills-heading" >
                Skills
        </div>
        <div className='skills-list' >
        {
            skillset.map((skill, idx) => {
                return(
                    <div className='skill-box' >
                        <div className='skill-header' >
                            {skill}
                        </div>
                        <div className='skill-image' >
                            <img src={skillimage[idx]}  alt={skill} />
                        </div>
                    </div>
                    );
            })
        }
        </div>
        
    </div>
  )
}
