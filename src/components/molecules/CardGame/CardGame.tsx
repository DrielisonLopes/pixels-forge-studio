import React, { ReactNode } from 'react';

import Image from "next/image";
import Button from "@/atoms/mainButton/Button";

import styles from "./CardGame.module.scss";

interface GameContentProps {
  children: ReactNode;
}

const CardGame: React.FC = (): ReactNode => {

  const cardImages = [
    "/images/cityTank/city-tank2.png",
    "/images/cityTank/city-tank1.png",
  ];

  return (
      <div className={styles.CardGame}>

        <h3 className={styles.listTitle} >Choose your Challenges</h3>

        <div className={styles.gameImages} style={{ marginBottom: '60px' }}>
          {cardImages.map((image, index) => (
            // <a key="" href="/">
              // eslint-disable-next-line react/jsx-key
              <div className={styles.cardCard} >
              <Image
                  src={image}
                  alt="Card Game Image"
                  width={250}
                  height={200}
                />
                <div className='company'>canto esquerdo</div>
                <div className='cardContent'>
                  <div className='title'>Title</div>
                  <div className='gameDescription'>
                    <div className='icon'><span>icon</span> solo</div>
                    <h3>Nome do Jogo</h3>
                    <hr />
                    <div className='Price Entry'>
                      <div className='E1'>
                        <p>prize</p>
                        <div>value</div>
                      </div>
                      <div className='E2'>
                        <p><span>icon</span> Entry</p>
                        <div>value value</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            // </a>
          ))}
        </div>

      </div>
  );
}

export default CardGame;
