import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import editor from '../../Assets/Projects/jobtracker.png';
import picome from '../../Assets/Projects/picome.png';
import mancala from '../../Assets/Projects/mancala.png';

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					<strong className="purple">Projects</strong>
				</h1>

				<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={picome}
							isBlog={false}
							title="PicoMe"
							description="PicoMe is a browser-based application that utilizes mongoose to allow users to perform CRUD operations on a MongoDB database. PicoMe mission is to create a platform that allows users to share or request food assistance from the community without cost."
							ghLink="https://github.com/lilibella28/PicoMe"
							demoLink="https://picome-production.up.railway.app/orders"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={mancala}
							isBlog={false}
							title="Mancala"
							description="The mancala games are a family of two-player turn-based strategy board games played with small stones, beans, or seeds and rows of holes or pits in the earth, a board or other playing surface. The objective is usually to capture all or some set of the opponent's pieces."
							ghLink="https://github.com/lilibella28/MancalaGame"
							demoLink="https://lilibella28.github.io/MancalaGame/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={editor}
							isBlog={false}
							title="Job Tracker"
							description="This mobile responsive application is meant as a Job Application tracking tool. Helping new grads, career transitioners, and veterans in their prospective fields keep track of their submitted applications."
							ghLink="https://github.com/lilibella28/Job-Tracker"
							demoLink="https://job-tracker-production.up.railway.app/"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
