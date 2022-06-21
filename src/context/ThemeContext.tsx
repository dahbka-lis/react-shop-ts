import { FC, createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';

interface IThemeContext {
    isDarkTheme: boolean;
    setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

interface IThemeProviderProps {
    children: JSX.Element | JSX.Element[];
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDarkTheme(true);
        }
    }, []);

    return <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
