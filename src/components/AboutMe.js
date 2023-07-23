import React from "react";
import "../css/AboutMe.css";

const AboutMe = () => {
    const data = [
        {
            heading : "Certification - Ongoing",
            name : "Full Stack Development Bootcamp - JavaScript",
            institute : "Organisation : upGrad",
            degree : "Certificate by : Golden Gate University",
            coursework : "ReactJS, NodeJS, MongoDB, Redux, System Design",
            timeline : "27th March, 23 - 26th Sept., 23",
        },
        {
            heading : "Education",
            name : "B.E. (Computer Science)",
            institute : "Sahyadi College of Engineering & Management",
            degree : "Degree by - Visvesvaraya Technological University",
            coursework : "DSA, DBMS, OS, Computer Networks, ML",
            timeline : "2017 - 2021",
        },
    ];
    const skills = [
        {
            heading : "Tech Skills",
            skill_1 : "ReactJS, Firebase",
            skill_2 : "Git & GitHub, Linux",
            skill_3 : "JavaScript, CSS, HTML",
            skill_4 : "Python, Java, C++",
        },
        {
            heading : "Soft Skills",
            skill_1 : "Team Player",
            skill_2 : "Time Management, Leadership Quality",
            skill_3 : "Adaptability, Communication",
            skill_4 : "Creativity",
        },
        // {
        //     heading : "Hobbies",
        //     skill_1 : "Team Player",
        //     skill_2 : "Time Management, Leadership Quality",
        //     skill_3 : "Adaptability, Communication",
        //     skill_4 : "Creativity",
        // },
    ];
    return (
        <div className="about">
            {
            data.map((e, index) => (
                <div key={index} className="about-card">
                    <span className="header">{e.heading}</span>
                    <span className="name">{e.name}</span>
                    <span className="institute" >{e.institute}</span>
                    <span className="degree" >{e.degree}</span>
                    <span className="coursework" >{e.coursework}</span>
                    <span className="time" >{e.timeline}</span>
                </div>
            ))
            }
            {
            skills.map((e, index) => (
                <div key={index} className="about-card">
                    <span className="header">{e.heading}</span>
                    <span className="skill">{e.skill_1}</span>
                    <span className="skill" >{e.skill_2}</span>
                    <span className="skill" >{e.skill_3}</span>
                    <span className="skill" >{e.skill_4}</span>
                </div>
            ))
            }
        </div>
    );
};

export default AboutMe;