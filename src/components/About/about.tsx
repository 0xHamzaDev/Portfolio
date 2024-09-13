import { useState } from 'react';
import './about.css';

const About = () => {
	return (
		<>
			<section id="about" className="about-section">
				<h2 className="about-subtitle">Introduction</h2>
				<h1 className="about-title">Overview </h1>
				<p className="about-text">
					I'm a Full-Stack Software Engineer, eighteen years old, with
					a ton of web, iOS, and Android development expertise. I've
					developed programs from scratch, seeing to it that they
					function properly and efficiently. I've learned a lot about
					creating and managing software that users genuinely love and
					use from my trip. I take great satisfaction in my ability to
					pick things up quickly, which has been invaluable in keeping
					up with our ever evolving sector. I'm all about building
					innovative, practical applications from the ground up,
					infusing each project with a healthy dose of technical
					expertise and a never-ending quest for knowledge.
				</p>
				<div className="about-cards-container">
					<div className="about-card">
						<h3 className="about-card-title">
							Frontend Development
						</h3>
						<p className="about-card-text">
							Specializing in crafting engaging user interfaces
							that are both intuitive and visually appealing,
							ensuring a seamless user experience.
						</p>
					</div>
					<div className="about-card">
						<h3 className="about-card-title">
							Software Engineering
						</h3>
						<p className="about-card-text">
							Dedicated to developing robust software solutions,
							utilizing the latest technologies and methodologies
							to drive innovation and efficiency.
						</p>
					</div>
					<div className="about-card">
						<h3 className="about-card-title">
							Backend Development
						</h3>
						<p className="about-card-text">
							Focused on building scalable and secure server-side
							applications, emphasizing clean, efficient code and
							data integration.
						</p>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
