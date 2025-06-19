import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <div className="App">
      <Navbar logo="MyReactApp" navItems={navItems} />

      <div className="main-content">
        <section id="home" className="section">
          <div className="container">
            <h1>Welcome to My React TypeScript App</h1>
            <p>This is a modern React app built with TypeScript and Vite!</p>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <h2>About Us</h2>
            <p>Learn more about what we do and our mission.</p>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2>Our Services</h2>
            <p>Discover the services we offer to our clients.</p>
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="container">
            <h2>Portfolio</h2>
            <p>Check out our latest work and projects.</p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2>Contact Us</h2>
            <p>Get in touch with us for more information.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
