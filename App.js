import React from 'react';
import './App.css';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Achievements from './Achievements';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App" id="home">
      {/* Background Effects */}
      <div className="noise" />
      <div className="grid-bg" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
