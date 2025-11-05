import { TableWidgetProps } from "../../types/WidgetTypes";

const TableWidget = ({title,data}:TableWidgetProps) => {
    console.log("Table Widget Data:", data);
    return <div>
        <h4>{title}</h4>
        <div>
            <table>
                <thead>
                    <tr>
                        {data.columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.rows.map((row, index) => (
                        <tr key={index}>
                            <td>{row.productId}</td>
                            <td>{row.name}</td>
                            <td>{row.category}</td>
                            <td>{row.unitsSold}</td>
                            <td>{row.revenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>;
}
export default TableWidget;
