import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { FaWhatsapp, FaRegEnvelope } from "react-icons/fa";
export const AboutMe = () => {
  return (
    <section className='aboutme' id="aboutme">
    <Container>
        <Row className='pt-5 pb-5 align-content-center'>
            <Col sm={12}><h2>About Me</h2></Col>
            <Col sm={12} md={6}>
            <picture >
                <Image src='https://placekeanu.com/500/g' className='p-5'></Image>
            </picture>
            </Col>
            <Col sm={12} md={6} >
            
            <p>Hi, my name is Sebastian Cofre, and <b>I'm a web designer, front-end developer, and UX and web marketing enthusiast.</b></p>
              
            <p> With more than 10 years of experience, my main attribute is the adaptability and quick learning of different technologies and ways of working that this career requires. 
               
               My main objective is to add value, with my experience and ingenuity, to the different digital products that a company can create.</p>

              <h5>my experience and contributions to teams</h5>
            <ul>
              <li>High quality HTML/CSS/JS layout for different platforms and with different frameworks</li>
              <li>Contribute and generate dialogue between the different stakeholders about the user experience and how the objective of the project could benefit from such perspectives</li>
                         
            </ul>
            <p className='contact-info'>Get in contact: <a className='btn btn-danger' target="_blank" href='mailto:sebacofrebarrientos@gmail.com'><FaRegEnvelope /> sebacofrebarrientos@gmail.com</a>
              or via <a target="_blank" className='btn btn-danger' href="https://wa.me/56982777561?text=Hello%20:)"><FaWhatsapp /> Whatsapp</a></p>
            </Col>
        </Row>




    </Container>
    </section>
  )
}
