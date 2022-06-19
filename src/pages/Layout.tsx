import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Wrapper } from '../components/globalStyled';
import Header from '../components/Header';

interface ILayoutProps {}

const Layout: FC<ILayoutProps> = () => {
    return (
        <Wrapper>
            <Header />

            <Outlet />

            <Footer />
        </Wrapper>
    );
};

export default Layout;
