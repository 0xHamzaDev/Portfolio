import { useState } from 'react';
import './navbar.css';

const Navbar = () => {
	const handleNavClick = (event, id) => {
		event.preventDefault();
		document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<header className="navbar">
				<div className="container">
					<h1 className="title">Hamza Alsherif</h1>
					<nav>
						<ul className="nav-list">
							<li>
								<a
									href="#about"
									onClick={(e) => handleNavClick(e, 'about')}
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#projects"
									onClick={(e) =>
										handleNavClick(e, 'projects')
									}
								>
									Projects
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};

export default Navbar;
