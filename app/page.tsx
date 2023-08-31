"use client";

import BackgroundHeader from "@/molecules/BackgroundHeader/BackgroundHeader";
import GameList from "@/molecules/GameList/GameList";
import Footer from "@/molecules/Footer/Footer";

import styles from "../styles/_home.module.scss";
import CardGame from "@/molecules/CardGame/CardGame";
import Header from "@/molecules/Header/Header";

export default function HomePage() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <BackgroundHeader />
      </div>
      <div className={styles.pageContainer}>
        <CardGame />
        <GameList />
      </div>
        <Footer />
    </div>
  );
}
