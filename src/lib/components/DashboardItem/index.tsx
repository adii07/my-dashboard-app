import { WidgetConfig } from "../../types/Dashboard";
import styles from './index.module.css'
import { ChartWidget, StatWidget, TableWidget } from "../Widgets";
import Skeleton from "../Loading/Skeleton";
import { useEffect, useState } from "react";

const DashboardItem = (WidgetData: WidgetConfig) => {
    const { title, dataSource, type, field } = WidgetData;
    const [data, setData] = useState<any>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(dataSource);
                const json = await response.json();
                if (type === 'stat') {
                    if (json.ranges) {
                        setData(json);
                    } else if (json.data !== undefined) {
                        setData({ data: json.data, growth: json.growth });
                    } else if (field && json[field] !== undefined) {
                        setData({ data: json[field] });
                    } else {
                        const numericKey = Object.keys(json).find(k => typeof json[k] === 'number');
                        setData(numericKey ? { data: json[numericKey] } : json);
                    }
                } else if (type === 'table') {
                    if (json.ranges) {
                        setData(json);
                    } else if (json.data && json.data.columns && json.data.rows) {
                        setData(json);
                    } else if (json.columns && json.rows) {
                        setData({ data: { columns: json.columns, rows: json.rows } });
                    } else {
                        setData(json);
                    }
                } else if (type === 'chart') {
                    setData(json);
                }
            } catch (e) {
                console.error('Failed to fetch', dataSource, e);
            }
        };
        fetchData();
    }, [dataSource, type, field, title]);

    const renderWidget = () => {
        if (!data) return <Skeleton type={type} title={title} />;

        switch (type) {
            case "stat":
                return <StatWidget title={title} rawData={data} />;
            case "chart":
                return <ChartWidget title={title} rawData={data} />;
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