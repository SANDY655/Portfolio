// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import SocialSidebar from './components/SocialSidebar';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <Header />
      <SocialSidebar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <About />
        <AboutSection />
        <Services />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
};

export default App;
