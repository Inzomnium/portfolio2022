import React from "react";
import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";


import headerimage from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNumber, setloopNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Web Designer", "UX/UI Designer", "CSS Expert"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1)
    const period = 2000;

    useEffect(() => {
      let ticker = setInterval( () => {
        tick();
      }, delta);
    
      return () => {
        clearInterval(ticker)
      }
    }, [text])

    const tick = () => {
        let i = loopNumber % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2 )
        }
        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);            
            setloopNumber(loopNumber + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1)
        }
    }
    

    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome earthlings!</span>
                            <h1>{'Hi, I Am Sebastian'}<span className='wrap'> {text}</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button onClick={() => {console.log('connected')}} > Let's Connect <ArrowRightCircle size={25} />
                        </button>


                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerimage} alt="Header image" />

                    
                    </Col>
                </Row>

            </Container>

        </section>

    );
}