import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";
import { PiUserCircleFill } from "react-icons/pi";
import LoginModal from "../LoginModal/LoginModal";

import styles from "./Header.module.scss";

const Header = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
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
        </Link>
      </div>
      <div className={styles.nameIcon}>
        <div className={styles.user} onClick={handleLoginClick}>
          <span className={styles.userIcon}>
            <PiUserCircleFill />
          </span>
          <span>Login</span>
        </div>
        <div className={styles.rain} onClick={handleLoginClick}>Sign up</div>
      </div>
      {isModalOpen && <LoginModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Header;
