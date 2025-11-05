import { StatWidgetType } from "../../types/WidgetTypes";
import styles from './index.module.css';
import cx from "classnames";

const StatWidget = ({ title, data, growth }: StatWidgetType) => {
    const growthClass = growth !== undefined
        ? growth > 0
            ? styles.growthPositive
            : growth < 0
                ? styles.growthNegative
                : styles.growthNeutral
        : undefined;

    const formattedGrowth = growth !== undefined
        ? `${growth > 0 ? '+' : ''}${growth.toFixed(1)}%`
        : null;

    return (
        <div className={cx(styles.widget, styles.stat_widget)}>
            <h4 className={styles.title}>{title}</h4>
            <div className={styles.valueRow}>
                <p className={styles.value}>{data !== null ? data : 'Loading...'}</p>
                {formattedGrowth && (
                    <span className={cx(styles.growth, growthClass)}>{formattedGrowth}</span>
                )}
            </div>
        </div>
    );
};

export default StatWidget;
