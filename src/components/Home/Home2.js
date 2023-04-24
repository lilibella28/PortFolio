import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg1 from '../../Assets/profile2.webp';
import Tilt from 'react-parallax-tilt';

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<div style={{ padding: 50, textAlign: 'left' }}></div>
						<p className="home-about-body">
							Full stack engineer, passionate about{' '}
							<span className="purple wave wave1">solving problems</span> through technology. Varied
							technical background through self-education,
							<span className="purple wave wave1">computer science degree</span>, projects and bootcamp
							experience. Strong work ethic, good planning and prioritization skills,{' '}
							<span className="purple wave wave1">great working in teams</span>, and strong communicator.
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg1} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
