import styles from './index.module.css';
import Filter from '../Filter';
const Header = () => {
    return (
        <header className={styles.header_container}>
            <h1 className={styles.header_title}>My Dashboard App</h1>
            <Filter />
        </header>
    );
}

export default Header;