import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../css/About.css";

import FSD from "../assets/certificates/fsd.png";
import Resume from "../assets/certificates/resume.png";
import Walmart from "../assets/certificates/walmart.png";

const About = () => {
    return (
        <>
            <Navbar />
            <div className='about-me' >
                <div className='fsd' >
                    <div className='about-title' >
                        Certificates
                    </div>
                    <img src={FSD} alt='fsd-certificate' />
                    <img src={Walmart} alt='wallmart-certificate' />
                </div>
                <div className='about-desc' >
                    <div className='about-title' >
                        About Me
                    </div>
                    <p>Computer Science graduate with a passion for coding and web development,
                        I am excited to explore opportunities to apply my skills and grow as a software developer.
                        Throughout my studies, I have gained experience in various programming languages including Python, Java, and JavaScript.
                        My focus has been on Fullstack web development using MERN stack.</p>

                    <p>I have worked on several Fullstack personal projects using various stacks such as a Notes App, using PERN stack, that allows
                        users to add, view, edit and delete the notes details. Another project is GameIt - A Game Listing App based on the design
                        and functionalities of Netflix.This project was based on MERN stack. I have worked on several other Fullstack projects in order to
                        get more handon experience in all of these technologies.</p>


                    <p>I am a motivated and detail-oriented individual with a strong desire to learn and improve continuously.
                        I am eager to contribute to a dynamic team of developers and collaborate on projects that solve real-world problems.
                        I am a fast learner and an excellent problem solver, and I am looking forward to the opportunity to learn
                        new technologies and techniques.</p>

                    <p>I am open to exploring opportunities in software development, web development, and related fields.
                        If you're looking for a dedicated and enthusiastic developer to join your team, please feel free to connect with me.
                        I am excited about the prospect of contributing to innovative projects and making a positive impact in the tech industry.</p>
                </div>
                <div className='resume-div' >
                    <div className='about-title' >
                        Resume
                    </div>
                    <img src={Resume} alt='resume' />
                </div>

                {/* <img src={Walmart} alt='wallmart-certificate' />
                <img src={SkyScanner} alt='skyscanner-certificate' />
                <img src={GoldMann} alt='goldmnann-certificate' /> */}
            </div>
            <Footer />
        </>
    )
}

export default About