import React from "react";
import NavBar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from '../../assets/img/logo.svg'
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import { NavBarHook } from "../hook/NavBarHook";

const NavBarC = () => {
    
    const{activeLink, setActiveLink, scrolled } = NavBarHook();

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Router>
            <NavBar expand="md" className={ scrolled ? "scrolled" : ""}>
                <Container className="container-navbar">
                    <NavBar.Brand >
                        <img className="navbar-logo" src={logo} alt=""/>
                    </NavBar.Brand>
                    <NavBar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </NavBar.Toggle>
                    <NavBar.Collapse id="basic-navbar-nav-Collapse" className="container-navbar">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home"     className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}     onClick={ () => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills"   className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}   onClick={ () => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#proyects" className={activeLink === 'proyects' ? 'active navbar-link' : 'navbar-link'} onClick={ () => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="#1"><img src={navIcon1} alt="" /></a>
                                <a href="#2"><img src={navIcon2} alt="" /></a>
                                <a href="#3"><img src={navIcon3} alt="" /></a>
                            </div>
                            <HashLink to='#connect'>
                                <button className="vvd"><span>Let’s Connect</span></button>
                            </HashLink>
                        </span>
                    </NavBar.Collapse>
                </Container>
            </NavBar>
        </Router>
    )
}

export default NavBarC;
