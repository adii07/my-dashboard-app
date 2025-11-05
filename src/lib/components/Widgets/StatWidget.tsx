import { StatWidgetType, StatRangeEntry } from "../../types/WidgetTypes";
import styles from './index.module.css';
import cx from "classnames";
import { useRange } from "../../context/RangeContext";

const StatWidget = ({ title, rawData }: StatWidgetType) => {
    const { range } = useRange();
    let entry: StatRangeEntry | undefined;
    if (rawData.ranges) {
        entry = rawData.ranges[range] || rawData.ranges['1m'] || Object.values(rawData.ranges)[0];
    } else if (rawData.data !== undefined) {
        entry = { data: rawData.data, growth: rawData.growth };
    }

    const value = entry?.data;
    const growth = entry?.growth;

    const growthClass = growth !== undefined
        ? growth > 0
            ? styles.growthPositive
            : growth < 0
                ? styles.growthNegative
                : styles.growthNeutral
        : undefined;
    const formattedGrowth = growth !== undefined ? `${growth > 0 ? '+' : ''}${growth.toFixed(1)}%` : null;

    return (
        <div className={cx(styles.widget, styles.stat_widget)}>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.valueRow}>
                <p className={styles.value}>{value !== undefined ? value : 'Loading...'}</p>
                {formattedGrowth && (
                    <span className={cx(styles.growth, growthClass)}>{formattedGrowth}</span>
                )}
            </div>
        </div>
    );
};

export default StatWidget;
