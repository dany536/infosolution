import React from 'react';
import './Buttonfile.css';
import Particles from "react-tsparticles";
import { Container, Row, Col, Image, Button, FigureImage, Figure } from 'react-bootstrap'

export default function Buttonfile() {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div style={{ backgroundColor: 'black', width: '100%', height: '100%' }}>

            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: false,
                            opacity: 0.5,
                            width: 5,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: true,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 3
                        },
                    },
                    detectRetina: true,
                }}
            />


            <Container>
                <Row className="justify-content-md-center p-2 pt-2">
                    <Col xs={12} sm={4} md={6}>
                        <Figure>
                            <Figure.Image fluid width={270} height={250} alt="InfoSolution Logo" src="/image/logo.png" />
                        </Figure>
                    </Col>
                </Row>
            </Container>


            <Container fluid>
                <Row>
                    <Col md="6">
                        <div className='' style={{ color: 'white' }}>
                            <h5>WE ARE WORKING ON OUR WEBSITE DESIGN</h5>
                            <h5>WE ARE SURE THIS NEW WEBSITE WILL COMPLETELY BLOW YOUR MIND</h5>
                            <h5>SIT BACK YOUR SEAT BELT</h5>
                            <h1><strong className='brand-name'>SOON WE WILL LAUNCH</strong></h1>
                        </div>
                    </Col>
                    <Col md="6">
                        <Col>
                            <Figure>
                                <Figure.Image fluid width={250} height={260} className='pt-2 animated justify-content-md-center' alt="InfoSolution Logo" src="/image/the_rocket.png" />
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image fluid width={270} height={260} className='pt-1 justify-content-md-center' alt="InfoSolution Logo" src="/image/launchpad2.png" />
                            </Figure>
                        </Col>
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ backgroundColor: '#5AC1F3' }}>
                <div className='p-1'>
                    <span style={{ Color: '#fffff', fontSize: '14px' }} >Copyright @ 2022 All Right Reserved. Design & Developed by <strong className='brand-name'> InfoSolution</strong></span>
                </div>
            </Container>
        </div>
    )
}
