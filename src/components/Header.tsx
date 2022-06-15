import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './globalStyled';

// - - - - - - STYLES WITH STYLED-COMPONENTS

const HeaderStyled = styled.header`
    padding-block: 1.5rem;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    nav {
        @media (max-width: 768px) {
            display: none;

            &.active {
                display: flex;
                justify-content: center;
                align-items: center;
                position: fixed;
                inset: 0;
                background-color: #fff;
            }
        }
    }

    ul {
        display: flex;
        align-items: center;
        list-style: none;

        & li:not(:last-child) {
            margin-right: 1vw;
        }

        @media (max-width: 768px) {
            flex-direction: column;

            & li:not(:last-child) {
                margin-right: 0;
                margin-bottom: 10vh;
            }
        }
    }

    li a {
        color: inherit;
        text-decoration: none;

        padding: 0.5em 1.5em;
        border-radius: 50px;

        transition: background 0.1s ease-in-out, color 0.1s ease-in-out;

        &:hover {
            background: #d1fae5;
        }

        &.active {
            background: #10b981;
            color: white;
        }
    }
`;

const IconMenu = styled.div`
    display: none;

    @media (max-width: 768px) {
        display: block;

        position: absolute;
        top: calc(50% - 9px);
        right: 2%;
        z-index: 10;

        width: 30px;
        height: 18px;

        cursor: pointer;

        span {
            top: calc(50% - 1px);
            left: 0px;
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #1e293b;
            transition: all 0.3s ease 0s;

            &:first-child {
                top: 0px;
            }

            &:last-child {
                top: auto;
                bottom: 0px;
            }
        }

        &.active {
            span {
                transform: scale(0);

                &:first-child {
                    transform: rotate(-45deg);
                    top: calc(50% - 1px);
                }

                &:last-child {
                    transform: rotate(45deg);
                    bottom: calc(50% - 1px);
                }
            }
        }
    }
`;

// - - - - - - - - - - - - - - - - - -

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = (): void => setIsOpen(state => !state);
    const closeMenu = (): void => setIsOpen(false);

    return (
        <HeaderStyled>
            <Container>
                <HeaderInner>
                    <h2>Webshop</h2>
                    <div>
                        <IconMenu onClick={toggleMenu} className={isOpen ? 'active' : ''}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </IconMenu>
                        <nav className={isOpen ? 'active' : ''}>
                            <ul>
                                <li>
                                    <NavLink to="/" onClick={closeMenu}>
                                        All
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="electronics" onClick={closeMenu}>
                                        Electronics
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="jewelery" onClick={closeMenu}>
                                        Jewelery
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="men's%20clothing" onClick={closeMenu}>
                                        Men's
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="women's%20clothing" onClick={closeMenu}>
                                        Women's
                                    </NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </HeaderInner>
            </Container>
        </HeaderStyled>
    );
};

export default Header;
