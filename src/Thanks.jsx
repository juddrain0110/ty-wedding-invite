import React from "react";
import "./Thanks.css";
import thanksImage from "./assets/image/thanks.png";

const Thanks = () => {
  return (
    <div className="thanks-container">
      <img src={thanksImage} alt="감사 인사" className="thanks-image" />
    </div>
  );
};

export default Thanks;
