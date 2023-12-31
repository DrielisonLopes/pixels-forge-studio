import React, { ReactNode } from "react";
import Link from 'next/link';

import {
  PiGlobeSimpleFill,
  PiGameControllerFill,
  PiUsersThreeBold,
  PiGhostBold,
} from "react-icons/pi";

import { GAMES } from "@/constants";
import home from '../../../../styles/_home.module.scss';
import styles from "./CardGame.module.scss";

interface GameContentProps {
  children: ReactNode;
}

const CardGame: React.FC = (): ReactNode => {
  return (
    <div className={home.pageContainer}>
      <div className={styles.cardsGames}>
        <h3 className={styles.cardTitle}>Games</h3>

        <div className={styles.cardGame}>
          {GAMES.slice(0, 4).map((game, index) => (
            <Link key={index} href={`/games/${game.slug}`}>
              <div className={styles.gameContainer} key={index}>
                <img src={game.thumbnail} alt={game.name} />
                <div className={styles.gameCompany}>
                  <span>
                    <PiGlobeSimpleFill />
                  </span>
                  PFS
                </div>
                <div className={styles.gameTitle}>{game.name}</div>
                <div className={styles.gameContent}>
                  <div className={styles.contentDescription}>
                    <div className={styles.descriptionIcon}>
                      <span>
                      <PiGhostBold />
                      </span>
                      {game.category}
                    </div>
                    <h3>{game.company}</h3>

                    <div className={styles.descriptionPrice}>
                      <div className={styles.pricePool}>
                        <p>Players</p>
                        <div>
                          <span>
                            <PiUsersThreeBold />
                          </span>
                          {game.multiplayer}
                        </div>
                      </div>
                      <div className={styles.priceEntry}>
                        <p>Platforms</p>
                        <div>
                          <span>
                            <PiGameControllerFill />
                          </span>
                          {game.platforms}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGame;
