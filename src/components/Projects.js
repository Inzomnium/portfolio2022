import React from 'react'
import { Container, Row, Col, Tab, TabContent, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';

import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';

import { projects, threepjts, oldPjts } from './data/ProjectsData';





export const Projects = () => {

    console.log(threepjts)


  return (
    
    <section id="project" className='project'>
         <TrackVisibility>
                        
                        {({ isVisible }) =>
                        <div className={ isVisible ? "" : ""}>
            <Container>
                <Row>
                    <Col>
                         <h2>Projects</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                         <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Web projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Three.js Exercises</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Old projects
                                </Nav.Link>
                            </Nav.Item>
                         </Nav>
                         <TabContent>
                            <Tab.Pane eventKey="first" className={ isVisible ? "" : ""}>
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
                            <Tab.Pane eventKey="second">
                            <Row className='pt-3'>
                            {
                                    threepjts.map((project, index) => {
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
                            <Tab.Pane eventKey="third">
                            <Row className='pt-3 Oldprojects'>
                                {
                                    oldPjts.map((project, index) => {
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
                         </TabContent>
                         </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className='background-image-right' />

            </div>
                        }
            </TrackVisibility>

    </section>
  )
}
