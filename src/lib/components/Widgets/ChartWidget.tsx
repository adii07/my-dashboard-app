import HighchartsReact from "highcharts-react-official";
import { useMemo } from "react";
import Highcharts from "highcharts";
const ChartWidget = ({ title, data }: any) => {
    console.log("Chart Widget Data:", data);

    const options: Highcharts.Options = useMemo(() => {
        const categories = data.map((d:any) => d.month);
        const itemsSoldSeries = data.map((d:any) => d.itemsSold);

        return {
            chart: {
                type: "line",
                backgroundColor: "transparent",
            },
            title: {
                text: "Monthly Items Sold",
                style: { fontSize: "16px", fontWeight: "bold" },
            },
            xAxis: {
                categories,
                title: { text: "Month" },
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

    return <div><h4>{title}</h4>
        <HighchartsReact highcharts={Highcharts} options={options} />
        </div>;
}
export default ChartWidget;