import { useAppDispatch, useAppSelector } from './redux';
import { switchTheme } from '../redux/slices/themeSlice';

export const useAppTheme = () => {
    const { theme } = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();

    const changeTheme = () => {
        dispatch(switchTheme());
    };

    return [theme, changeTheme];
};
