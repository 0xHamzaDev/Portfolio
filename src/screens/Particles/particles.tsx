import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesComponent() {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		console.log(container);
	}, []);

	return (
		<Particles
			className="absolute inset-0 z-0"
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				background: {
					color: {
						value: 'rgb(7, 9, 13)',
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						onClick: {
							enable: false,
						},
						onHover: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						repulse: {
							distance: 150,
							duration: 1.5,
						},
					},
				},
				particles: {
					color: {
						value: ['#AA6DA3', '#915EFF'],
					},
					links: {
						enable: false,
					},
					move: {
						direction: 'none',
						enable: true,
						outModes: {
							default: 'bounce',
						},
						speed: 1,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 50,
					},
					opacity: {
						random: {
							enable: true,
							minimumValue: 0.1,
						},
						value: {
							min: 0,
							max: 1,
						},
						animation: {
							enable: true,
							speed: 1,
							startValue: 'random',
						},
					},
					shape: {
						type: 'circle',
					},
					size: {
						value: { min: 1, max: 5 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
}
