import Image from "next/image";

import { LuSearch } from "react-icons/lu";
import { PiUserCircleFill, PiCaretDownBold } from "react-icons/pi";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src="/images/pfs-logo.png"
      className={styles.logo}       alt="Pixels Forge Studio Logo"
       width={60}
       height={60}
       />
      <div className={styles.nameIcon}>
        <div className={styles.icon}><LuSearch/></div>
        <div className={styles.rain}>0.00 RAIN</div>
        <div className={styles.user}>
          <span className={styles.userIcon}><PiUserCircleFill/></span>
          <span>Krilin Carec</span>
          <span><PiCaretDownBold/></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
