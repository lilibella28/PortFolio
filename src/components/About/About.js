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
        <Row  className="PrivateRow" style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            className="AboutFinal"
            style={{
              justifyContent: "center",
              // paddingTop: "30px",
              // paddingBottom: "50px",


            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">Lilibeht Montano</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
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
