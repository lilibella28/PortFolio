import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle';
import pdf from '../../Assets/../Assets/LilibehtAMontanoResumePortFolio.pdf';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import Calendly  from '../Calendly/Calendly'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
	'https://raw.githubusercontent.com/lilibella28/PortFolio/main/src/Assets/LilibehtAMontanoResumePortFolio.pdf';
function ResumeNew() {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return (
		<div>
			<Container fluid className="resume-section">
				<Particle />
				

				<Row className="resume">
					<Col>
					<Document file={resumeLink} className="d-flex justify-content-center">
						<Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
					</Document>
					</Col>

					<Col><Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: '250px', marginTop: '20px', backgrroundColor: "purple" }}>
						<AiOutlineDownload />
						&nbsp;Download Resume
					</Button> </Col>
					
				</Row>
				

				<Row style={{ justifyContent: 'center', position: 'relative' }}>
					<Calendly />
				</Row>
			</Container>
		</div>
	);
}

export default ResumeNew;
