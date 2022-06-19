import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Main, Wrapper } from '../components/globalStyled';
import Header from '../components/Header';

interface ILayoutProps {}

const Layout: FC<ILayoutProps> = () => {
    return (
        <Wrapper>
            <Header />

            <Main>
                <Outlet />
            </Main>

            <Footer />
        </Wrapper>
    );
};

export default Layout;
