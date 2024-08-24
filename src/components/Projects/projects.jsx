import React from "react";
import "./projects.css";
import reactImg from "../Skills/images/react.png";
import nextjsImg from "../Skills/images/next-js.svg";
import tailwindcssImg from "../Skills/images/tailwindcss.png";
import gitImg from "../Skills/images/git.svg";
import dockerImg from "../Skills/images/docker.svg";
import nodejsImg from "../Skills/images/node-js.svg";
import expressjsImg from "../Skills/images/express-js.svg";
import mongodbImg from "../Skills/images/mongodb.svg";
import fastapiImg from "../Skills/images/fastapi.svg";
import postmanImg from "../Skills/images/postman.svg";
import typescriptImg from "../Skills/images/typescript.svg";
import cssImg from "../Skills/images/css.svg";
import viteImg from "../Skills/images/vite.svg";
import sqlImg from "../Skills/images/sql.png";
import mysqlImg from "../Skills/images/mysql.svg";
import figmaImg from "../Skills/images/figma.png";
import photoshopImg from "../Skills/images/photoshop.svg";
import luaImg from "../Skills/images/lua.svg";
import framerMotionImg from "../Skills/images/framer-motion.svg";
import csharpImg from "../Skills/images/csharp.png";

const Projects = () => {
	const projects = [
		{ id: 1, title: "Project 1", description: "ng industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing", technologies: ["React", "Node", "React", "Node","Express", "MongoDB"] },
		{ id: 2, title: "Project 2", description: "ng industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing", technologies: ["React", "Node", "React", "Node","Express", "MongoDB"] },
		{ id: 3, title: "Project 3", description: "ng industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing", technologies: ["React", "Node", "React", "Node","Express", "MongoDB"] },
		{ id: 4, title: "Project 4", description: "ng industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing", technologies: ["React", "Node", "React", "Node","Express", "MongoDB"] },
		{ id: 5, title: "Project 5", description: "ng industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing", technologies: ["React", "Node", "React", "Node","Express", "MongoDB"] },
		{ id: 6, title: "Project 6", description: "ng industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing", technologies: ["React", "Node","React", "Node", "Express", "MongoDB"] },
	];

	const Technologies = {
		['React']: reactImg,
		['Node']: nodejsImg,
		['Express']: expressjsImg,
		['MongoDB']: mongodbImg,
		['FastAPI']: fastapiImg,
		['Postman']: postmanImg,
		['TypeScript']: typescriptImg,
		['CSS']: cssImg,
		['Vite']: viteImg,
		['SQL']: sqlImg,
		['MySQL']: mysqlImg,
		['Figma']: figmaImg,
		['Photoshop']: photoshopImg,
		['Lua']: luaImg,
		['Framer Motion']: framerMotionImg,
		['C#']: csharpImg,
		['TailwindCSS']: tailwindcssImg,
		['Next.js']: nextjsImg,
		['Git']: gitImg,
		['Docker']: dockerImg,
	}

	return (
		<section id="projects" className="projects-section">
			<h1 className="projects-title">Projects</h1>
			<div className="projects-grid">
				{projects.map((project) => (
					<div key={project.id} className="project-card">
						<div className="project-content">
							<h2 className="project-title">{project.title}</h2>
							<p className="project-description">{project.description}</p>

							<ul className="project-tags">
								{project.technologies.map((tech, index) => (
									<li key={index} className="project-tag">
										<img src={Technologies[tech]} style={{ height: '20px' }} alt={tech} /> <p>{tech}</p>
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