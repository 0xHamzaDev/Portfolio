import { useState } from 'react';
import './skills.css';
import { skills } from '../../constant/Skills';

const Skills = () => {
	const categories = [
		'All',
		...new Set(skills.map((skill) => skill.category)),
	];
	const [selectedCategory, setSelectedCategory] = useState('All');

	const filteredSkills =
		selectedCategory === 'All'
			? skills
			: skills.filter((skill) => skill.category === selectedCategory);

	return (
		<>
			<section id="skills" className="skills-section">
				<h1 className="skills-title">Technologies</h1>
				<div className="categories-filter">
					{categories.map((category) => (
						<div
							key={category}
							className={`category-button ${selectedCategory === category ? 'active' : ''}`}
							onClick={() => setSelectedCategory(category)}
						>
							{category}
						</div>
					))}
				</div>
				<div className="skills-grid">
					{filteredSkills.map((skill) => (
						<div key={skill.id} className="skill-card">
							<img
								src={skill.Image}
								className="skill-image"
								alt={skill.title}
							/>
							<p className="skill-description">{skill.title}</p>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default Skills;
