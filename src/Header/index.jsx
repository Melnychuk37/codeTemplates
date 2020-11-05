import React from 'react';
import styles from './index.module.css';

const Header = _ => {
    return (
        <header className={`${styles.headerBox} ${styles.headerFont} ${styles.bgBlue}`}>
            <h1>Simple text header to notify that templates are below</h1>
        </header>
    )
}

export default Header