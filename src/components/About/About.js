import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Hobbies from "./Hobbies";
import TrelloBoard from "./TrelloBoard"
import laptopImg from "../../Assets/aboutme.webp";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
      
            <img style={{width:'300px'}} src={laptopImg} alt="about" className="img-fluid" />
        
        <Row  className="PrivateRow" style={{ justifyContent: "center", padding: "5px" }}>
          <Col
            md={7}
            className="AboutFinal"
            style={{
              justifyContent: "center",
              // paddingTop: "30px",
              // paddingBottom: "50px",


            }}
          >
            <Aboutcard />
          </Col>
         
        </Row>

       <Hobbies />
        <Techstack />
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
