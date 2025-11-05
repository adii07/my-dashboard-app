import { WidgetConfig } from "../../types/Dashboard";
import styles from './index.module.css'
import { ChartWidget, StatWidget, TableWidget } from "../Widgets";
import Skeleton from "../Loading/Skeleton";
import { useEffect, useState } from "react";
import { NormalizedWidgetData, NormalizedChartData, NormalizedStatData, NormalizedTableData, isChartData } from '../../types/NormalizedWidgetData';

const DashboardItem = (WidgetData: WidgetConfig) => {
    const { title, dataSource, type, field } = WidgetData;
    const [data, setData] = useState<NormalizedWidgetData | null>(null);
    
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
                    // Accept either { data: [...], keys } or fallback build keys from first entry
                    if (json.data && json.keys) {
                        setData(json as NormalizedChartData);
                    } else if (json.data && Array.isArray(json.data)) {
                        const first = json.data[0] || {};
                        const xKey = Object.keys(first).find(k => typeof first[k] === 'string') || 'month';
                        const yKeys = Object.keys(first).filter(k => k !== xKey && typeof first[k] === 'number');
                        setData({ data: json.data, keys: { xKey, yKeys } });
                    } else if (Array.isArray(json)) {
                        const first = json[0] || {};
                        const xKey = Object.keys(first).find(k => typeof first[k] === 'string') || 'month';
                        const yKeys = Object.keys(first).filter(k => k !== xKey && typeof first[k] === 'number');
                        setData({ data: json, keys: { xKey, yKeys } });
                    }
                }
            } catch (e) {
                console.error('Failed to fetch', dataSource, e);
            }
        };
        fetchData();
    }, [dataSource, type, field, title]);

    const renderWidget = () => {
        if (!data) return <Skeleton type={type} title={title} />;
        if (type === 'stat') {
            return <StatWidget title={title} rawData={data as NormalizedStatData} />;
        }
        if (type === 'chart') {
            return <ChartWidget title={title} rawData={data as NormalizedChartData} />;
        }
        if (type === 'table') {
            return <TableWidget title={title} rawData={data as NormalizedTableData} />;
        }
        return <>Unknown Widget Type</>;
    }

    return (<>
        {renderWidget()}
    </>
    );
};

export default DashboardItem;