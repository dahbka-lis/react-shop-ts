import { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import CartPage from './pages/CartPage';
import ProductsPage from './pages/ProductListPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import NotFoundPage from './pages/NotFoundPage';
import ProductItemPage from './pages/ProductPage';

import { useAppTheme } from './hooks/useAppTheme';

const App: FC = () => {
    const [theme] = useAppTheme();

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
                <Route path="/products/" element={<ProductsPage />} />
                <Route path="/products/:categoryName" element={<ProductsPage />} />
                <Route path="/products/current/:id" element={<ProductItemPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

export default App;
