import { useTheme } from "../../hooks/useTheme";

const ThemeToggle =() => {
    const { theme, setTheme } = useTheme();
    const toggle = () => setTheme(theme === "light" ? "dark" : "light");
    return (
        <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{ padding: 8, borderRadius: 6, cursor: "pointer" }}
        >
            {theme === "light" ? "Switch to dark" : "Switch to light"}
        </button>
    );
};

export default ThemeToggle;