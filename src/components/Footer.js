import React from "react";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../css/Footer.css";

const Footer = () => {
    const openPDF = () => {
        const pdfUrl = process.env.PUBLIC_URL + "/pdf/Resume - Ankit Suman.pdf";
        window.open(pdfUrl);
      };
    return (
        <div className="footer" >
            <a href="https://github.com/ankit-suman-07">
                <GitHubIcon  className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/ankit-suman-6925011b6/">
                <LinkedInIcon  className="footer-icon" />
            </a>
            {/* <MailOutlineIcon className="footer-icon" /> */}
            <button  className="footer-resume"  onClick={openPDF}   >
                <InsertDriveFileOutlinedIcon className="footer-icon" />
            </button>
            
            <a href="mailto:ankitsuman07@gmail.com?subject=Inquiry%20from%20Website&body=Hello,%20I%20have%20a%20question%20for%20you.[Please%20update%20the%20mail%20IDs]">
                <span className="footer-icon text" >ankitsuman07@gmail.com</span>
            </a>
        </div>
    );
};

export default Footer;