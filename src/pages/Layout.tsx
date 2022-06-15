import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, FooterStyled, Main, Wrapper } from '../components/globalStyled';
import Header from '../components/Header';

interface ILayoutProps {}

const Layout: FC<ILayoutProps> = () => {
    return (
        <Wrapper>
            <Header />

            <Main>
                <Container>
                    <Outlet />
                </Container>
            </Main>

            <FooterStyled>Footer!</FooterStyled>
        </Wrapper>
    );
};

export default Layout;
