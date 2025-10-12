import React from 'react';
import './Intro.css';
import introImage from './assets/image/intro.jpg';

const Intro = () => {
  return (
    <div className="intro-container">
      {/* 이름 영역 (세로 배치) */}
      <div className="intro-names-vertical">
        <p className="intro-name">김태훈</p>
        <p className="intro-divider">ㅡ</p>
        <p className="intro-name">이여진</p>
      </div>

      {/* 대표 이미지 */}
      <img
        src={introImage}
        alt="Intro"
        className="intro-image"
        loading="lazy"
      />

      {/* 날짜 및 장소 */}
      <div className="intro-text">
        <p className="intro-date">2025.11.15 SAT PM 2:20</p>
        <p className="intro-location">파로스컨벤션 2층</p>
      </div>
    </div>
  );
};

export default Intro;
