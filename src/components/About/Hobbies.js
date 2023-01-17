import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import Hobbies1 from '../../Assets/hobbies1.webp'
import Hobbies2 from '../../Assets/hobbies2.webp'
import Hobbies3 from '../../Assets/hobbies3.webp'
import Hobbies4 from '../../Assets/hobbies4.webp'

function Hobbies() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="purple">Hobbies</strong>
      </h1>
      
      <Col xs={4} md={2} className="tech-icons">
      <img src={Hobbies1} alt="Cooking" className="img-fluid" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={Hobbies2} alt="Cooking" className="img-fluid" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={Hobbies3} alt="Cooking" className="img-fluid" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={Hobbies4} alt="Cooking" className="img-fluid" />
      </Col>
    </Row>
  );
}

export default Hobbies