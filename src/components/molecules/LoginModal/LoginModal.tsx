import React from 'react';
import styles from './LoginModal.module.scss';

const LoginModal = ({ onClose }) => {
  return (
    <div className={styles.background}>
        
        <div className={styles.modal}>
            <div className={styles.header}>
                <h2>Sign Up</h2>
                <button className={styles.onCLose} onClick={onClose}>X</button>
            </div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <button className={styles.siginButton}><span>G </span>Sign Up with Google</button>
                    <p>or</p>
                    <form action="">
                    <div className={styles.input}>
                            <label htmlFor="">Email</label>
                            <input type="text" />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="">Password</label>
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
