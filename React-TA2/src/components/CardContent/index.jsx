import React from "react";
import Styles from './index.module.css';

const CardContent = ({ title, description, assignedTo, startDate, endDate}) => {
    return (
        <>
            <h2 className={Styles["card-title"]}>{title}</h2>
            <p className={Styles["card-description"]}>{description}</p>
            <p className={Styles["card-assigned"]}>Assigned to: {assignedTo}</p>
            <p className={Styles["card-dates"]}>Start date: {startDate}</p> 
            <p className={Styles["card-dates"]}>End date: {endDate}</p> 
        </>
    )
}

export default CardContent;