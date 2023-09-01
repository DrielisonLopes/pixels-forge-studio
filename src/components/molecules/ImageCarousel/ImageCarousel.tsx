import React, { useState } from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

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

  return (
    <div className={home.pageContainer}>
      <h1 className={styles.gameTitle}>City Tank</h1>
      <div className={styles.gameShow}>

        <div className={styles.showCarousel}>
          <div className={styles.mainShowContainer}>

            {selectedImageIndex === 0 ? (
              <video controls width="100%" height="100%">
              <source src="https://firebasestorage.googleapis.com/v0/b/pixels-forge-studio.appspot.com/o/games%2Fcity-tank%2FCity%20Tank%20-%20Compress.mp4?alt=media&token=1381b297-7fe0-4267-ab1c-fcec688ea0b5" type="video/mp4" />
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

      <div className={styles.gameDescription}>
        <h1>About City Tank</h1>
        <p>
          ​Inject new Legendary Lords, Heroes, and Units into your games to vastly expand your methods of play on the campaign map and within battles. The Changeling, Yuan Bo, and Mother Ostankya each bring their own unique campaign mechanics to their races, ​ ​with goals separate from the Ursus storyline in the Realm of Chaos campaign, and new units to help them pursue victory on their terms. 
          3 new Legendary Lords emerge from the shadows.
          Enact malign schemes and trickery with the Changeling of Tzeentch.
          Establish and execute grand stratagems on a global scale as Yuan Bo of Grand Cathay.
          Conjure powerful hexes and incantations whilst engaging in witchcraft, flipping campaigns on their head as Mother Ostankya of Kislev. 
          Scatter magical spells far and wide with the Blue Scribes of Tzeentch; a new Legendary Hero. 
          ​Expand your roster with 12 additional overall units, and enhance your troops with 9 new Regiments of Renown.
        </p>
      </div>
    </div>
  );
};

export default ImageCarousel;
