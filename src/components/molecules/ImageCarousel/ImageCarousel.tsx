import React, { useState } from 'react';

import styles from './ImageCarousel.module.scss';


const ImageCarousel = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <>
    <h1 className={styles.gameTitle}>City Tank</h1>
    <div className={styles.gameShow}>

      <div className={styles.showCarousel}>
        <div className={styles.mainShowContainer}>

          {selectedImageIndex === 0 ? (
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XPKtuM19-VQ?si=emdi1l0Gu35Tw0aQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          ) : (
            <img
              src={images[selectedImageIndex]}
              alt={`Image ${selectedImageIndex}`}
            />
          )}
          <img src={images[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} />
        </div>
        <div className={styles.thumbnailCarousel}>
          
          {images.map((image, index) => (
            <div key={index} >
              <img
                src={image}
                alt={`Image ${index}`}
                className={`${styles.thumbnail} ${index === selectedImageIndex ? 'selected' : ''}`}
                onClick={() => handleImageClick(index)}
                />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.showCard}>
        <div className={styles.cardInfo}>
          <div className={styles.infoTile}>
            <p>Objective</p>
            <h3>Highest Total Kills</h3>
          </div>
          <div className={styles.infoSubtitle}>
            <p>Objective</p>
            <p>Objective</p>
          </div>
          <div className={styles.infoDescription}>
            <p>Objective</p>
            <p>Objective</p>
          </div>
          <div className={styles.infoPoints}>
            <p>Objective</p>
            <p>Objective</p>
          </div>
          <div className={styles.infoSubmit}>
            <div><h3>Prize Pool</h3></div>
            <div>
              <p>Boost</p>
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

    </>
  );
};

export default ImageCarousel;
