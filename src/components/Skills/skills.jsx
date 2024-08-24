import { useState } from "react";
import "./skills.css";
import reactImg from "./images/react.png";
import nextjsImg from "./images/next-js.svg";
import tailwindcssImg from "./images/tailwindcss.png";
import gitImg from "./images/git.svg";
import dockerImg from "./images/docker.svg";
import nodejsImg from "./images/node-js.svg";
import expressjsImg from "./images/express-js.svg";
import mongodbImg from "./images/mongodb.svg";
import fastapiImg from "./images/fastapi.svg";
import postmanImg from "./images/postman.svg";
import typescriptImg from "./images/typescript.svg";
import cssImg from "./images/css.svg";
import viteImg from "./images/vite.svg";
import sqlImg from "./images/sql.png";
import mysqlImg from "./images/mysql.svg";
import figmaImg from "./images/figma.png";
import photoshopImg from "./images/photoshop.svg";
import luaImg from "./images/lua.svg";
import framerMotionImg from "./images/framer-motion.svg";
import csharpImg from "./images/csharp.png";
import electronImg from "./images/electron.svg";
import pythonImg from "./images/python.svg";
import phpImg from "./images/php.svg";
import awsImg from "./images/aws.svg";
import firebaseImg from "./images/firebase.svg";
import flutterImg from "./images/flutter.svg";
import filezillaImg from "./images/filezilla.svg";
import ionicImg from "./images/ionic.svg";
import svelteImg from "./images/svelte.svg";

const Skills = () => {
	const skills = [
		{ id: 1, title: "React", Image: reactImg, category: "Front-End" },
		{ id: 2, title: "Next.js", Image: nextjsImg, category: "Front-End" },
		{ id: 3, title: "Tailwind CSS", Image: tailwindcssImg, category: "Front-End" },
		{ id: 4, title: "Git", Image: gitImg, category: "DevOps" },
		{ id: 5, title: "Docker", Image: dockerImg, category: "DevOps" },
		{ id: 6, title: "Node.js", Image: nodejsImg, category: "Back-End" },
		{ id: 7, title: "Express.js", Image: expressjsImg, category: "Back-End" },
		{ id: 8, title: "MongoDB", Image: mongodbImg, category: "Database" },
		{ id: 9, title: "FastAPI", Image: fastapiImg, category: "Back-End" },
		{ id: 10, title: "Postman", Image: postmanImg, category: "Back-End" },
		{ id: 11, title: "TypeScript", Image: typescriptImg, category: "Front-End" },
		{ id: 12, title: "CSS", Image: cssImg, category: "Front-End" },
		{ id: 13, title: "Vite", Image: viteImg, category: "Front-End" },
		{ id: 14, title: "SQL", Image: sqlImg, category: "Back-End" },
		{ id: 15, title: "MySQL", Image: mysqlImg, category: "Database" },
		{ id: 16, title: "Figma", Image: figmaImg, category: "Design" },
		{ id: 17, title: "Photoshop", Image: photoshopImg, category: "Design" },
		{ id: 18, title: "Lua", Image: luaImg, category: "Back-End" },
		{ id: 19, title: "Framer Motion", Image: framerMotionImg, category: "Front-End" },
		{ id: 20, title: "C#", Image: csharpImg, category: "Back-End" },
		{ id: 21, title: "Electron", Image: electronImg, category: "Front-End" },
		{ id: 22, title: "Python", Image: pythonImg, category: "Back-End" },
		{ id: 23, title: "PHP", Image: phpImg, category: "Back-End" },
		{ id: 24, title: "AWS", Image: awsImg, category: "DevOps" },
		{ id: 25, title: "Firebase", Image: firebaseImg, category: "DevOps" },
		{ id: 26, title: "Flutter", Image: flutterImg, category: "Front-End" },
		{ id: 27, title: "FileZilla", Image: filezillaImg, category: "DevOps" },
		{ id: 28, title: "Ionic", Image: ionicImg, category: "Front-End" },
		{ id: 29, title: "Svelte", Image: svelteImg, category: "Front-End" },
	];

	const categories = ["All", ...new Set(skills.map(skill => skill.category))];
	const [selectedCategory, setSelectedCategory] = useState("All");

	const filteredSkills = selectedCategory === "All" ? skills : skills.filter(skill => skill.category === selectedCategory);

	return (
		<>
			<section id="skills" className="skills-section">
				<h1 className="skills-title">Technologies</h1>
				<div className="categories-filter">
					{categories.map(category => (
						<div
							key={category}
							className={`category-button ${selectedCategory === category ? "active" : ""}`}
							onClick={() => setSelectedCategory(category)}
						>
							{category}
						</div>
					))}
				</div>
				<div className="skills-grid">
					{filteredSkills.map(skill => (
						<div key={skill.id} className="skill-card">
							<img src={skill.Image} className="skill-image" alt={skill.title} />
							<p className="skill-description">{skill.title}</p>
						</div>
					))}
				</div>
			</section>
		</>
	)
};

export default Skills;