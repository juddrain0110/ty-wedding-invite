import React from "react";
import "./App.css";

/* 섹션 컴포넌트 import */
import Intro from "./Intro";
import Invitation from "./Invitation";
import Calendar from "./Calendar";
import Gallery from "./Gallery";
import Location from "./Location";
import Account from "./Account";
import Thanks from "./Thanks";

function App() {
  return (
    <div className="app-container">
      {/* 인트로 섹션2 */}
      <section id="intro">
        <Intro />
      </section>

      {/* 인비테이션 섹션 */}
      <section id="invitation">
        <Invitation />
      </section>

      {/* 캘린더 섹션 */}
      <section id="calendar">
        <Calendar />
      </section>

      {/* 갤러리 섹션 */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* 위치 섹션 */}
      <section id="location">
        <Location />
      </section>

      {/* 계좌 안내 섹션 */}
      <section id="account">
        <Account />
      </section>

      {/* 감사 인사 섹션 */}
      <section id="thanks">
        <Thanks />
      </section>
    </div>
  );
}

export default App;
