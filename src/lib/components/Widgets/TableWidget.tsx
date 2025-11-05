import { TableWidgetProps } from "../../types/WidgetTypes";
import styles from './TableWidget.module.css'
const TableWidget = ({ title, data }: TableWidgetProps) => {
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
                                <td>{row[data.columns[0]]}</td>
                                <td>{row[data.columns[1]]}</td>
                                <td>{row[data.columns[2]]}</td>
                                <td className={styles.cell_numeric}>{row[data.columns[3]]}</td>
                                <td className={styles.cell_numeric}>{row[data.columns[4]]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default TableWidget;
