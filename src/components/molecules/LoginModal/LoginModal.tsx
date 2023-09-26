import React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../../../lib/firebase';
import styles from './LoginModal.module.scss';
import { PiGoogleLogoBold, PiXBold } from "react-icons/pi";
import Image from 'next/image';

export const LoginModal = ({ onClose }) => {

    const [user, setUser] = useState<User>({} as User);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                console.log(error);
            });
    }

    function handleAuthentication() {
        if (isRegistering) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    setUser(result.user);
                }).catch((error) => {
                    console.log(error);
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((result) => {
                    setUser(result.user);
                }).catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <div className={styles.backgroundModal}>

            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>Sign Up</h2>
                    <button className={styles.onCLose} onClick={onClose}><PiXBold /></button>
                </div>
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.myUser}>
                            {user.photoURL && <Image src={user.photoURL} alt="User photo" />}
                            <div>
                                <h2>{user.displayName}</h2>
                                <small>{user.email}</small>
                            </div>
                        </div>
                        <button type="button" onClick={signInWithGoogle} className={styles.siginButton}><PiGoogleLogoBold /> Sign Up with Google</button>
                        <p>or</p>
                        <form action="">
                            <div className={styles.input}>
                                <label htmlFor="email">Email*</label>
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className={styles.input}>
                                <label htmlFor="password">Password*</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {isRegistering ?
                                <>
                                    <button type="button" onClick={handleAuthentication} className={styles.creat}>
                                        Create Account
                                    </button>
                                    <div className={styles.terms}>
                                        <div>
                                            <p>By signing up, you are agreeing to Pixel Forge Studio</p>
                                        </div>
                                        <div>
                                            <a href="">Terms of Service</a>
                                            <p>and</p>
                                            <a href="">Privacy and Policy</a>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <button type="button" onClick={handleAuthentication} className={styles.creat}>
                                        Sign In
                                    </button>
                                </>}

                            <div className={styles.sigin}>
                                {isRegistering ?
                                    <>
                                        <p>Already have an account?</p>
                                        <a href="#" onClick={() => setIsRegistering(!isRegistering)}>
                                            Sign In
                                        </a>
                                    </>
                                    :
                                    <>
                                        <p>Don`t have an account yet?</p>
                                        <a href="#" onClick={() => setIsRegistering(!isRegistering)}>
                                            Create one
                                        </a>
                                    </>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};
