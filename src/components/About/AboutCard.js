import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p className="AboutFinal" style={{ textAlign: 'justify' }}>
						<br />I am a software engineer with experience in developing and{' '}
						<span className="purple">designing user-friendly software solutions.</span> <br />I am
						passionate about coding and{' '}
						<span className="purple">enjoy solving complex problems creatively </span>and efficiently.{' '}
						<br /> I am skilled in various programming languages, such as{' '}
						<span>JavaScript, Python, and Java,</span>
						<br /> and I have experience working with different software development methodologies. My goal
						is to <span className="purple"> continue learning </span> and growing as a software engineer and
						create innovative software that positively impacts people's lives.
					</p>
					<p  style={{ color: 'white', fontSize: ' 14px', fontWeight: '800' }}>
						"A fun fact about me is that my family from a tiny town called Rio Mejicano, on the Pacific
						coast of Colombia, until very recently wasn't in Google Map <br /> And if you wonder, no, there
						is no internet. Could you imagine?"{' '}
					</p>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
