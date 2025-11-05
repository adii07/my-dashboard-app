import { useEffect, useState } from "react";
import { StatWidgetType } from "../../types/WidgetTypes";
import styles from './index.module.css';
const StatWidget = ({ title, data}: StatWidgetType) => {
    

    return <div className={styles.stat_widget}>
        <h4>{title}</h4>
        <p>{data !== null ? data : "Loading..."}</p>
    </div>;
}
export default StatWidget;
