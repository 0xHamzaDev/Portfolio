import React from 'react';
import './projects.css';
import { projects } from '../../constant/Projects';
import { Technologies } from '../../constant/Technologies';

const Projects = () => {
	return (
		<section id="projects" className="projects-section">
			<h1 className="projects-title">Projects</h1>
			<div className="projects-grid">
				{projects.map((project) => (
					<div key={project.id} className="project-card">
						<div className="project-content">
							<h2 className="project-title">{project.title}</h2>
							<p className="project-description">
								{project.description}
							</p>

							<ul className="project-tags">
								{project.technologies.map((tech, index) => (
									<li key={index} className="project-tag">
										<img
											src={Technologies[tech]}
											style={{ height: '20px' }}
											alt={tech}
										/>{' '}
										<p>{tech}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
