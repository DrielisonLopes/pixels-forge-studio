import styles from "../styles/_home.module.scss";

import type { Metadata } from "next";
import { Monda, Outfit } from "next/font/google";

const monda = Monda({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

const outfit = Outfit({
  weight: ["700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${styles.mainContainer}`}>
        {children}
      </body>
    </html>
  );
}
