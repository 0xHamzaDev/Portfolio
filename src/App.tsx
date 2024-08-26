// Packages
import React from 'react';
import { Navbar, Hero, About, Skills, Projects, Experience, ScrollToTop, Footer, Particles } from './screens';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App flex flex-col min-h-screen">
			<Navbar />
			<main className="main-content">
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Experience/>
				<ScrollToTop />
			</main>
			<Particles />
			<Footer />
		</div>
	);
}

export default App;
