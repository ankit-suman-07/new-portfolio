import React,  {useState} from "react";
import {Link, NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import "../css/Navbar.css";

const Navbar = () => {
    const [navbar, setNavBar] = useState(false);
    return (
        <div className="navbar" >
            <div className="logo" >
                <Link exact to="/" className="logo-text" > ANKIT SUMAN </Link>     
            </div>
            <div className="right-nav" id={navbar ? "open" : "close"} >
                <NavLink exact to="/" className="link"  activeClassName="active" onClick={ () => {setNavBar(false)} }  >Home</NavLink>
                <NavLink exact to="/about" className="link" activeClassName="active" onClick={() => { setNavBar(false) }}  >About Me</NavLink>
                <NavLink exact to="/projects" className="link"  activeClassName="active" onClick={ () => {setNavBar(false)} }  >Projects</NavLink>
                <NavLink exact to="/blog" className="link"  activeClassName="active" onClick={ () => {setNavBar(false)} }  >Blog</NavLink>
                <NavLink exact to="/contact" className="link"  activeClassName="active" onClick={ () => {setNavBar(false)} }  >Contact Me</NavLink>
            </div>
            <div className="menu" onClick={() => setNavBar(!navbar)} >
                <MenuIcon style={{ fontSize: "36px" }} className="menu-icon" />
            </div>
        </div>
    );
};

export default Navbar;