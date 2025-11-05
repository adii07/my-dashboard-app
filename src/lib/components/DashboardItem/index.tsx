import { WidgetConfig } from "../../types/Dashboard";
import styles from './index.module.css'
import { StatWidget } from "../Widgets";

const DashboardItem = (data: WidgetConfig) => {
    const { title, dataSource, type } = data;
    

    const renderWidget = () => {
        if (!data) return <>Loading...</>;

        switch (type) {
            case "stat":
                return <StatWidget title={title} dataSource={dataSource} />;
            case "chart":
                return <>Chart Widget - Data:</>;
            case "table":
                return <>Table Widget - Data:</>;
            default:
                return <>Unknown Widget Type</>;
        }
    }

    return (
        <div className={styles.widget_container}>
            {renderWidget()}
        </div>
    );
};

export default DashboardItem;