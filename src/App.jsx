// Packages
import React from 'react'
import { Navbar, Hero, About, Skills, Projects, Experience, ScrollToTop, Footer, Particles } from './components'
import './App.css'

function App() {
    const experiences = [
        {
          organization: 'Company A',
          title: 'Software Engineer',
          description: 'Worked on developing web applications.',
          dateRange: {
            start: '2020-01-01',
            ongoing: true
          },
          slug: 'company-a'
        },
        {
          organization: 'Company B',
          title: 'Frontend Developer',
          description: 'Focused on building user interfaces.',
          dateRange: {
            start: '2018-02-01',
            end: '2019-12-01',
            ongoing: false
          },
          slug: 'company-b'
        }
    ];

    return (
        <div className="App flex flex-col min-h-screen">
            <Navbar />
            <main className="main-content">
                <Hero />
                <About />
                <Skills />
                <Projects />
                {/* <Experience experiences={experiences} /> TODO */} 
                <ScrollToTop />
            </main>
            <Particles />
            <Footer />
        </div>
    )
}

export default App