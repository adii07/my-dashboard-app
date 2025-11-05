import { useEffect, useState } from "react";
import { StatWidgetType } from "../../types/WidgetTypes";
import styles from './index.module.css';
import cx from "classnames";
const StatWidget = ({ title, data}: StatWidgetType) => {
    return <div className={cx(styles.widget, styles.stat_widget)}>
        <h4 className={styles.title}>{title}</h4>
        <p>{data !== null ? data : "Loading..."}</p>
    </div>;
}
export default StatWidget;
