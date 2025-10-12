import React from 'react';
import './'
import './Intro.css';
import introImage from './assets/image/intro.png';

const Intro = () => {
  return (
    <div className="intro-container">
      <img src={introImage} alt="Intro" className="intro-image" />
      <div className="intro-text">
        <p>2025.11.15 SAT PM 2:20</p>
        <p>파로스컨벤션 2층</p>
      </div>
    </div>
  );
};

export default Intro;
