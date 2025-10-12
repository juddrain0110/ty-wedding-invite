// src/Gallery.jsx
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import './Gallery.css';

import iconImage from './assets/image/icon.png';
import img1 from './assets/image/gallery01.jpg';
import img2 from './assets/image/gallery02.jpg';
import img3 from './assets/image/gallery03.jpg';
import img4 from './assets/image/gallery04.jpg';
import img5 from './assets/image/gallery05.jpg';

const images = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
];

const Gallery = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="gallery-container">
      <img src={iconImage} alt="icon" className="gallery-icon" />
      <h2 className="gallery-title">GALLERY</h2>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`Gallery ${index + 1}`}
            className="gallery-thumb"
            onClick={() => setOpenIndex(index)}
          />
        ))}
      </div>

      <Lightbox
        open={openIndex >= 0}
        close={() => setOpenIndex(-1)}
        slides={images}
        index={openIndex}
        on={{ view: ({ index }) => setOpenIndex(index) }}
      />
    </div>
  );
};

export default Gallery;
