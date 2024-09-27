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
        "As an enthusiastic Web and App Developer, I am passionate about creating high-quality, visually appealing, and technically advanced digital experiences. I focus on designing and developing web environments that are both functional and user-friendly. I enjoy integrating creativity and cutting-edge technology into my projects, pushing boundaries to deliver responsive, efficient, and scalable solutions. With an eye on future growth, I aim to build platforms that adapt to the evolving needs of users and businesses."</p>
      </div>
      <div className="portfolio-info">

      </div>
      <Link/>
      <Skill/>
      <Id/>
      
    </div>
  );
};

export default Portfolio;
