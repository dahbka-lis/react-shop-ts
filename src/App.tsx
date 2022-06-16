import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import CartPage from './pages/CartPage';
import CategoriesPage from './pages/CategoriesPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path=":categorie" element={<CategoriesPage />} />
            </Route>
        </Routes>
    );
};

export default App;
