"use client";

import Image from "next/image";

import Header from "@/molecules/Header/Header";
import AboutGame from "@/molecules/AboutGame/AboutGame";
import GameList from "@/molecules/GameList/GameList";
import Footer from "@/atoms/Footer";
import styles from "../styles/_home.module.scss";

export default function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <div>
        <Header />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/cityTank/tank-bg.jpg"
          alt="Background Tank Game"
          layout="fill"
        />
      <AboutGame />
      </div>
      <GameList />
      <Footer />
    </div>
  );
}
