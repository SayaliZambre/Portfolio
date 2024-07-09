import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {ProjectCard } from './ProjectCard';
import projImg1 from "../assets/img/chatapp.png";
import projImg2 from "../assets/img/quiz.png";
import projImg3 from "../assets/img/music1.png";
import projImg4 from "../assets/img/ide.jpeg";
import projImg5 from "../assets/img/disscusify.png";
import projImg6 from "../assets/img/ecoomerce.png";
// import projImg5 from "../assets/img/disscusify.png";
// import projImg5 from "../assets/img/disscusify.png";
// import projImg5 from "../assets/img/disscusify.png";


import colorSharp2 from "../assets/img/heroImage.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Dhanwantari-app ",
      github:"https://github.com/alpharosto/Xero_app",
      description: "https://github.com/alpharosto/Xero_app Xero_App is an healthcare application which primary focuses on two uncovered aspect of Health application and Personalisation",
      imgUrl: projImg1,
    },
    
    {
      title: "Healthapp-blockchain ",
      github:"https://github.com/SayaliZambre/Healthapp-blockchain",
      description: "https://github.com/SayaliZambre/Healthapp-blockchain  The medical record storage system utilizing blockchain technology is an innovative solution designed to securely store and manage patient medical records in a decentralized and tamper-proof manner. By leveraging blockchain's inherent characteristics—immutability, transparency, and distributed consensus—this system revolutionizes the handling, sharing, and accessing of medical data.",
      imgUrl: projImg1,
    },

    {
      title: "Chat-app ",
      github:"https://github.com/SayaliZambre/chat-app",
      description: "https://github.com/SayaliZambre/chat-app  A sleek and intuitive chat app that facilitates seamless communication with friends and colleagues. Enjoy real-time for a personalized chatting experience",
      imgUrl: projImg1,
    },
    {
      title: "Quiz-app",
      description: "https://github.com/SayaliZambre/quiz1 Engage and challenge yourself with our interactive quiz application. Test your knowledge, learn new facts, and have fun with a diverse range of quizzes.",
      imgUrl: projImg2,
    },
    {
      title: "Flipcart",
      description: "https://github.com/SayaliZambre/EcommerceAI Revolutionize your shopping experience with our platform, seamlessly blending the power of artificial intelligence",
      imgUrl: projImg6,
    },
    {
      title: "Music",
      description: "https://github.com/SayaliZambre/music Immerse yourself in a world of melodies with enjoy your favorite tunes anytime.",
      imgUrl: projImg3,
    },
    {
      title: "Ide",
      description: "https://github.com/SayaliZambre/ide Your creative hub for coding",
      imgUrl: projImg4,
    },
   
    {
      title: "Discussify",
      description: "https://github.com/SayaliZambre/Discussify Elevate conversations with our platform that fosters meaningful discussions",
      imgUrl: projImg5,
    },
  
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}