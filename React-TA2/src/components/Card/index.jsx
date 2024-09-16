import React from "react";
import Styles from './index.module.css';

const Card = ({ children }) => {
    return (
        <div className={Styles.card}>
            {children}
        </div>
    )
}

export default Card;