import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Picture2 from '../../Assets/bodypic.webp'
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Github from "../About/Github"
import TechStack from '../About/Techstack'
import Toolstack from '../About/Toolstack'
import Projects from '../Projects/Projects.js'
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                👋🏾
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Lilibeht Montano</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={Picture2}
                alt="home pic"
                className="img-fluid" 
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Home2 />
          <br></br>
          < Projects />
          <br></br>
          <TechStack />
          <br></br>
          <Github />
          <br></br>
  
        <Toolstack />
        </Container>
      
      </Container>
    </section>
  );
}

export default Home;
