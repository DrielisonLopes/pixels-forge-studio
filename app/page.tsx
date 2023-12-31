"use client";

import BackgroundHeader from "@/molecules/BackgroundHeader/BackgroundHeader";
import CardGame from "@/molecules/CardGame/CardGame";
import GameList from "@/molecules/GameList/GameList";
import Footer from "@/molecules/Footer/Footer";

export default function HomePage() {
  return (
    <div>
      <BackgroundHeader containerGameTitle={false} backgroundImage="../games/mobile-legends-home-bg.webp" />
      <CardGame />
      <GameList />
      <Footer />
    </div>
  );
}
