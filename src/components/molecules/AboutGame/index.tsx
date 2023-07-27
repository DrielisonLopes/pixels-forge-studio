import React, { ReactNode } from "react";

import GameList from "@/molecules/GameList";
import { ABOUT_GAME } from "@/constants";
import styles from "./AboutGame.module.scss";

export default function AboutGame() {
  return (
    <div className={styles.gameContent}>
      <div>
        <h1>✨ {ABOUT_GAME.title}</h1>
        <p>{ABOUT_GAME.description}</p>
        <button>Download</button>
        <button className="transparent">More info</button>
      </div>
      <GameList />
    </div>
  );
}
