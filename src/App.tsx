import { FC, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContextType } from './@types/theme';
import { ThemeContext } from './context/ThemeContext';
import CartPage from './pages/Cart';
import CategoriesPage from './pages/Categories';
import HomePage from './pages/Home';
import Layout from './pages/Layout';
import NotFoundPage from './pages/NotFound';
import ProductItemPage from './pages/ProductItem';

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
                <Route path="/products/:categoryName/:id" element={<ProductItemPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

export default App;
