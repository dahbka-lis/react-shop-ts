import { FC, createContext, useState, useEffect } from 'react';
import { Theme, ThemeContextType } from '../@types/theme';

export const ThemeContext = createContext<ThemeContextType | null>(null);

// Create a component with Context.Provider and value in component
type ThemeProviderProps = {
    children: JSX.Element | JSX.Element[];
};

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    // Detect prefer color theme
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
    }, []);

    // Func-helper for easy change theme without useless IF ELSE in other components
    const switchTheme = () => {
        if (theme === 'light') setTheme('dark');
        else setTheme('light');
    };

    return <ThemeContext.Provider value={{ theme, setTheme, switchTheme }}>{children}</ThemeContext.Provider>;
};
export default ThemeProvider;
