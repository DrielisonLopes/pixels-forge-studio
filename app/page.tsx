"use client";

import BackgroundHeader from "@/molecules/BackgroundHeader/BackgroundHeader";
import GameList from "@/molecules/GameList/GameList";
import Footer from "@/molecules/Footer/Footer";

import styles from "../styles/_home.module.scss";
import CardGame from "@/molecules/CardGame/CardGame";

export default function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.imageContainer}>
        <BackgroundHeader />
      </div>
      <CardGame />
      <GameList />
      <Footer />
    </div>
  );
}
