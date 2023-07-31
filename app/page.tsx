"use client";

import Image from "next/image";

import Header from "@/molecules/Header/Header";
import AboutGame from "@/molecules/AboutGame/AboutGame";
import Footer from "@/atoms/Footer";
import styles from "../styles/_home.module.scss";

export default function HomePage() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/cityTank/tank-bg.jpg"
          alt="Background Tank Game"
          layout="fill"
        />
      </div>
      <AboutGame />
      <Footer />
    </div>
  );
}
