import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    if (index < 0) {
      setCurrentIndex(images.length - 1);
    } else if (index >= images.length) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  return (
    <div className="carousel">
      <button className="carousel-btn prev-btn" onClick={prevSlide}>&#10094;</button>
      {images.map((image, index) => (
        <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
          <img src={image} alt={`Image ${index}`} />
        </div>
      ))}
      <button className="carousel-btn next-btn" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
