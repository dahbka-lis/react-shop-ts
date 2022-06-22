import { FC, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContextType } from './@types/theme';
import { ThemeContext } from './context/ThemeContext';
import CartPage from './pages/CartPage';
import CategoriesPage from './pages/CategoriesPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';

const App: FC = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [theme]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/products/:categoryName" element={<CategoriesPage />} />
            </Route>
        </Routes>
    );
};

export default App;
