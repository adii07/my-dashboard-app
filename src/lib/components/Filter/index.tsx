import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import { FilterProps, RangeKey } from '../../types/Filter';
import { useRange } from '../../context/RangeContext';
const OPTIONS: { key: RangeKey; label: string }[] = [
    { key: '7d', label: 'Last 7 Days' },
    { key: '1m', label: 'Last 1 Month' },
    { key: '1y', label: 'Last 1 Year' },
    { key: 'all', label: 'All Time' }
];

const Filter = ({ value, onChange, label = 'Range' }: FilterProps) => {
    const { range, setRange } = useRange();
    const [selected, setSelected] = useState<RangeKey>(value ?? range);

    useEffect(() => {
        if (value && value !== selected) {
            setSelected(value);
        } else if (!value && range !== selected) {
            setSelected(range);
        }
    }, [value, selected, range]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value as RangeKey;
        setSelected(val);
        setRange(val);
        onChange?.(val);
    };

    return (
        <div className={styles.filter_main_container}>

            <div style={{ position: 'relative' }}>
                <select
                    id="dashboard-range-select"
                    value={selected}
                    onChange={handleChange}
                    className={styles.select_dropdown}
                >
                    {OPTIONS.map(o => (
                        <option key={o.key} value={o.key}>{o.label}</option>
                    ))}
                </select>
                <span
                    aria-hidden="true"
                    className={styles.chevron_down}
                >▼</span>
            </div>
        </div>
    );
};

export default Filter;