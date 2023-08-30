"use client";

import GameList from "@/molecules/GameList/GameList";
import Footer from "@/molecules/Footer/Footer";

import styles from "../../styles/_home.module.scss";
import ImageCarousel from "@/molecules/ImageCarousel/ImageCarousel";
import Header from "@/molecules/Header/Header";

export default function GamePage() {
  const images = [
    "/images/thumb-video.png",
    "/images/cityTank/tank-bg.jpg",
    "/images/tank2.jpeg",
    "/images/cityTank/city-tank1.png",
    "/images/cityTank/city-tank2.png",
    "/images/fate-samurai-remnant.jpg",
    "/images/tank.jpg",
  ];

  return (
    <div className={styles.pageContainer}>
      <Header/>
      <ImageCarousel images={images} />
      <Footer />
    </div>
  );
}
