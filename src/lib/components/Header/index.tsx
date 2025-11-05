import styles from './index.module.css';
import Filter from '../Filter';
import { DashboardConfigTypes } from '../../types/Dashboard';


const Header = ({ category }: DashboardConfigTypes) => {
    return (
        <header className={styles.header_container}>
            <h1 className={styles.header_title}>My Dashboard App</h1>
            {category==='sales' && <Filter />}
        </header>
    );
}

export default Header;