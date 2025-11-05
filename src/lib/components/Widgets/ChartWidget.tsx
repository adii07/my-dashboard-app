import HighchartsReact from "highcharts-react-official";
import { useMemo } from "react";
import Highcharts from "highcharts";
import styles from './index.module.css';
import cx from "classnames";

const ChartWidget = ({ title, rawData }: any) => {
    const{data,keys}=rawData;
    const key = keys.yKeys[0];
    
    const options: Highcharts.Options = useMemo(() => {
        const categories = data.map((d:any) => d.month);
        const itemsSoldSeries = data.map((d:any) => d[key]);
        

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
                enabled: false,
            },
            series: [
                {
                    type: "line",
                    name: "Items Sold",
                    data: itemsSoldSeries,
                    color: "#2563eb",
                    marker: {
                        enabled: true,
                        radius: 4,
                        symbol: "circle",
                    },
                },
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