import React from 'react';
import { useState, useEffect } from 'react';
import {Navbar, Nav, Container, Popover} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";

export const NavBar = () => {
    const [activeLink, setactiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setactiveLink(value)
    }

    const popover = (
      <Popover id="popover-basic">
        
        <Popover.Body>
        <div className='social-icon' >
                  <a href='mailto:sebacofrebarrientos@gmail.com'><FaRegEnvelope /></a>
                   <a href='https://wa.me/56982777561?text=Hello%20:)'><FaWhatsapp /></a> 
        </div>
        </Popover.Body>
      </Popover>
    );





    return (
        <Navbar  expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">
                <div className='logo1' id='logo'></div>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={ activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#aboutme" className={ activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
                <Nav.Link href="#skills" className={ activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#project" className={ activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')
                }>Projects</Nav.Link>
              </Nav>

              <span className='navbar-text'>
                
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <button className='vvd' onClick=""><span>Let's Connect</span></button>
                    </OverlayTrigger>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

}