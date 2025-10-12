import React, { useState } from 'react';
import './Gallery.css';

import gallery1 from './assets/image/gallery1.jpg';
import gallery2 from './assets/image/gallery2.jpg';
import gallery3 from './assets/image/gallery3.jpg';
import gallery4 from './assets/image/gallery4.jpg';
import gallery5 from './assets/image/gallery5.jpg';
import gallery6 from './assets/image/gallery6.jpg';
import gallery7 from './assets/image/gallery7.jpg';

const images = [
  gallery1, gallery2, gallery3,
  gallery4, gallery5, gallery6, gallery7
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const prevImage = (e) => {
    e.stopPropagation(); // 배경 클릭 방지
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <h2 className="gallery-title">GALLERY</h2>

        {/* 첫 번째 그룹 */}
        <div className="gallery-grid page-one">
          <img src={gallery1} alt="gallery1" className="gallery-image" onClick={() => openModal(0)} />
          <img src={gallery2} alt="gallery2" className="gallery-image" onClick={() => openModal(1)} />
          <img src={gallery3} alt="gallery3" className="gallery-image wide" onClick={() => openModal(2)} />
        </div>

        {/* 두 번째 그룹 */}
        <div className="gallery-grid page-two">
          <img src={gallery4} alt="gallery4" className="gallery-image wide" onClick={() => openModal(3)} />

          <div className="gallery-layout-2">
            <img src={gallery5} alt="gallery5" className="gallery-image tall" onClick={() => openModal(4)} />
            <img src={gallery6} alt="gallery6" className="gallery-image cropped" onClick={() => openModal(5)} />
            <img src={gallery7} alt="gallery7" className="gallery-image cropped" onClick={() => openModal(6)} />
          </div>
        </div>
      </div>

      {/* ✅ 모달 */}
      {currentIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <button className="nav-button prev" onClick={prevImage}>‹</button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentIndex]} alt="Full" className="modal-image" />
          </div>
          <button className="nav-button next" onClick={nextImage}>›</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
