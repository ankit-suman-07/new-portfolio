import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from '@mui/icons-material/Twitter';
import "../css/Contact.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // Configure email service credentials
    const serviceId = 'service_thzpw0d';
    const templateId = 'template_xqovgze';
    const userId = '-EysgfTxhwOsUeHnX';

    // Format the email data
    const emailData = {
      to_email: 'ankitsuman07@gmail.com', // Your email address
      from_name: data.name,
      from_email: data.email,
      message: "Message : " + data.email + "\n Message : " + data.message,
    };

    // Send the email
    emailjs.send(serviceId, templateId, emailData, userId)
      .then((response) => {
        console.log('Email name!', emailData.from_name);
        console.log('Email ID!', emailData.from_email);
        console.log('Email sent successfully!', response);
        console.log('Email sent successfully!', emailData.message );
        reset(); // Reset the form fields
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const openPDF = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/pdf/Resume - Ankit Suman.pdf";
    window.open(pdfUrl);
  };

  return (
    <div className='contact' >
    <div className='form-btns' >
        <a href="https://www.linkedin.com/in/ankit-suman-6925011b6/">
            <button className='contact-btn' > <LinkedInIcon /> </button>
        </a>
        <a href="https://github.com/ankit-suman-07">
            <button className='contact-btn' > <GitHubIcon /> </button>
        </a>
        <a href="mailto:ankitsuman07@gmail.com?subject=Inquiry%20from%20Website&body=Hello,%20I%20have%20a%20question%20for%20you.[Please%20update%20the%20mail%20IDs]">
            <button className='contact-btn' > <EmailIcon /> </button>
        </a>
        <a href="https://twitter.com/ankit_suman_">
            <button className='contact-btn'   > <TwitterIcon /> </button>
        </a>
    </div>
    <br />
    <form onSubmit={handleSubmit(onSubmit)} className='contact-form' >
        <div className='contact-header' >
            Write To Me
        </div>
        <div className='form-input' >
            <div className='form-section' >
                <label>Email ID:</label>
                <input type="email" {...register('email', { required: true })} />
                    {errors.email && <span>Email is required.</span>}
            </div>
            <div className='form-section' >
                <label>Name:</label>
                <input type="text" {...register('name', { required: true })} />
                    {errors.name && <span>Name is required.</span>}
            </div>
            <div className='form-section' >
                <label>Message:</label>
                <textarea {...register('message', { required: true })} />
                    {errors.message && <span>Message is required.</span>}
            </div>
        </div>
        <button type="submit" className='submit-btn' >Send</button>
    </form>
    </div>
  );
};

export default Contact;