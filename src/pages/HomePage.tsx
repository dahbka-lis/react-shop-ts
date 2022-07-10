import { FC } from 'react';
import styled from 'styled-components';

import { StyledLink, Main, Overlay } from '../components/globalStyled';

// - - - - - - STYLED-COMPONENTS
const MainHomeStyled = styled(Main)`
    color: #fff;

    padding-top: 2rem;
    padding-inline: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    z-index: 1;

    background: url('https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
        no-repeat center / cover;
`;

const PageInner = styled.div`
    font-size: max(1em, 1vw);
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    z-index: 9;

    & h1 {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 3em;
        margin-bottom: 0.2em;
    }

    & p {
        max-width: 600px;

        @media (min-width: 2300px) {
            max-width: 1200px;
        }
    }

    & a {
        margin-top: 1.5rem;
    }
`;
// - - - - - - - - - - - - - - -

const HomePage: FC = () => {
    return (
        <MainHomeStyled>
            <PageInner>
                <h1>Everything you need</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ad quod amet quo fuga expedita,
                    laboriosam suscipit neque inventore quam!
                </p>
                <StyledLink to="products">Check products</StyledLink>
            </PageInner>
            <Overlay />
        </MainHomeStyled>
    );
};

export default HomePage;
