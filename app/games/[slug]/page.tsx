"use client";

import BackgroundHeader from "@/molecules/BackgroundHeader/BackgroundHeader";
import ImageCarousel from "@/molecules/ImageCarousel/ImageCarousel";
import Footer from "@/molecules/Footer/Footer";

import styles from "../../../styles/_home.module.scss";

export default function GamePage() {
  const images = [
    "/images/cityTank/tank-play.png",
    "/images/tank2.jpeg",
    "/images/cityTank/city-tank1.png",
    "/images/tank.jpg",
    "/images/fate-samurai-remnant.jpg",
    "/images/tank.jpg",
  ];

  return (
    <div>
      <div className={styles.containerGame}>
        <BackgroundHeader containerGameTitle={true} />
      </div>
      <ImageCarousel images={images} />
      <Footer />
    </div>
  );
}
