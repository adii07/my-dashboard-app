import HighchartsReact from "highcharts-react-official";
import { useMemo } from "react";
import Highcharts from "highcharts";
import styles from './index.module.css';
import cx from "classnames";

const ChartWidget = ({ title, rawData }: any) => {
    const { data, keys } = rawData;
    const itemsKey = keys?.yKeys?.[0]; // itemsSold
    const revenueKey = keys?.yKeys?.[1]; // revenue (second line)
    
    const options: Highcharts.Options = useMemo(() => {
        const categories = data.map((d: any) => d[keys.xKey]);
        const itemsSeries = itemsKey ? data.map((d: any) => d[itemsKey]) : [];
        const revenueSeries = revenueKey ? data.map((d: any) => d[revenueKey]) : [];


        return {
            chart: {
                type: "line",
                backgroundColor: "transparent",
            },
            title: {
                text: title,
                style: { fontSize: "16px", fontWeight: "bold" },
            },
            xAxis: {
                categories,
                title: { text: keys.xKey },
            },
            yAxis: {
                title: { text: "Items Sold" },
                gridLineColor: "#eee",
            },

            legend: {
                enabled: (itemsSeries.length && revenueSeries.length) ? true : false,
            },
            tooltip: { shared: true },
            series: [
                ...(itemsSeries.length ? [{
                    type: 'line' as const,
                    name: itemsKey,
                    data: itemsSeries,
                    color: '#2563eb',
                    marker: { enabled: true, radius: 4, symbol: 'circle' }
                }] : []),
                ...(revenueSeries.length ? [{
                    type: 'line' as const,
                    name: revenueKey,
                    data: revenueSeries,
                    color: '#10b981',
                    marker: { enabled: true, radius: 4, symbol: 'circle' }
                }] : [])
            ],
            credits: { enabled: false },
            responsive: {
                rules: [
                    {
                        condition: { maxWidth: 500 },
                        chartOptions: {
                            yAxis: { labels: { enabled: false } },
                            tooltip: { enabled: true },
                        },
                    },
                ],
            },
        };
    }, [data]);

    return <div className={cx(styles.widget,styles.chart_widget)}><h4>{title}</h4>
        <HighchartsReact highcharts={Highcharts} options={options} />
        </div>;
}
export default ChartWidget;