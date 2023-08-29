"use client";

import GameList from "@/molecules/GameList/GameList";
import Footer from "@/molecules/Footer/Footer";

import styles from "../../styles/_home.module.scss";
import CardGame from "@/molecules/CardGame/CardGame";
import Header from "@/molecules/Header/Header";

export default function GamePage() {
  return (
    <div className={styles.pageContainer}>
      <Header/>
      <br />
      <br />
      <br />
      <GameList />
      <Footer />
    </div>
  );
}
