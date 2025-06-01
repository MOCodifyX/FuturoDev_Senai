import type { ReactNode } from "react";
import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

type Theme = 'light' | 'dark';

type ThemeProviderProps = {
    children: ReactNode
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};