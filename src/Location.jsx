// src/Location.jsx
import React from 'react';
import './Location.css';

import iconImage from './assets/image/icon.png';
import mapImage from './assets/image/location.jpg';

const Location = () => {
  return (
    <div className="location-container">
      <img src={iconImage} alt="icon" className="location-icon" />
      <h2 className="location-title">LOCATION</h2>

      {/* ✅ 약도 이미지 클릭 시 카카오맵 이동 */}
      <a
        href="https://map.kakao.com/link/map/파로스컨벤션,37.6319575,127.1570013"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={mapImage} alt="약도" className="location-map-image clickable" />
      </a>

      {/* 주소 */}
      <div className="location-address">
        <p>경기 남양주 다산순환로 20</p>
        <p>다산현대프리미어캠퍼스몰 E동 2층</p>
        <p>파로스컨벤션</p>
      </div>
    </div>
  );
};

export default Location;
