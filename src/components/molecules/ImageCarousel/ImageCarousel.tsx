import React, { useState } from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import VideoPlayer from './VideoPlayer';
import { ImPlay } from "react-icons/im";
import Link from "next/link"

import home from '../../../../styles/_home.module.scss';
import styles from './ImageCarousel.module.scss';


const ImageCarousel = ({ name, description, images, video, download, category, releaseDate, multiplayer, platforms, company }) => {
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

  const [imageVisible, setImageVisible] = useState(true);
  const [playButtonVisible, setPlayButtonVisible] = useState(true);

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
      <div className={styles.aboutContainer}>
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
              {(selectedImageIndex === 0 && imageVisible ) && (
                <img
                  src={images[selectedImageIndex]}
                  alt={`Image ${selectedImageIndex}`}
                  className={styles.imageVideo}
                  onClick={() => {
                    setImageVisible(false)
                    setPlayButtonVisible(false);                
                  }}
                />
              )}     
              {selectedImageIndex === 0 && playButtonVisible && (
                <div className={styles.bgPlay}>
                  <ImPlay 
                    onClick={() => {
                      setImageVisible(false)
                      setPlayButtonVisible(false)
                    }} />
                </div>
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
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
          </div>

          <div className={styles.showCard}>
              <div className={styles.cardInfo}>
                <div className={styles.infoTile}>
                  <h3>{name}</h3>
                  <p>{category}</p>
                </div>
                <div className={styles.infoSubtitle}>
                  <p>Games Counted (after joining)</p>
                  <p>{releaseDate}</p>
                </div>
                <div className={styles.infoDescription}>
                  <p>Multiplayer - {multiplayer}</p>
                  <p>Platforms - {platforms}</p>
                </div>
                <div className={styles.infoPoints}>
                  <p>Company</p>
                  <p>{company}</p>
                </div>
                <div className={styles.infoSubmit}>
                  <div><h3>Time to Play</h3></div>
                  <div className={styles.buttonJoin}>
                    <p>Press the button...</p>
                    {download ? (
                      <Link href={download}>
                        <button>DOWNLOAD</button>
                      </Link>
                    ) : (
                      <button>Join Us</button>
                    )}
                  </div>
                  <div><p>...and <span>HAVE FUN</span></p></div>
                </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
