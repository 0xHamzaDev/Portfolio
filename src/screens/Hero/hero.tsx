import { useState } from 'react';
import './hero.css';
import { BsGithub, BsTwitterX, BsLinkedin } from 'react-icons/bs';
import { MdDownload } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { FaLinkedinIn } from 'react-icons/fa6';

const Hero = () => {
	return (
		<>
			<section className="hero-section">
				<div className="hero-container">
					<h1 className="hero-title">
						Hello, I'm{' '}
						<span className="hero-name">Hamza Alsherif</span>
					</h1>
					<div className="hero-subtitle">
						A Full-Stack Software Engineer and Data Scientist
					</div>
					<div className="hero-resume">
						<div className="resume-button">Download My Resume</div>
					</div>
					<div className="hero-social">
						<ul className="social-list">
							<li>
								<a
									className="social-link"
									target="_blank"
									style={{ width: '52px', height: '52px' }}
									href="https://www.linkedin.com/in/hamza-alsharif-6a09a4221/"
									aria-label="LinkedIn Link"
								>
									<div className="social-icon">
										<FaLinkedinIn size={22} />
									</div>
									<div className="social-icon-hover">
										<FaLinkedinIn size={22} />
									</div>
								</a>
							</li>
							<li>
								<a
									className="social-link"
									target="_blank"
									style={{ width: '52px', height: '52px' }}
									href="https://github.com/StrayDevv"
									aria-label="Github Link"
								>
									<div className="social-icon">
										<BsGithub size={22} />
									</div>
									<div className="social-icon-hover">
										<BsGithub size={22} />
									</div>
								</a>
							</li>
							<li>
								<a
									className="social-link"
									target="_blank"
									style={{ width: '52px', height: '52px' }}
									href="mailto:enghamzaalsherif@gmail.com"
									aria-label="Email"
								>
									<div className="social-icon">
										<MdEmail size={22} />
									</div>
									<div className="social-icon-hover">
										<MdEmail size={22} />
									</div>
								</a>
							</li>
							<li>
								<a
									className="social-link"
									target="_blank"
									style={{ width: '52px', height: '52px' }}
									href="https://x.com/StraySA1"
									aria-label="X Link"
								>
									<div className="social-icon">
										<BsTwitterX size={22} />
									</div>
									<div className="social-icon-hover">
										<BsTwitterX size={22} />
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
