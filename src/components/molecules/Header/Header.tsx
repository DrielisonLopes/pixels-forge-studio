import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from "react";
import { PiUserCircleFill } from "react-icons/pi";
import { LoginModal } from "../LoginModal/LoginModal";
import { auth } from '../../../../lib/firebase';
import { User } from 'firebase/auth';

import styles from "./Header.module.scss";

const Header = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLoginClick = (registering) => {
    setIsModalOpen(true);
    setIsRegistering(registering);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Logout
  function signout() {
    auth.signOut()
    .then(() => {
        setUser(null as any);
    })
    .catch((error) => {
        console.error('Erro ao fazer logout:', error);
    });
  }

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
        {user ? ( // Verifica se o usuário está autenticado
          <div>
            <span onClick={signout}>Olá, {user.displayName} ➡️</span>
          </div>
        ) : (
          <>
            <div className={styles.user} onClick={() => handleLoginClick(false)}>
              <span className={styles.userIcon}>
                <PiUserCircleFill />
              </span>
              <span>Login</span>
            </div>
            <div className={styles.rain} onClick={() => handleLoginClick(true)}>Sign up</div>
          </>
        )}
      </div>
      {isModalOpen && <LoginModal isRegistering={isRegistering} setIsRegistering={setIsRegistering} onClose={handleCloseModal} />}
    </div>
  );
};

export default Header;
