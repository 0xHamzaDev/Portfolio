/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#f7f7f7',
				lightDark: '#333',
				primary: '#007bff',
				secondary: '#0062cc',
				background2: '#fff',
				textColor: '#333',
				hoverBackground: '#0052cc',
			},
		},
	},
	plugins: [],
};
