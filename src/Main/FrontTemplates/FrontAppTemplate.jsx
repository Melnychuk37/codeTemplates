import React from 'react';
import styles from './styles/FrontAppTemplate.module.css';


const FrontAppTemplate = props => {
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


export default FrontAppTemplate