import React from "react";

import Header from "@/molecules/Header/Header";
import BackgroundContent from "@/molecules/BackgroundContent/BackgroundContent";

import home from "../../../../styles/_home.module.scss"
import styles from "./BackgroundHeader.module.scss";

export default function BackgroundHeader({ containerGameTitle, backgroundImage }) {
  const defaultImageSrc = "../images/mobile-legends.jpg";

  return (
    <div className={home.imageContainer}>
      <div className={styles.header}>
        <img
          className={styles.banner}
          src={backgroundImage || defaultImageSrc}
          alt="Fate Samurai Remnant"
        />
        <nav className={home.nav}>
          <Header />
        </nav>
        <BackgroundContent containerGameTitle={containerGameTitle} />
      </div>
    </div>
  );
}
