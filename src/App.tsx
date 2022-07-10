import { FC, useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeContextType } from './@types/theme';
import { ThemeContext } from './context/ThemeContext';
import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductListPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import NotFoundPage from './pages/NotFoundPage';
import ProductItemPage from './pages/ProductPage';

const App: FC = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;

    useEffect(() => {
        theme === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark');
    }, [theme]);

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/products/" element={<ProductsPage />} />
                <Route path="/products/:categoryName" element={<ProductsPage />} />
                <Route path="/products/current/:id" element={<ProductItemPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

export default App;
