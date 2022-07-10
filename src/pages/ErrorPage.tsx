import { FC } from 'react';
import styled from 'styled-components';

import { Container, Main } from '../components/globalStyled';

// - - - - - - STYLED-COMPONENTS
const MainErrorPageStyled = styled(Main)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PageInner = styled.div`
    text-align: center;

    span {
        font-size: 3rem;
    }

    h1 {
        font-size: 2.2em;
        margin-bottom: 0.3em;
    }

    p {
        max-width: 600px;
        margin-bottom: 1.5em;
    }
`;
// - - - - - - - - - - - - - - -

const ErrorPage: FC = () => {
    return (
        <MainErrorPageStyled>
            <Container>
                <PageInner>
                    <span>😔</span>
                    <h1>We can't load the page.</h1>
                    <p>We're sorry, an error has occurred. Please try again later.</p>
                </PageInner>
            </Container>
        </MainErrorPageStyled>
    );
};

export default ErrorPage;
