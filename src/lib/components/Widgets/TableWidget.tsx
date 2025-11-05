import { TableWidgetProps } from "../../types/WidgetTypes";
import styles from './TableWidget.module.css'
const TableWidget = ({ title, data }: TableWidgetProps) => {
    console.log("Table Widget Data:", data);
    return (
        <div>
            <h4>{title}</h4>
            <div className={styles.wrapper}>
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            {data.columns.map((column) => (
                                <th key={column}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        {data.rows.map((row) => (
                            <tr key={row.productId} tabIndex={0}>
                                <td>{row.productId}</td>
                                <td>{row.name}</td>
                                <td>{row.category}</td>
                                <td className={styles.cell_numeric}>{row.unitsSold}</td>
                                <td className={styles.cell_numeric}>{row.revenue}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default TableWidget;
