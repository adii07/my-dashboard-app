import { TableWidgetProps, TableRangeEntry } from "../../types/WidgetTypes";
import styles from './TableWidget.module.css';
import { useRange } from "../../context/RangeContext";

const TableWidget = ({ title, rawData }: TableWidgetProps) => {
    const { range } = useRange();
    let entry: TableRangeEntry | undefined;
    if (rawData.ranges) {
        entry = rawData.ranges[range] || rawData.ranges['1m'] || Object.values(rawData.ranges)[0];
    } else if (rawData.data) {
        entry = rawData.data;
    }
    if (!entry) return <div className={styles.table_widget}><h4>{title}</h4><p>Loading...</p></div>;

    const { columns, rows } = entry;
    return (
        <div className={styles.table_widget}>
            <h4>{title}</h4>
            <div className={styles.wrapper}>
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            {columns.map((column) => (
                                <th key={column}>{column}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        {rows.map((row) => (
                            <tr key={(row as any).productId || JSON.stringify(row)} tabIndex={0}>
                                {columns.map((col) => (
                                    <td key={col} className={typeof row[col] === 'number' ? styles.cell_numeric : undefined}>{row[col]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableWidget;
