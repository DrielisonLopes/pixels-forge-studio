import React from "react";

import Header from "@/molecules/Header/Header";
import BackgroundContent from "@/molecules/BackgroundContent/BackgroundContent";

import home from "../../../../styles/_home.module.scss"
import styles from "./BackgroundHeader.module.scss";

export default function BackgroundHeader() {
  return (
    <div className={home.imageContainer}>
      <div className={styles.header}>
        <img
          className={styles.banner}
          src="../images/mobile-legends.jpg"
          alt="Fate Samurai Remnant"
        />
        <nav className={home.nav}>
          <Header />
        </nav>
        <BackgroundContent />
      </div>
    </div>
  );
}
