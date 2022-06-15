import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<h2>Home</h2>} />
                <Route path=":category" element={<h2>Category</h2>} />
            </Route>
        </Routes>
    );
};

export default App;
