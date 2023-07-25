import React from "react";
import Featured from "../components/Featured";
import Image from "../assets/profile.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import DownloadIcon from '@mui/icons-material/Download';
import "../css/Home.css";

const Home = () => {
    const openPDF = () => {
        const pdfUrl = process.env.PUBLIC_URL + "/pdf/Resume - Ankit Suman.pdf";
        window.open(pdfUrl);
      };
    
    return (
        <>
        <div className="home">
            <div className="imageDiv-top" >
                <img src={Image} alt="Profile Photo" className="image" />
            </div>
            
            <div className="hero">
                <div className="hero-banner" >
                    Hi! I'm <span className="hero-name" > Ankit Suman</span> 
                </div>
                
                <div className="hero-heading" >
                    A passionate Web Developer
                </div>
                
                <div className="hero-description" >
                Armed with a Bachelor's degree in Computer Science, I am now on a thrilling quest to embark on my 
                journey as a front-end developer and breathe life into captivating websites.
                
                I find genuine joy in crafting the visual magic that lies in the front-end part of a website. 
                From the moment a user sets foot on a page to the seamless interactions that follow, 
                I'm enchanted by the art and science of coding delightful user interfaces.
                </div>
                
                <div className="interact" >
                    <button className="resume"   onClick={openPDF}  >
                        Resume <DownloadIcon />
                    </button>
                    
                    <div className="socials" >
                        <a href="https://www.linkedin.com/in/ankit-suman-6925011b6/"><LinkedInIcon /></a>
                        <a href="https://github.com/ankit-suman-07"><GithubIcon /></a>
                        <a href="https://www.instagram.com/ankit__suman_/"><InstagramIcon /></a>
                        <a href="mailto:ankitsuman07@gmail.com?subject=Inquiry%20from%20Website&body=Hello,%20I%20have%20a%20question%20for%20you.[Please%20update%20the%20mail%20IDs]"><EmailIcon /></a>
                    </div>
                </div>       
            </div>
      
            <div className="imageDiv-bottom" >
                <img src={Image} alt="Profile Photo" className="image" />
            </div>
    </div>
    
    <Featured />
    <div className="flex" >
        This website has completely been designed and developed by ME.
    </div>
    </>
    );
};

export default Home;