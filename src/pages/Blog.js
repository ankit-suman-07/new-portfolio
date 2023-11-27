import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Blog.css";

const Blog = () => {

    return (
        <>
            <Navbar />
            <div className="blog" >
                <p className="blog-text" >This page is under construction. Please visit in few days.</p>
            </div>
            <Footer />
        </>
    );
};

export default Blog;