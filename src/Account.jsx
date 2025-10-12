import React, { useState } from "react";
import "./Account.css";
import thanksImage from "./assets/image/thanks.png"; // ✅ 감사 이미지 추가

const Account = () => {
  const [copied, setCopied] = useState("");

  /** 계좌번호 복사 */
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className="account-container">
      {/* 상단 하트와 제목 */}
      <div className="account-header">
        <div className="heart">❤</div>
        <h2 className="account-title">마음 전하실 곳</h2>
      </div>

      {/* 안내 문구 */}
      <p className="account-message">
        멀리서도 축하의 마음을 전하고 싶은 분들을 위해
        <br />
        계좌번호를 안내드립니다.
        <br />
        소중한 축하를 보내주셔서 감사드립니다.
      </p>

      <hr className="account-divider" />

      {/* 신랑측 */}
      <div className="account-section">
        <div className="account-label groom">신랑측</div>
        <div className="account-list">
          <p>
            신랑{" "}
            <span
              className="account-number"
              onClick={() => handleCopy("355-890569-65407")}
            >
              355-890569-65407
            </span>{" "}
            (하나은행)
          </p>
          <p>
            신랑 모{" "}
            <span
              className="account-number"
              onClick={() => handleCopy("351-00093-15523")}
            >
              351-00093-15523
            </span>{" "}
            (농협은행)
          </p>
        </div>
      </div>

      {/* 신부측 */}
      <div className="account-section">
        <div className="account-label bride">신부측</div>
        <div className="account-list">
          <p>
            신부{" "}
            <span
              className="account-number"
              onClick={() => handleCopy("126-126770-01-019")}
            >
              126-126770-01-019
            </span>{" "}
            (기업은행)
          </p>
          <p>
            신부 부{" "}
            <span
              className="account-number"
              onClick={() => handleCopy("317025-52-046051")}
            >
              317025-52-046051
            </span>{" "}
            (농협은행)
          </p>
          <p>
            신부 모{" "}
            <span
              className="account-number"
              onClick={() => handleCopy("317025-51-322604")}
            >
              317025-51-322604
            </span>{" "}
            (농협은행)
          </p>
        </div>
      </div>

      {/* 복사 완료 메시지 */}
      {copied && <div className="copy-toast">복사되었습니다: {copied}</div>}

    </div>
  );
};

export default Account;
