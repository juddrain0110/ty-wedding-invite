import React, { useState, useRef } from 'react';
import './Gallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startDrag, setStartDrag] = useState({ x: 0, y: 0 });

  const openModal = (index) => {
    setCurrentIndex(index);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const closeModal = () => {
    setCurrentIndex(null);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    let newZoom = zoom + (e.deltaY < 0 ? 0.2 : -0.2);
    newZoom = Math.min(Math.max(newZoom, 1), 5); // 1~5배 줌
    setZoom(newZoom);
  };

  const handleMouseDown = (e) => {
    if (zoom === 1) return;
    setDragging(true);
    setStartDrag({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    setPosition({
      x: e.clientX - startDrag.x,
      y: e.clientY - startDrag.y
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <h2 className="gallery-title">GALLERY</h2>

        {/* 데스크탑 뷰 */}
        <div className="gallery-grid desktop-view">
          <div className="page-one">
            <img src={gallery1} alt="gallery1" className="gallery-image" onClick={() => openModal(0)} />
            <img src={gallery2} alt="gallery2" className="gallery-image" onClick={() => openModal(1)} />
            <img src={gallery3} alt="gallery3" className="gallery-image wide" onClick={() => openModal(2)} />
          </div>
          <div className="page-two">
            <img src={gallery4} alt="gallery4" className="gallery-image wide" onClick={() => openModal(3)} />
            <div className="gallery-layout-2">
              <img src={gallery5} alt="gallery5" className="gallery-image tall" onClick={() => openModal(4)} />
              <img src={gallery6} alt="gallery6" className="gallery-image cropped" onClick={() => openModal(5)} />
              <img src={gallery7} alt="gallery7" className="gallery-image cropped" onClick={() => openModal(6)} />
            </div>
          </div>
        </div>

        {/* 모바일 뷰 */}
        <div className="mobile-view">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={15}
            slidesPerView={1}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`gallery${index + 1}`}
                  className="gallery-image swiper-image"
                  onClick={() => openModal(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 모달 영역 */}
      {currentIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <button className="nav-button prev" onClick={prevImage}>‹</button>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <img
              src={images[currentIndex]}
              alt="Full"
              className="modal-image"
              style={{
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                cursor: zoom > 1 ? 'grab' : 'zoom-in',
                transition: dragging ? 'none' : 'transform 0.2s ease'
              }}
              draggable={false}
            />
          </div>
          <button className="nav-button next" onClick={nextImage}>›</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
