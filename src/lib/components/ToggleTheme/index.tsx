import { useTheme } from "../../hooks/useTheme";
import styles from "./index.module.css";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const toggle = () => setTheme(theme === "light" ? "dark" : "light");

    const isLight = theme === "light";
    const icon = isLight ? "🌙" : "☀️";
    const label = isLight ? "Switch to dark theme" : "Switch to light theme";

    return (
        <button
            type="button"
            className={styles.button}
            onClick={toggle}
            aria-label={label}
            title={label}
        >
            <span aria-hidden="true">{icon}</span>
        </button>
    );
};

export default ThemeToggle;