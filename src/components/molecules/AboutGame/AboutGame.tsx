import React from "react";

import Button from "@/atoms/mainButton/Button";

import { ABOUT_GAME } from "@/constants";

import style from "../../atoms/mainButton/Button.module.scss";
import styles from "./AboutGame.module.scss";

export default function AboutGame() {
  return (
    <div className={styles.gameContent}>
      <div className={styles.gameContainer}>
        <h1>PLAY {ABOUT_GAME.title}</h1>
        <p>Win cash + prizes.</p>
        <Button className={style.mainButton}>Signup to Play</Button>
      </div>
    </div>
  );
}
