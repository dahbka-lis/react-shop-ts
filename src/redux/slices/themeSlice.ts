import { createSlice } from '@reduxjs/toolkit';
import { Theme } from '../../@types/theme';

const getTheme = (): Theme => {
    const theme = window?.localStorage?.getItem('theme');
    if (theme) return theme as Theme;

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }

    return 'light';
};

// Initial state
interface IThemeState {
    theme: Theme;
}

const initialState: IThemeState = {
    theme: getTheme(),
};

// Slice
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchTheme(state: IThemeState) {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            window.localStorage.setItem('theme', state.theme);
        },
    },
});

export const { switchTheme } = themeSlice.actions;
export default themeSlice.reducer;
