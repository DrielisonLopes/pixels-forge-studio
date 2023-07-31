import React, { ReactNode } from 'react';

import Image from "next/image";
import Button from "@/atoms/mainButton/Button";

import style from "../../atoms/mainButton/Button.module.scss";
import styles from "./GameList.module.scss";

interface GameContentProps {
  children: ReactNode;
}

const GameList: React.FC = (): ReactNode => {

  const tankImages = [
    "/images/cityTank/city-tank2.png",
    "/images/cityTank/city-tank1.png",
    "/images/cityTank/city-tank3.png",
    "/images/tank.jpg",
    "/images/tank2.jpeg",
  ];

  return (
      <div style={{ marginTop: '50px' }}>
        <h3 style={{ letterSpacing: '3px' }}>FEATURED GAMES</h3>
        <div className={styles.gameImages}>
          {tankImages.map((image, index) => (
            <div key={index}>
            <Image
              src={image}
              alt="City Tank Game play Image"
              width={250}
              height={200}
            />
            </div>
          ))}
        </div>

        <h3 style={{ letterSpacing: '3px' }}>COMING SOON</h3>
        <div className={`${styles.gameImages} ${styles.comingSoon}`}>
          <Image
            src="/images/cityTank/city-tank1.png"
            alt="City Tank Game play Image"
            width={500}
            height={200}
          />
          <aside>
            <h2>Coming soon a NEW MULTIPLAYER GAME to be able to play and have fun with your friends</h2>
            <Button className={style.mainButton}>Preview</Button>
          </aside>
        </div>

        <h3 style={{ letterSpacing: '3px' }}>RECOMMENDED FOR YOU</h3>
        <div className={styles.gameImages} style={{ marginBottom: '60px' }}>
          {tankImages.map((image, index) => (
            <div key={index}>
            <Image
              src={image}
              alt="City Tank Game play Image"
              width={250}
              height={200}
            />
            </div>
          ))}
        </div>
      </div>
  );
}

export default GameList;
