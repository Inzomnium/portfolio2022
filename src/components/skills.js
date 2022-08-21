import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"
import { SkillCard } from "./SkillCard";



export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      


      return (
        <section className="skills" id="skills">
            <Container fluid>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">

                            <div className="item">
                                
                                <SkillCard valor={99} titulo={'HTML/CSS'} />
                                
                            </div>

                            <div className="item">
                                <SkillCard valor={85} titulo={'Javascript'} />
                            </div>

                            <div className="item">
                                <SkillCard valor={90} titulo={'Jquery'} />

                            </div>
                            <div className="item">
                                <SkillCard valor={75} titulo={'React'} />

                            </div>
                            <div className="item">
                                <SkillCard valor={35} titulo={'Three.js'} />

                            </div>
                        </Carousel>

                    </div>
                    </Col>
                </Row>


            </Container>
            <img src={colorSharp} className="background-image-left" /> 
        </section>


      )




}