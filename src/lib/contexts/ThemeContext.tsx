import React, { createContext, useEffect, useMemo, useState } from "react";
import { THEME_STORAGE_KEY, DEFAULT_THEME } from "../constants/themeConstants";
import { Theme, ThemeContextValue } from "../types/Theme";


const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);


export const ThemeProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [theme, setThemeState] = useState<Theme>(() => {
        try {
            const raw = typeof window !== "undefined" ? localStorage.getItem(THEME_STORAGE_KEY) : null;
            if (raw === "light" || raw === "dark") return raw;
        } catch (e) {
        }
        return DEFAULT_THEME;
    });


    useEffect(() => {
        try {
            document.documentElement.setAttribute("data-theme", theme);
        } catch (e) {
        }
    }, [theme]);


    useEffect(() => {
        try {
            localStorage.setItem(THEME_STORAGE_KEY, theme);
        } catch (e) {
        }
    }, [theme]);


    const value = useMemo<ThemeContextValue>(() => ({ theme, setTheme: setThemeState }), [theme]);


    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};


export default ThemeContext;