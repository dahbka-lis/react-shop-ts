import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div`
    max-width: 1200px;
    margin-inline: auto;
    padding-inline: 40px;

    @media (max-width: 1024px) {
        padding-inline: 20px;
    }
`;

export const Main = styled.main`
    flex: 1 0 auto;
    background-color: lightblue;
`;

export const FooterStyled = styled.footer`
    flex: 0 0 auto;
`;
