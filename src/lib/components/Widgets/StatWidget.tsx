import { useEffect, useState } from "react";
import { StatWidgetType } from "../../types/WidgetTypes";
import styles from './index.module.css';
const StatWidget = ({ title, dataSource}: StatWidgetType) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(dataSource);
            const data = await response.json();
            setData(data.data);
        };
        fetchData();
    }, [dataSource]);

    return <div className={styles.stat_widget}>
        <h3>{title}</h3>
        <p>{data !== null ? data : "Loading..."}</p>
    </div>;
}
export default StatWidget;
