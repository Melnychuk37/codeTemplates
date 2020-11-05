import React from 'react';
import styles from './styles/BackAppTemplate.module.css';


const BackAppTemplate = props => {
    return (
        <div>
            <div className={`${styles.language}`}>
                <p>{props.name}</p>
                <p>{props.description}</p>
                <pre  className={`${styles.block}`}>
                    <code className={`${styles.fsCode}`}>{props.script}</code>
                </pre>
            </div>
        </div>
    )
}


export default BackAppTemplate