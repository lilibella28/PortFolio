import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Picture2 from '../../Assets/profile2.webp';
import Particle from '../Particle';
import Home2 from './Home2';
import Type from './Type';
import Github from '../About/Github';
import TechStack from '../About/Techstack';
import Toolstack from '../About/Toolstack';
import Projects from '../Projects/Projects.js';
import Calendly from '../Calendly/Calendly'
function Home() {
	return (
		<section>
			<Container fluid className="home-section" id="home">
				<Particle />
				<Container className="home-content">
					<Row>
						<Col md={7} className="home-header">
							<h1 style={{ paddingBottom: 15 }} className="heading">
								Hi There!{' '}
								<span className="wave" role="img" aria-labelledby="wave">
									👋🏾
								</span>
							</h1>

							<h1 className="heading-name">
								I'm
								<strong className="main-name"> Lili Montano</strong>
							</h1>
							<p className="home-about-body">
								Full stack engineer, passionate about{' '}
								<span className="purple wave wave1">solving problems</span> through technology. Varied
								technical background through self-education,
								<span className="purple wave wave1">computer science degree</span>, projects and
								bootcamp experience. Strong work ethic, good planning and prioritization skills,{' '}
								<span className="purple wave wave1">great working in teams</span>, and strong
								communicator.
							</p>
							<div style={{ padding: 20, textAlign: 'left' }}>
								<Type />
							</div>
						</Col>

						<Col md={5} style={{ paddingBottom: 20 }}>
							<img src={Picture2} alt="home pic" className="img-fluid" style={{ maxHeight: '450px' }} />
						</Col>
					</Row>

					<Projects />

					<TechStack />
					<br></br>
					<Github />
					<br></br>

					<Toolstack />
				</Container>
				<Calendly />
			</Container>
			
		</section>
	);
}

export default Home;
