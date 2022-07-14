import { FC } from 'react';

import Header from '../components/Header';
import { Wrapper } from '../components/globalStyled';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout: FC = () => {
    return (
        <Wrapper>
            <Header />

            <Outlet />

            <Footer />
        </Wrapper>
    );
};

export default Layout;
