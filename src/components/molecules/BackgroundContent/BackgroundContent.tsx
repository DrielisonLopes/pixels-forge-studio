import React from "react";
import Link from 'next/link';

import Button from "@/atoms/mainButton/Button";
import { PiArrowLeft } from "react-icons/pi";

import style from "../../atoms/mainButton/Button.module.scss";
import styles from "./BackgroundContent.module.scss";

export default function BackgroundContent({ containerGameTitle, gameName }) {
  return (
    <>
    {containerGameTitle ? (
      <div className={`${styles.bgContainer} ${styles.containerGameTitle}`}>
        <div className={styles.bgGameTitle}>
          <div><Link href="/"><PiArrowLeft/></Link></div>
          <h2>{gameName}</h2>
        </div>
      </div>
    ) : (
      <div className={styles.bgContainer}>
        <div className={styles.bgContent}>
          <h1>Awesome Gameplay</h1>
          <p>From Gamers to Gamers</p>
          <Button className={style.mainButton}>Signup to Play</Button>
        </div> 
      </div>
    )}  
    </>
  );
}
