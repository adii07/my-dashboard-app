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
            const json = await response.json();
            // For stat widgets we keep the whole object (contains growth); others just need the data array/value
            if (type === "stat") {
                setData(json); // { data: number, growth?: number }
            } else {
                setData(json.data);
            }
        };
        fetchData();
    }, [dataSource, type]);

    const renderWidget = () => {
        if (!data) return <>Loading...</>;

        switch (type) {
            case "stat":
                return <StatWidget title={title} data={data.data} growth={data.growth} />;
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