"use client";

import BackgroundHeader from "@/molecules/BackgroundHeader/BackgroundHeader";
import ImageCarousel from "@/molecules/ImageCarousel/ImageCarousel";
import Footer from "@/molecules/Footer/Footer";

import { GAMES } from "@/constants";
import styles from "../../../styles/_home.module.scss";
 
export default function GamePage({params}: {params: { slug: string }}) {

  const game = GAMES.find((game) => game.slug === params.slug);
  const backgroundImage = game ? game.imageUrl : null;

  return (
    <div>
      <div className={styles.containerGame}>
        <BackgroundHeader containerGameTitle={true} backgroundImage={backgroundImage} />
      </div>
      <ImageCarousel images={game ? game.images : []} />
      <Footer />
    </div>
  );
}
