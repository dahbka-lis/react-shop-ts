import { FC } from 'react';
import styled from 'styled-components';

import { Container, Main, StyledLink } from '../components/globalStyled';

// - - - - - - STYLED-COMPONENTS
const MainNotFoundStyled = styled(Main)`
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

    button {
        margin: 0 auto;
    }
`;
// - - - - - - - - - - - - - - -

const NotFoundPage: FC = () => {
    return (
        <MainNotFoundStyled>
            <Container>
                <PageInner>
                    <span>😔</span>
                    <h1>This page does not exist.</h1>
                    <p>
                        You may have incorrectly specified the parameters of our page. We recommend using the links on
                        the site without changing them yourself.
                    </p>
                    <StyledLink to="/">Go home</StyledLink>
                </PageInner>
            </Container>
        </MainNotFoundStyled>
    );
};

export default NotFoundPage;
