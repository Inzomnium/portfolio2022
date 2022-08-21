import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                
                <Col sm={6}>
                    <div className='logo2' id='logoFooter'></div>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className='social-icon'>
                    <a href='mailto:sebacofrebarrientos@gmail.com'><FaRegEnvelope /></a>
                   <a href='https://wa.me/56982777561?text=Hello%20:)'><FaWhatsapp /></a> 
                    </div>
                    <p>Copyright 2022, All right reserved, Sebastian Cofre</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
