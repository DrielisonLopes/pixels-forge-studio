import React from "react";
import Header from "@/molecules/Header/Header";
import AboutGame from "@/molecules/AboutGame/AboutGame"

import styles from "./BackgroundHeader.module.scss";

export default function BackgroundHeader() {
  return (
      <div className={styles.header}>
        <video autoPlay loop muted >
          <source src="/images/rainfall-pixels.mp4" type="video/mp4" />
        </video>
        <Header />
        <AboutGame />
      </div>
  );
}
