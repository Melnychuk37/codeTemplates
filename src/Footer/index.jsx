import React from 'react';
import styles from './index.module.css';

const Footer = _ => {
    return (
        <footer className={`${styles.bgLBlue} ${styles.footerBox}`}>
            <p>Simple text footer to notify that templates are above</p>
        </footer>
    )
}

export default Footer