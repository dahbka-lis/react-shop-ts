import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Main, StyledButton } from '../components/globalStyled';

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

const NotFoundPage: FC = () => {
    const navigate = useNavigate();

    const navigateToHome = () => navigate('/');

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
                    <StyledButton onClick={navigateToHome}>Go home</StyledButton>
                </PageInner>
            </Container>
        </MainNotFoundStyled>
    );
};

export default NotFoundPage;
