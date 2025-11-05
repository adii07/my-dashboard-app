import { WidgetConfig } from "../../types/Dashboard";
import styles from './index.module.css'
import { ChartWidget, StatWidget, TableWidget } from "../Widgets";
import { useEffect, useState } from "react";

const DashboardItem = (WidgetData: WidgetConfig) => {
    const { title, dataSource, type } = WidgetData;
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(dataSource);
            const data = await response.json();
            setData(data.data);
        };
        fetchData();
    }, [dataSource]);

    const renderWidget = () => {
        if (!data) return <>Loading...</>;

        switch (type) {
            case "stat":
                return <StatWidget title={title} data={data} />;
            case "chart":
                return <ChartWidget title={title} data={data} />;
            case "table":
                return <TableWidget title={title} data={data} />;
            default:
                return <>Unknown Widget Type</>;
        }
    }

    return (<>
        {renderWidget()}
    </>
        // <div className={styles.widget_container}>
        // </div>
    );
};

export default DashboardItem;