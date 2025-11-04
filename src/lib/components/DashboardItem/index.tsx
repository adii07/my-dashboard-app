import { WidgetConfig } from "../../types/Dashboard";
import styles from './index.module.css'

const DashboardItem = (data: WidgetConfig) => {
    const { title, dataSource } = data;
    
    return (
        <div className={styles.widget_container}>
            <h3 className={styles.widget_title}>{title}</h3>
            <p className={styles.widget_data_source}>{dataSource}</p>
        </div>
    );
};

export default DashboardItem;