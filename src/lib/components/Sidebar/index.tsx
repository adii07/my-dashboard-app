import React from 'react';
import styles from './index.module.css';
import { useTheme } from '../../hooks/useTheme';
type DashboardCategory = 'user' | 'sales';
interface SidebarProps {
  open: boolean;
  category: DashboardCategory;
  onSelect: (c: DashboardCategory) => void;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, category, onSelect, onToggle }) => {
  const { theme } = useTheme();
  const iconColor = theme === 'dark' ? 'FFFFFF' : '000000';
  const iconSrc = `https://img.icons8.com/?size=100&id=97654&format=png&color=${iconColor}`;
  return (
    <aside className={`${styles.sidebar} ${open ? styles.expanded : styles.collapsed}`}>      
      <button
        type="button"
        aria-label={open ? 'Collapse sidebar' : 'Expand sidebar'}
        className={styles.internalToggle}
        onClick={onToggle}
      >
        <img
          src={iconSrc}
          alt={open ? 'Collapse sidebar' : 'Expand sidebar'}
          width={24}
          height={24}
          style={{ display: 'block' }}
        />
      </button>
      {open && (
        <>
          <h2 className={styles.sidebarHeader}>Dashboards</h2>
          <ul className={styles.navList} role="list">
            <li>
              <button
                type="button"
                className={`${styles.navButton} ${category === 'user' ? styles.navButtonActive : ''}`}
                onClick={() => onSelect('user')}
              >
                User Dashboard
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`${styles.navButton} ${category === 'sales' ? styles.navButtonActive : ''}`}
                onClick={() => onSelect('sales')}
              >
                Sales Dashboard
              </button>
            </li>
          </ul>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
