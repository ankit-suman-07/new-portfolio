import React from "react";
import Featured from "../components/Featured";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Skills } from "../components/Skills";
import Image from "../assets/profile.png";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";
// import GithubIcon from "@mui/icons-material/GitHub";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from '@mui/icons-material/Twitter';
import DownloadIcon from '@mui/icons-material/Download';

import LinkedIn from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";
import Twitter from "../assets/twitter.png";
import Github from "../assets/github.png";
import Gmail from "../assets/gmail.png";
import LeetCodeIcon from "../assets/leetcode.png";
import "../css/Home.css";

const Home = () => {
    const openPDF = () => {
        const pdfUrl = process.env.PUBLIC_URL + "/pdf/Resume - Ankit Suman.pdf";
        window.open(pdfUrl);
      };
    
    return (
        <>
            <Navbar />
        <div className="home">
            <div className="imageDiv-top" >
                <img src={Image} alt="Profile" className="image" />
            </div>
            
            <div className="hero">
                <div className="hero-banner" >
                    Hi! I'm <span className="hero-name" > Ankit Suman</span> 
                </div>
                
                <div className="hero-heading" >
                        A Fullstack Web Developer
                </div>
                
                <div className="hero-description" >
                        A passionate and innovative computer science graduate with a strong foundation in Full Stack Development.
                        Having successfully completed a rigorous MERN (MongoDB, Express.js, React.js, Node.js) stack bootcamp,
                        I bring a diverse skill set and hands-on experience in building dynamic and responsive web applications.
                        My journey in web development has been marked by the creation of several impactful projects, demonstrating my proficiency
                        in both front-end and back-end technologies. Explore my portfolio to witness firsthand how I transform ideas into functional
                        and user-friendly solutions. I am excited about the opportunity to contribute my skills and enthusiasm to a dynamic team.
                        Let's connect and discuss how my dedication to continuous learning and problem-solving can be an asset to your organization.
                </div>
                
                <div className="interact" >
                    <button className="resume"   onClick={openPDF}  >
                        Resume <DownloadIcon />
                    </button>
                    
                    <div className="socials" >
                        <a href="https://www.linkedin.com/in/ankit-suman-6925011b6/"> <img src={LinkedIn} alt="linkedin" /> </a>
                        <a href="https://github.com/ankit-suman-07"> <img src={Github} alt="github" /> </a>
                        <a href="https://www.instagram.com/ankit__suman_/"> <img src={Instagram} alt="instagram" /> </a>
                        <a href="https://twitter.com/ankit_suman_"> <img src={Twitter} alt="twitter" /> </a>
                        <a href="https://leetcode.com/user9247xh/"> <img src={LeetCodeIcon} alt="leetcode" /> </a>
                        <a href="mailto:ankitsuman07@gmail.com?subject=Inquiry%20from%20Website&body=Hello,%20I%20have%20a%20question%20for%20you.[Please%20update%20the%20mail%20IDs]"> <img src={Gmail} alt="gmail" /> </a>
                        
                    </div>
                </div>       
            </div>
      
            <div className="imageDiv-bottom" >
                <img src={Image} alt="Profile" className="image" />
            </div>
    </div>

    <Skills />
    
            <Featured />
            <Footer />
    </>
    );
};

export default Home;