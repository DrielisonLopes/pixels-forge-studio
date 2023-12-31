"use client";

import BackgroundHeader from "@/molecules/BackgroundHeader/BackgroundHeader";
import ImageCarousel from "@/molecules/ImageCarousel/ImageCarousel";
import Footer from "@/molecules/Footer/Footer";

import { GAMES } from "@/constants";
import styles from "../../../styles/_home.module.scss";
 
export default function GamePage({params}: {params: { slug: string }}) {

  const game = GAMES.find((game) => game.slug === params.slug);
  const backgroundImage = game ? game.banner : null;

  return (
    <div>
      <div className={styles.containerGame}>
        <BackgroundHeader containerGameTitle={true} backgroundImage={backgroundImage} 
        gameName={game ? game.name : ""} />
      </div>
      <ImageCarousel 
        name={game ? game.name : ""}
        category={game ? game.category : ""}
        company={game ? game.company : ""}
        releaseDate={game ? game.releaseDate : ""}
        multiplayer={game ? game.multiplayer : ""}
        platforms={game ? game.platforms : ""}
        images={game ? game.images : []} 
        video={game ? game.video : ""}
        download={game ? game.download : ""}
        description={game ? game.description : ""}
      />
      <Footer />
    </div>
  );
}
