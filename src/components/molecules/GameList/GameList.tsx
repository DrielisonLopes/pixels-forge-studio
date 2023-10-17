import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

import Button from "@/atoms/mainButton/Button";

import { GAMES } from '@/constants';
import home from '../../../../styles/_home.module.scss';
import style from "../../atoms/mainButton/Button.module.scss";
import styles from "./GameList.module.scss";

interface GameContentProps {
  children: ReactNode;
}

const GameList: React.FC = (): ReactNode => {

  return (
    <div className={home.pageContainer}>

      <div className={styles.gameList}>
        
        <h3 className={styles.listTitle} >FEATURED GAMES</h3>
        <div className={styles.gameImages}>
        {GAMES.map((game, index) => (
          <Link key={index} href={`/games/${game.slug}`}>
            <Image
              src={game.thumbnail}
              alt={game.name}
              width={250}
              height={200}
            />
            </Link>
          ))}
        </div>

        <h3 className={styles.listTitle} >COMING SOON</h3>
        <div className={`${styles.gameImages} ${styles.comingSoon}`}>
          <Image
            src="/images/fate-samurai-remnant.jpg"
            alt="City Tank Game play Image"
            width={500}
            height={200}
          />
          <aside>
            <h2>Coming soon a NEW MULTIPLAYER GAME to be able to play and have fun with your friends</h2>
            <Button className={style.mainButton}>Preview</Button>
          </aside>
        </div>

      </div>
    </div>
  );
}

export default GameList;
