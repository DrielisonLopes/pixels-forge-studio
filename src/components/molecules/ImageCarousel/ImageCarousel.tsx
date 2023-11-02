import React, { useState } from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { GAMES } from "@/constants";

import home from '../../../../styles/_home.module.scss';
import styles from './ImageCarousel.module.scss';


const ImageCarousel = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleNextImage = () => {
    const newIndex = (selectedImageIndex + 1) % images.length;
    setSelectedImageIndex(newIndex);
  };

  const handlePreviousImage = () => {
    const newIndex = (selectedImageIndex - 1 + images.length) % images.length;
    setSelectedImageIndex(newIndex);
  };

  const [isImageVisible, setImageVisibility] = useState(true);
  const currentGame = GAMES[selectedImageIndex];

  return (
    <div className={home.pageContainer}>
      <h1 className={styles.gameTitle}>{currentGame.name}</h1>
      <div className={styles.gameShow}>

        <div className={styles.showCarousel}>
          <div className={styles.mainShowContainer}>

            {selectedImageIndex === 0 ? (
              <video controls width="100%" height="100%">
              <source src="https://www.youtube.com/embed/cGZ4X7cER8k?si=iMqW4zDXjJot2xVf" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            ) : (
              <img
                src={images[selectedImageIndex]}
                alt={`Image ${selectedImageIndex}`}
              />
            )}
            {(selectedImageIndex === 0 && isImageVisible ) && (
              <img
                src={images[selectedImageIndex]}
                alt={`Image ${selectedImageIndex}`}
                className={styles.imageVideo}
                onClick={() => setImageVisibility(false)}
              />
            )}        
          </div>
          <div className={styles.thumbnailCarousel}>
            <button className={styles.prev} onClick={handlePreviousImage}><PiCaretLeftBold/></button>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Image ${index}`}
                  className={`${styles.thumbnail} ${index === selectedImageIndex ? styles.selected : ''}`}
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
            <button className={styles.next} onClick={handleNextImage}><PiCaretRightBold/></button>
          </div>
          <div className={styles.gameDescription}>
            <h1>{currentGame.name}</h1>
            <p>{currentGame.description}</p>
          </div>
        </div>

        <div className={styles.showCard}>
          <div className={styles.cardInfo}>
            <div className={styles.infoTile}>
              <p>Objective</p>
              <h3>Highest Total Kills</h3>
            </div>
            <div className={styles.infoSubtitle}>
              <p>Games Counted (after joining)</p>
              <p>Up To Best 100 Winning Games</p>
            </div>
            <div className={styles.infoDescription}>
              <p>Queue</p>
              <p>ARAM</p>
            </div>
            <div className={styles.infoPoints}>
              <p>Owner</p>
              <p>Pixel Forge Studio</p>
            </div>
            <div className={styles.infoSubmit}>
              <div><h3>Prize Pool</h3></div>
              <div className={styles.buttonJoin}>
                <p>Boost the prize pool!</p>
                <button>JOIN Now</button>
              </div>
              <div><p>Entry <span>FREE</span></p></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ImageCarousel;
