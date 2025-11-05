import styles from './Skeleton.module.css';

type SkeletonType = 'stat' | 'table' | 'chart' | string;

interface SkeletonProps { type: SkeletonType; title?: string; }

const Skeleton = ({ type, title }: SkeletonProps) => {
  if (type === 'stat') {
    return (
      <div className={styles.skeletonRoot} aria-busy="true" aria-live="polite">
        <span className={styles.visuallyHidden}>{title || 'Loading statistic'}</span>
        <div className={`${styles.line} ${styles.small}`}></div>
        <div className={`${styles.line} ${styles.stat}`}></div>
        <div className={`${styles.line} ${styles.small}`}></div>
      </div>
    );
  }
  if (type === 'table') {
    return (
      <div className={styles.skeletonRoot} aria-busy="true" aria-live="polite">
        <span className={styles.visuallyHidden}>{title || 'Loading table'}</span>
        <div className={`${styles.line} ${styles.wide}`}></div>
        <div className={styles.rows}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div className={styles.row} key={i}>
              <div className={`${styles.line} ${styles.medium}`}></div>
              <div className={`${styles.line} ${styles.medium}`}></div>
              <div className={`${styles.line} ${styles.small}`}></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (type === 'chart') {
    return (
      <div className={styles.skeletonRoot} aria-busy="true" aria-live="polite">
        <span className={styles.visuallyHidden}>{title || 'Loading chart'}</span>
        <div className={`${styles.line} ${styles.wide}`}></div>
        <div className={styles.chartArea}></div>
      </div>
    );
  }
  return (
    <div className={styles.skeletonRoot} aria-busy="true"><div className={`${styles.line} ${styles.wide}`}></div></div>
  );
};

export default Skeleton;
