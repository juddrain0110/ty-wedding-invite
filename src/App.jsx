// src/App.jsx

import './App.css'
import Intro from './Intro'
import Invitation from './Invitation'
import Gallery from './Gallery'

function App() {
  return (
    <div className="flex flex-col items-center bg-pink-50 min-h-screen text-center">

      <Intro />
      <Invitation />
      <Gallery />

      {/* ✅ 본문 섹션 */}
      <div className="bg-pink-100 w-full max-w-md px-4 py-8 rounded-xl shadow mt-6">
        <h1 className="text-3xl font-bold text-rose-600 mb-4">💒 결혼합니다</h1>

        <p className="text-lg mb-2">2025년 5월 20일 (토) 오후 1시</p>
        <p className="text-base mb-4">서울 강남구 예식로 123, XX웨딩홀 3층</p>

        <img
          src="/wedding.jpg" // public 폴더에 wedding.jpg 넣어주세요
          alt="신랑 신부 사진"
          className="w-full max-w-xs rounded-xl shadow mb-6"
        />

        <button className="bg-rose-500 text-white px-6 py-2 rounded-full shadow hover:bg-rose-600 transition">
          오시는 길 보기
        </button>
      </div>
    </div>
  );
}

export default App;
