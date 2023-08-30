import React from "react";
import Header from "@/molecules/Header/Header";
import AboutGame from "@/molecules/AboutGame/AboutGame";

import styles from "./BackgroundHeader.module.scss";

export default function BackgroundHeader() {
  return (
    <div className={styles.header}>
      <img
        className={styles.banner}
        src="images/mobile-legends.jpg"
        alt="Fate Samurai Remnant"
      />
      <Header />
      <AboutGame />
    </div>
  );
}
