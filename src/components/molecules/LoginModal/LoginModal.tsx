import React from 'react';
import { useState } from 'react';

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '../../../../lib/firebase'

import styles from './LoginModal.module.scss';
import { PiGoogleLogoBold, PiXBold } from "react-icons/pi";


const LoginModal = ({ onClose }) => {
  
    const [user, setUser] = useState<User>({} as User);

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                console.log(error);
            });
    }
  
  return (
    <div className={styles.backgroundModal}>
        
        <div className={styles.modal}>
            <div className={styles.header}>
                <h2>Sign Up</h2>
                <button className={styles.onCLose} onClick={onClose}><PiXBold/></button>
            </div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div  className={styles.myUser}>
                        <img src={user.photoURL} />
                        <div>
                            <h2>{user.displayName}</h2>
                            <small>{user.email}</small>
                        </div>
                    </div>
                    <button type="button" onClick={signInWithGoogle} className={styles.siginButton}><PiGoogleLogoBold/> Sign Up with Google</button>
                    <p>or</p>
                    <form action="">
                    <div className={styles.input}>
                            <label htmlFor="">Email*</label>
                            <input type="text" />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="">Password*</label>
                            <input type="text" />
                        </div>
                        <button className={styles.creat}>Create Account</button>
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
                        <div className={styles.sigin}>
                            <p>Already have an account?</p>
                            <a href="">Sign In</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
    </div>
  );
};

export default LoginModal;
