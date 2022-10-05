import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
    return (
        <div className={styles.containerReact}>
            <span className={styles.reactLogo}>
                <span className={styles.nucleo}></span>
            </span>
        </div>
    )
}

export default Logo;