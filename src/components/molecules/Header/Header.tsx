import Image from "next/image";
import { PiUserCircleFill, PiCaretDownBold } from "react-icons/pi";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
        <Image
          src="/images/logo2.png"
          className={styles.logoImage}
          alt="Pixels Forge Studio Logo"
          width={70}
          height={100}
        />
        <Image
          src="/images/logo-name.png"
          className={styles.logoName}
          alt="Pixels Forge Studio"
          width={150}
          height={55}
        />
        </a>
      </div>
      <div className={styles.nameIcon}>
        <div className={styles.user}>
          <span className={styles.userIcon}>
            <PiUserCircleFill />
          </span>
          <span>Login</span>
        </div>
        <div className={styles.rain}>Sign up</div>
      </div>
    </div>
  );
};

export default Header;
