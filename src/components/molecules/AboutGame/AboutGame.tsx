import React from "react";

import Button from "@/atoms/mainButton/Button";

import { ABOUT_GAME } from "@/constants";

import style from "../../atoms/mainButton/Button.module.scss";
import styles from "./AboutGame.module.scss";

export default function AboutGame() {
  return (
    <div className={styles.gameContent}>
      <div className={styles.gameContainer}>
        <h1>{ABOUT_GAME.title}</h1>
        <p>{ABOUT_GAME.description}</p>
        <Button className={style.mainButton}>Download</Button>
        <Button className={`${style.mainButton} ${style.transparent}`}>
          More info
        </Button>
      </div>
    </div>
  );
}
