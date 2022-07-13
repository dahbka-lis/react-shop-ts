import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
    color: var(--alt);

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
`;

export const StyledLink = styled(Link)`
    color: #fff;
    font-size: 0.9em;
    font-weight: 700;
    line-height: 1;
    text-decoration: none;
    user-select: none;

    border: none;
    border-radius: 50px;
    padding: 0.75em 1.5em;

    display: inline-flex;
    align-items: center;

    background: var(--secondary);
    transition: background 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
        background: #0c9b6b;
    }

    &:active {
        background: var(--secondary-tp);
    }

    & span {
        padding-top: 0.1em;
    }
`;

export const StyledButton = styled.button`
    color: #fff;
    font-size: 0.9em;
    font-weight: 700;
    line-height: 1;
    user-select: none;

    border: none;
    border-radius: 50px;
    padding: 0.75em 1.5em;

    display: inline-flex;
    align-items: center;

    background: var(--secondary);
    transition: background 0.1s ease-in-out;
    cursor: pointer;

    &:hover {
        background: #0c9b6b;
    }

    &:active {
        background: var(--secondary-tp);
    }

    & span {
        padding-top: 0.1em;
    }
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;

    position: fixed;
    inset: 0;
    z-index: 8;

    background-color: #00000075;
`;

export const MyLink = styled.a`
    color: var(--secondary);
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: var(--secondary-light);
        text-decoration: underline;
    }
`;
