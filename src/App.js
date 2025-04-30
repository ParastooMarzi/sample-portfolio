import React from 'react';
import './App.css';
import BrandsSection from './Components/BrandsSection/BrandsSection';
import StrategySection from './Components/StrategySection/StrategySection';
import MotivationSection from './Components/MotivationSection/MotivationSection';
import logo from './Assets/logo.png';
import Eng from './Assets/Eng.png.png'
import WhyIDoThis from './Components/WhyIDoThis/WhyIDoThis';
import ServicesSection from './Components/ServicesSection/ServicesSection';
import ContactSection from './Components/ContactSection/ContactSection';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="logo-section">
            <img src={logo} alt="Logo" className="logo" />
          
          </div>
          <nav className="navigation">
            <a href="#">Interim CMO & CBO</a>
            <a href="#">Services</a>
            <a href="#">Experience</a>
            <a href="#">About</a>
          </nav>
          <div className="actions">
            <button className="contact-button">Keep in Touch →</button>
            <img src={Eng} alt="Language" className="flag" />
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>Navigating the intersection of<br />growth, relevance, and agility</h1>
          <p>Brand strategy as your growth compass.<br />
          We navigate with vision, agility, and direction – never control.</p>
          <button className="appointment-button">Get Free Appointment →</button>
        </div>
      </section>
      <BrandsSection/>
      <StrategySection/>
      <MotivationSection/>
      <WhyIDoThis/>
      <ServicesSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
