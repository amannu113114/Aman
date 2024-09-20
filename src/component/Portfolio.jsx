import React from 'react';
import './Portfolio.css';
import Link from './Link';
import Skill from './Skill';
import Id from './Id';
const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1 className="portfolio-title">PORTFOLIO</h1>
        <p className="portfolio-subtitle">ENTHUSIASTIC DEVELOPER</p>
      </div>
      <div className="portfolio-body">
        <p className="portfolio-name">AMAN KUMAR</p>
        <p className="portfolio-description">
          Enthusiastic Web/App Developer with high resolution design and developed web environment based on future creativity and intelligence programmed with digital realms.
        </p>
      </div>
      <div className="portfolio-info">
        <div className="portfolio-info-item skills">
          <h4>Skills</h4>
          <p>Frontend Developer</p>
          <p>Language Programing</p>
          <p>Bash Script</p>
        </div>
        <div className="portfolio-info-item projects">
          <h4>Projects</h4>
          <p>Medikit</p>
          <p>Portfolio itself</p>
          <p>GSAP Collection</p>
        </div>
        <div className="portfolio-info-item contact">
          <h4>Experience</h4>
          <p>1+ year Frontend</p>
          <p>2+ year Java Programming</p>
          <p>0+ year Algorithm</p>

        </div>
      </div>
      <Link/>
      <Skill/>
      <Id/>
      
    </div>
  );
};

export default Portfolio;
