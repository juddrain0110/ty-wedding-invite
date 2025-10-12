import React from "react";
import "./Location.css";

import iconImage from "./assets/image/icon.png";
import mapImage from "./assets/image/location.jpg";
import iconBus from "./assets/image/icon_bus.png";
import iconTrain from "./assets/image/icon_train.png";
import iconCar from "./assets/image/icon_car.png";

const Location = () => {
  return (
    <div className="location-container">
      {/* 상단 아이콘 */}
      <img src={iconImage} alt="icon" className="location-icon" />
      <h2 className="location-title">LOCATION</h2>

      {/* 약도 이미지 클릭 시 카카오맵 열기 */}
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

      {/* 교통수단 안내 */}
      <div className="transport-section">

        <div className="transport-item">
          <img src={iconBus} alt="shuttle" className="transport-icon" />
          <div className="transport-text">
            <h4>셔틀버스 이용시</h4>
            <p>구리역 7번 출구 (예식 행사 시 운행)</p>
          </div>
        </div>

        <div className="transport-item">
          <img src={iconBus} alt="bus" className="transport-icon" />
          <div className="transport-text">
            <h4>버스 이용시</h4>
            <p>
              일반버스 : 79, 95, 땡큐12, 땡큐50 (도농고)
              <br />
              직행버스 : 1006 (현대프리미엄아울렛 하차)
            </p>
          </div>
        </div>

        <div className="transport-item">
          <img src={iconTrain} alt="train" className="transport-icon" />
          <div className="transport-text">
            <h4>지하철 이용시</h4>
            <p>
              지하철 8호선 다산역 하차 → 버스 79, 95번 → 도농고앞
            </p>
          </div>
        </div>

        <div className="transport-item">
          <img src={iconCar} alt="car" className="transport-icon" />
          <div className="transport-text">
            <h4>승용차 이용시</h4>
            <p>
              네비게이션: "다산순환로 20" 또는 "파로스컨벤션" 입력
              <br />
              (다산현대프리미어캠퍼스몰 E동 GATE2 주차)
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Location;
