import React from 'react'
import { Container, Row, Col, Tab, TabContent, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";






export const Projects = () => {

    const projects = [
        {
            title: "Business Startup",
            description: " Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: " Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: " Design & Development",
            imgUrl: projImg3,
        }
       


    ]


  return (
    <section id="project" className='project'>
            <Container>
                <Row>
                    <Col>
                         <h2>Projects</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                         <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Tab Three
                                </Nav.Link>
                            </Nav.Item>
                         </Nav>
                         <TabContent>
                            <Tab.Pane eventKey="first">
                                <Row className='pt-3'>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard 
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane>
                                Tab2
                            </Tab.Pane>
                            <Tab.Pane>
                                Tab3
                            </Tab.Pane>
                         </TabContent>
                         </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className='background-image-right' />

    </section>
  )
}
