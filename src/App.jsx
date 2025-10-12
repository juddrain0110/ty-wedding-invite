import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center text-center px-4 py-8">
      <h1 className="text-3xl font-bold text-rose-600 mb-4">💒 지훈 & 수진 결혼합니다</h1>

      <p className="text-lg mb-2">2025년 5월 20일 (토) 오후 1시</p>
      <p className="text-base mb-4">서울 강남구 예식로 123, XX웨딩홀 3층</p>

      <img
        src="/wedding.jpg" // public 폴더에 넣어주세요
        alt="신랑 신부 사진"
        className="w-full max-w-xs rounded-xl shadow mb-6"
      />

      <button className="bg-rose-500 text-white px-6 py-2 rounded-full shadow hover:bg-rose-600 transition">
        오시는 길 보기
      </button>
    </div>
  );
}

export default App
