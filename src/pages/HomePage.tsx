import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import homeImage from '../assets/img/homepage-bg.jpg';
import { StyledButton, Main } from '../components/globalStyled';

const MainHomePage = styled(Main)`
    color: #fff;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 6;
    background: url(${homeImage}) no-repeat center / cover;

    & div:first-child {
        position: relative;
        z-index: 9;
    }
`;

const WelcomeInner = styled.div`
    font-size: max(1em, 1vw);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 3em;
        margin-bottom: 0.2em;
    }

    & p {
        max-width: 600px;

        @media (min-width: 2300px) {
            max-width: none;
        }
    }

    & button {
        margin-top: 1.5rem;
    }
`;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    background-color: #00000060;
    position: absolute;
    inset: 0;
    z-index: 7;
`;

interface IHomePageProps {}

const HomePage: FC<IHomePageProps> = () => {
    const navigate = useNavigate();

    const navigateToProducts = () => navigate('all');

    return (
        <MainHomePage>
            <WelcomeInner>
                <h1>Everything you need</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ad quod amet quo fuga expedita,
                    laboriosam suscipit neque inventore quam!
                </p>
                <StyledButton onClick={navigateToProducts}>Check products</StyledButton>
            </WelcomeInner>
            <Overlay />
        </MainHomePage>
    );
};

export default HomePage;
