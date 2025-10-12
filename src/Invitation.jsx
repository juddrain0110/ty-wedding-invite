// src/Invitation.jsx
import React from 'react';
import './Invitation.css';

const Invitation = () => {
  return (
    <div className="invitation-container">
      <div className="invitation-content">

        <h2 className="invitation-title">INVITATION</h2>

        <h3 className="invitation-subtitle">소중한 분들을 초대합니다.</h3>

        <div className="invitation-message">
          <p>함께할 때 가장 빛나는 서로를 만나</p>
          <p>평생의 동반자가 되기로 약속했습니다.</p>
          <br />
          <p>언제나 친구처럼 가까이에서 웃음을 나누고</p>
          <p>서로에게 힘이 되는 부부로 살겠습니다.</p>
          <br />
          <p>저희 두 사람의 새로운 시작을</p>
          <p>따뜻한 축복으로 함께해 주시면 감사하겠습니다.</p>
        </div>

        <div className="invitation-parents">
          <p>
            <strong>김상조 · 조원자</strong> 의 장남 <strong>김태훈</strong>
          </p>
          <p>
            <strong>이순규 · 서연순</strong> 의 장녀 <strong>이여진</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
