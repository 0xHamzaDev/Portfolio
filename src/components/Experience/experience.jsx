import { useState } from "react";
import "./experience.css";

const Experience = () => {
	return (
		<>
			<section id="experience" className="experience-section">
				<h2 className="experience-title">Experience</h2>
				<div className="timeline">
					<div className="timeline-item">
						<div className="timeline-year">2020</div>
						<div className="timeline-content">
							<p>Began career as a Full-Stack Software Engineer, focusing on iOS, Android, and web development.</p>
						</div>
					</div>
					<div className="timeline-item">
						<div className="timeline-year">2021</div>
						<div className="timeline-content">
							<ul>
								<li>Created and led the development of ReAdmin, a Roblox HR service.</li>
								<li>Helped develop Bloxlink's web and back-end infrastructure, a verification platform for Roblox and Discord.</li>
							</ul>
						</div>
					</div>
					<div className="timeline-item">
						<div className="timeline-year">2022</div>
						<div className="timeline-content">
							<p>Continued to enhance ReAdmin and Bloxlink, contributing to their growth and success.</p>
						</div>
					</div>
					<div className="timeline-item">
						<div className="timeline-year">2023</div>
						<div className="timeline-content">
							<ul>
								<li>Worked on additional app development projects, taking ideas to live products and maintaining their functionality.</li>
								<li>Led the annual community light show, featured in the local newspaper.</li>
							</ul>
						</div>
					</div>
					<div className="timeline-item">
						<div className="timeline-year">2024</div>
						<div className="timeline-content">
							<ul>
								<li>Focused on keeping pace with industry changes and expanding technical expertise.</li>
								<li>Continued involvement in community and technical projects.</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	)
};

export default Experience;