import { FC } from 'react';
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
        background: #fff;
    }
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

export const CartIcon = styled.div`
    --color: ${(props: { alt: boolean }) => (props?.alt ? 'var(--alt)' : 'white')};

    display: block;
    width: 20px;
    height: 21px;
    margin-right: 10px;

    position: relative;
    transform: scale(var(--ggs, 1));
    background: linear-gradient(to left, var(--color) 12px, transparent 0) no-repeat -1px 6px/18px 2px,
        linear-gradient(to left, var(--color) 12px, transparent 0) no-repeat 6px 14px/11px 2px,
        linear-gradient(to left, var(--color) 12px, transparent 0) no-repeat 0 2px/4px 2px,
        radial-gradient(circle, var(--color) 60%, transparent 40%) no-repeat 12px 17px/4px 4px,
        radial-gradient(circle, var(--color) 60%, transparent 40%) no-repeat 6px 17px/4px 4px;

    @media (max-width: 768px) {
        margin-right: 5px;
        transform: scale(0.8);
    }

    &::after,
    &::before {
        content: '';
        display: block;
        width: 2px;
        height: 14px;

        position: absolute;
        top: 2px;
        left: 4px;

        background: var(--color);
        transform: skew(12deg);
    }
    &::after {
        height: 10px;
        top: 6px;
        left: 16px;
        transform: skew(-12deg);
    }
`;

export const TrashIcon = styled.div`
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(0.9);
    width: 10px;
    height: 12px;
    border: 2px solid transparent;
    box-shadow: 0 0 0 2px, inset -2px 0 0, inset 2px 0 0;
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    margin-top: 4px;

    &::after,
    &::before {
        content: '';
        display: block;
        box-sizing: border-box;
        position: absolute;
    }
    &::after {
        background: var(--secondary);
        border-radius: 3px;
        width: 16px;
        height: 2px;
        top: -4px;
        left: -5px;

        &:hover {
            background: var(--secondary-light);
        }
    }
    &::before {
        width: 10px;
        height: 4px;
        border: 2px solid;
        border-bottom: transparent;
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
        top: -7px;
        left: -2px;
    }
`;

const IconStyled = styled.div`
    fill: var(--alt);
    transform: scale(1);
    cursor: pointer;
    user-select: none;

    transition: opacity 0.3s ease-in, transform 0.05s ease;

    &:hover {
        opacity: 0.6;
    }

    &:active {
        transform: translateY(15%);
    }

    @media (max-width: 768px) {
        transform: scale(0.6);
    }
`;

export const IconPlus: FC = () => {
    return (
        <IconStyled>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" />
            </svg>
        </IconStyled>
    );
};

export const IconMinus: FC = () => {
    return (
        <IconStyled>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" />
            </svg>
        </IconStyled>
    );
};

export const IconClose: FC = () => {
    return (
        <IconStyled>
            <svg
                style={{ transform: 'scale(1.3)' }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z" />
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                />
            </svg>
        </IconStyled>
    );
};
