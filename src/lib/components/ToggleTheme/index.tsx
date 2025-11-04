import { useTheme } from "../../hooks/useTheme";
import styles from "./index.module.css";
const ThemeToggle =() => {
    const { theme, setTheme } = useTheme();
    const toggle = () => setTheme(theme === "light" ? "dark" : "light");
    return (
        <button
            className={styles.button}
            onClick={toggle}
            aria-label="Toggle theme"
        >
            {theme === "light" ? "Switch to dark" : "Switch to light"}
        </button>
    );
};

export default ThemeToggle;