import React, { ReactNode } from "react";

import Image from "next/image";
import Button from "@/atoms/mainButton/Button";
import { PiGlobeSimpleFill, PiGameControllerFill, PiCurrencyCircleDollarFill, PiHammerFill } from "react-icons/pi";

import styles from "./CardGame.module.scss";

interface GameContentProps {
  children: ReactNode;
}

const CardGame: React.FC = (): ReactNode => {
  const cardImages = [
    "/images/fate-samurai-remnant.jpg",
    "/images/cityTank/city-tank1.png",
  ];

  return (
    <div className={styles.cardsGames}>
      <h3 className={styles.cardTitle}>Choose your Challenges</h3>

      <div className={styles.cardGame} >
        {cardImages.map((image, index) => (
           <a key="" href="/Game">
          <div className={styles.gameContainer} key={index}>
            <Image src={image} alt="Card Game Image" width={250} height={200} />
            <div className={styles.gameCompany}><span><PiGlobeSimpleFill/></span>PFS</div>
            <div className={styles.gameTitle}>Title of the game</div>
            <div className={styles.gameContent}>
              <div className={styles.contentDescription}>
                <div className={styles.descriptionIcon}>
                  <span><PiGameControllerFill/></span>Solo
                </div>
                <h3>Battletoads & Double Dragon</h3>
                
                <div className={styles.descriptionPrice}>
                  <div className={styles.pricePool}>
                    <p>Prize Pool</p>
                    <div><span><PiCurrencyCircleDollarFill/></span>9.99</div>
                  </div>
                  <div className={styles.priceEntry}>
                    <p>
                      Entry
                    </p>
                    <div><span><PiHammerFill/></span>Free</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           </a>
        ))}
      </div>
    </div>
  );
};

export default CardGame;
