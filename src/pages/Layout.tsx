import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Wrapper } from '../components/globalStyled';
import Header from '../components/Header';

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
