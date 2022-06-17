import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: var(--alt);
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
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 20px;
    height: 21px;
    transform: scale(1.4);
    border-radius: 22px;

    @media (max-width: 768px) {
        width: 18px;
        transform: scale(1.2);
    }

    &::after,
    &::before {
        content: '';
        display: block;
        box-sizing: border-box;
        position: absolute;
        left: 0px;
    }
    &::after {
        width: 8px;
        height: 8px;
        border-bottom: 2px solid;
        border-left: 2px solid;
        transform: rotate(45deg);
        bottom: 6px;
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
    background: #10b981;

    transition: background 0.1s ease-in-out;

    &:hover {
        background: #0c9b6b;
    }

    &:active {
        background: #1cca90;
    }

    & span {
        padding-top: 0.1em;
    }

    @media (max-width: 768px) {
        font-size: 0.75em;
    }
`;
