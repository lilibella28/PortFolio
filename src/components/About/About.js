import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Techstack from './Techstack';
import Aboutcard from './AboutCard';
import Hobbies from './Hobbies';
import laptopImg from '../../Assets/aboutme.webp';
import Toolstack from './Toolstack';
import Calendly from '../Calendly/Calendly';

function About() {
	return (
		<Container fluid className="about-section">
			<Particle />
			<Container>
				<img style={{ width: '300px' }} src={laptopImg} alt="about" className="img-fluid" />

				<Row className="PrivateRow" style={{ justifyContent: 'center', padding: '5px' }}>
					<Col
						md={7}
						className="AboutFinal"
						style={{
							justifyContent: 'center',
						}}
					>
						<Aboutcard />
					</Col>
				</Row>

				<Hobbies />
				<Techstack />
				<Toolstack />
			</Container>
			<Calendly />
		</Container>
	);
}

export default About;
