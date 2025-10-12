import React from 'react';
import './Intro.css';
import introImage from './assets/image/intro.jpg';

const Intro = () => {
  return (
    <div className="intro-container">
        <img src={introImage} alt="Intro" className="intro-image" />
        <div className="mt-4 text-lg text-gray-800 leading-tight font-serif">
            <p className="mb-1">2025.11.15 SAT PM 2:20</p>
            <p className="text-sm">파로스컨벤션 2층</p>
        </div>
    </div>
  );
};

export default Intro;
