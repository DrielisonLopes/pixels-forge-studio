import React from "react";
import Image from "next/image";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Image
        src="/images/pfs-logo-name.png"
        alt="Pixels Forge Studio Logo"
        width={120}
        height={130}
      />
      <div className={styles.topics}>
        <a href="/team">Team</a>
        <p> | </p>
        <a href="/discord">Discord</a>
      </div>
      <p>Pixels Forge Studio - Copyright © 2023</p>
    </div>
  );
}
