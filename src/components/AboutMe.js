import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

export const AboutMe = () => {
  return (
    <section className='aboutme' id="aboutme">
    <Container>
        <Row align-content-center className='pt-5 pb-5'>
            <Col sm={12}><h2>About Me</h2></Col>
            <Col sm={12} md={6}>
            <picture >
                <Image src='https://placekeanu.com/500/g' className='p-5'></Image>
            </picture>
            </Col>
            <Col sm={12} md={6} >
            
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Col>
        </Row>




    </Container>
    </section>
  )
}
