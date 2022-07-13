import { FC, useEffect } from 'react';

import Header from '../components/Header';
import { Wrapper } from '../components/globalStyled';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Wrapper>
            <Header />

            <Outlet />

            <Footer />
        </Wrapper>
    );
};

export default Layout;
