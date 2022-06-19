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

export const FooterToBottom = styled.footer`
    flex: 0 0 auto;
`;

export const ArrowIcon = styled.div`
    display: block;
    width: 20px;
    height: 21px;
    border-radius: 22px;

    position: relative;

    transform: scale(1.4);

    @media (max-width: 768px) {
        width: 18px;
        transform: scale(1.2);
    }

    &::after,
    &::before {
        content: '';
        display: block;

        position: absolute;
        left: 0px;
    }
    &::after {
        width: 8px;
        height: 8px;
        border-bottom: 2px solid;
        border-left: 2px solid;

        bottom: 6px;
        transform: rotate(45deg);
    }
    &::before {
        width: 10px;
        height: 2px;

        bottom: 9px;
        background: currentColor;
    }
`;

export const StyledButton = styled.button`
    color: #fff;
    font-size: 0.9em;
    font-weight: 700;
    line-height: 1;

    border: none;
    border-radius: 50px;
    padding: 0.75em 1.5em;

    display: flex;
    align-items: center;

    background: var(--secondary);
    transition: background 0.1s ease-in-out;

    @media (max-width: 768px) {
        font-size: 0.75em;
    }

    &:hover {
        background: #0c9b6b;
    }

    &:active {
        background: var(--secondary-light);
    }

    & span {
        padding-top: 0.1em;
    }
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    inset: 0;
    z-index: 8;

    background-color: #00000060;
`;
