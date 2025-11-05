import { WidgetConfig } from "../../types/Dashboard";
import Widget from "../Widget";
import styles from './index.module.css'

const DashboardItem = (data: WidgetConfig) => {
    const { title, dataSource, type } = data;

    return (
        <div className={styles.widget_container}>
            <h3 className={styles.widget_title}>{title}</h3>
            {/* <p className={styles.widget_data_source}>{dataSource}</p> */}
            <Widget dataSource={dataSource} type={type} />
        </div>
    );
};

export default DashboardItem;