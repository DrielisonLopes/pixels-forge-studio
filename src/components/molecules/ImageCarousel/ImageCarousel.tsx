import React, { useState } from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import VideoPlayer from './VideoPlayer';
import { GAMES } from "@/constants";
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
  const currentGame = GAMES[selectedImageIndex];

  return (
    <div className={home.pageContainer}>
      <h1 className={styles.gameTitle}>{name}</h1>
      <div className={styles.gameShow}>

        <div className={styles.showCarousel}>
          <div className={styles.mainShowContainer}>

            {selectedImageIndex === 0 ? (
              <VideoPlayer videoLink={video} />
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
                {/*  
                Logic - Download Link or Join Now
                 <a href="https://w3g3a5v6.ssl.hwcdn.net/upload2/game/2011061/8922824?GoogleAccessId=uploader@moon[…]=&hwexp=1697721832&hwsig=740ec5cc679886d5a60fb9aa503e9089" download="City Tank">A Download</a>
                <br />
                <Link href="https://w3g3a5v6.ssl.hwcdn.net/upload2/game/2011061/8922824?GoogleAccessId=uploader@moon[…]=&hwexp=1697721832&hwsig=740ec5cc679886d5a60fb9aa503e9089" download>LINK Download</Link>
                <br />
              <button>DOWNLOAD</button>*/}
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
