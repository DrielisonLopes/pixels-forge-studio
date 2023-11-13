import React, { useState } from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import VideoPlayer from './VideoPlayer';
import { ImPlay } from "react-icons/im";
import Link from "next/link"

import home from '../../../../styles/_home.module.scss';
import styles from './ImageCarousel.module.scss';


const ImageCarousel = ({ name, description, images, video }) => {
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

  let videoComponent;

  if (video.includes('https://firebasestorage.googleapis.com/')) {
    videoComponent = (
      <video controls width="100%" height="100%">
        <source src={video} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
    );
  } else {
    videoComponent = <VideoPlayer videoLink={video} />;
  }

  return (
    <div className={home.pageContainer}>
      <h1 className={styles.gameTitle}>{name}</h1>
      <div className={styles.gameShow}>

        <div className={styles.showCarousel}>
          <div className={styles.mainShowContainer}>

            {selectedImageIndex === 0 ? (
              videoComponent
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
              {selectedImageIndex === 0 && <ImPlay 
                onClick={() => setImageVisibility(false) }/>}   
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
            <h1>{name}</h1>
            <p>{description}</p>
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
                <Link href="https://firebasestorage.googleapis.com/v0/b/pixels-forge-studio.appspot.com/o/games%2Fcity-tank%2FCityTank.zip?alt=media&token=2ab6ec54-12a9-4fdd-ac45-9ab0242a210c&_gl=1*dh56xg*_ga*Mzk5MTUzNzEzLjE2OTg5MzkwNzY.*_ga_CW55HF8NVT*MTY5OTI1ODg4My40LjEuMTY5OTI2MTA1My42MC4wLjA."><button>DOWNLOAD</button></Link>
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
