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
            if (type === "stat" || type === "table") {
                setData(json);
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
                return <StatWidget title={title} rawData={data} />;
            case "chart":
                return <ChartWidget title={title} data={data} />;
            case "table":
                return <TableWidget title={title} rawData={data} />;
            default:
                return <>Unknown Widget Type</>;
        }
    }

    return (<>
        {renderWidget()}
    </>
    );
};

export default DashboardItem;