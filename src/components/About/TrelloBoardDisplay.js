import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle';
import Github from './Github';
import Techstack from './Techstack';
import Aboutcard from './AboutCard';
import Hobbies from './Hobbies';
import TrelloBoard from './TrelloBoard';
import laptopImg from '../../Assets/aboutme.webp';
import Toolstack from './Toolstack';

function TrelloBoardDisplay() {
	return (
		<Container fluid className="about-section">
			<Particle />
			<Container>
				<Row className="PrivateRow" style={{ justifyContent: 'center', padding: '10px' }}>
					<Col
						md={7}
						className="AboutFinal"
						style={{
							justifyContent: 'center',
							// paddingTop: "30px",
							// paddingBottom: "50px",
						}}
					>
						<h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
							<strong className="purple">What I am working on</strong>
						</h1>
					</Col>

					<TrelloBoard />
				</Row>
			</Container>
		</Container>
	);
}

export default TrelloBoardDisplay;
