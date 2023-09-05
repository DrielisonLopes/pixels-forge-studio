"use client";

import BackgroundHeader from "@/molecules/BackgroundHeader/BackgroundHeader";
import ImageCarousel from "@/molecules/ImageCarousel/ImageCarousel";
import Footer from "@/molecules/Footer/Footer";

import { GAMES } from "@/constants";
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


  const currentUrl = window.location.href;
  const urlParts = currentUrl.split('/');
  const gameSlug = urlParts[urlParts.length - 1];
  console.log(gameSlug)

  const game = GAMES.find((game) => game.slug === gameSlug);
  const backgroundImage = game ? game.imageUrl : null;

  return (
    <div>
      <div className={styles.containerGame}>
        <BackgroundHeader containerGameTitle={true} backgroundImage={backgroundImage} />
      </div>
      <ImageCarousel images={images} />
      <Footer />
    </div>
  );
}
