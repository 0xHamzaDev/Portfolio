import { useState } from 'react';
import './footer.css';
import { BsGithub, BsTwitterX, BsLinkedin } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
	return (
		<>
			<div className="footer-container">
				<div className="footer-content">
					<div className="footer-gradient">
						<div className="footer-gradient-line"></div>
					</div>
					<div className="footer-text">
						<p className="footer-credits">
							© 2024 Hamza Alsherif. All rights reserved.
						</p>
					</div>
					<div className="footer-social">
						<ul className="social-list">
							<li>
								<a
									className="social-link"
									target="_blank"
									style={{ width: '34px', height: '34px' }}
									href="https://www.linkedin.com/in/hamza-alsharif-6a09a4221/"
									aria-label="LinkedIn Link"
								>
									<div className="social-icon">
										<FaLinkedinIn size={20} />
									</div>
									<div className="social-icon-hover">
										<FaLinkedinIn size={20} />
									</div>
								</a>
							</li>
							<li>
								<a
									className="social-link"
									target="_blank"
									style={{ width: '34px', height: '34px' }}
									href="https://github.com/0xHamzaDev"
									aria-label="Github Link"
								>
									<div className="social-icon">
										<BsGithub size={20} />
									</div>
									<div className="social-icon-hover">
										<BsGithub size={20} />
									</div>
								</a>
							</li>
							<li>
								<a
									className="social-link"
									target="_blank"
									style={{ width: '34px', height: '34px' }}
									href="mailto:me@hamz4.com"
									aria-label="Email"
								>
									<div className="social-icon">
										<MdEmail size={20} />
									</div>
									<div className="social-icon-hover">
										<MdEmail size={20} />
									</div>
								</a>
							</li>
							<li>
								<a
									className="social-link"
									target="_blank"
									style={{ width: '34px', height: '34px' }}
									href="https://x.com/hamza_alsherif"
									aria-label="X"
								>
									<div className="social-icon">
										<BsTwitterX size={20} />
									</div>
									<div className="social-icon-hover">
										<BsTwitterX size={20} />
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
