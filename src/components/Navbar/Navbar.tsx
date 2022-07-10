import { FC, useState } from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

// - - - - - - STYLED-COMPONENTS
const NavbarStyled = styled.nav`
    z-index: 10;

    @media (max-width: 1024px) {
        display: none;

        &.active {
            display: flex;
            justify-content: center;
            align-items: center;

            position: fixed;
            inset: 0;

            background-color: var(--primary);
        }
    }

    ul {
        display: flex;
        align-items: center;

        list-style: none;

        @media (max-width: 1024px) {
            flex-direction: column;

            & li:not(:last-child) {
                margin-right: 0;
                margin-bottom: 10vh;
            }
        }

        & li:not(:last-child) {
            margin-right: 1.3vw;
        }
    }

    li a {
        color: inherit;
        text-decoration: none;

        padding: 0.5em 1.5em;
        border-radius: 50px;

        transition: background 0.15s ease-in-out, color 0.15s ease-in-out;

        &:hover {
            background: var(--secondary-tp);
        }

        &.active {
            color: white;
            background: var(--secondary);
        }
    }
`;

const IconMenu = styled.button`
    display: none;
    border: none;

    width: 30px;
    height: 24px;

    position: absolute;
    top: calc(50% - 12px);
    right: 1%;
    z-index: 90;

    cursor: pointer;
    background: transparent;

    @media (max-width: 1024px) {
        display: block;
    }

    div {
        position: absolute;
        top: calc(50% - 1px);
        left: 0px;

        width: 100%;
        height: 2px;

        background-color: var(--alt);
        transition: transform 0.3s ease, top 0.3s ease, bottom 0.3s ease;

        &:first-child {
            top: 0px;
        }

        &:last-child {
            top: auto;
            bottom: 0px;
        }
    }

    &.active {
        div {
            transform: scale(0);

            &:first-child {
                top: calc(50% - 1px);
                transform: rotate(-45deg);
            }

            &:last-child {
                bottom: calc(50% - 1px);
                transform: rotate(45deg);
            }
        }
    }
`;
// - - - - - - - - - - - - - - -

const Navbar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (): void => setIsOpen(state => !state);
    const closeMenu = (): void => {
        setTimeout(() => setIsOpen(false), 200);
    };

    return (
        <div>
            <IconMenu onClick={toggleMenu} className={isOpen ? 'active' : ''}>
                <div></div>
                <div></div>
                <div></div>
            </IconMenu>
            <NavbarStyled className={isOpen ? 'active' : ''}>
                <ul>
                    <li>
                        <NavLink end to="products" onClick={closeMenu}>
                            All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="products/women's%20clothing" onClick={closeMenu}>
                            Women's
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="products/men's%20clothing" onClick={closeMenu}>
                            Men's
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="products/jewelery" onClick={closeMenu}>
                            Jewelery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="products/electronics" onClick={closeMenu}>
                            Electronics
                        </NavLink>
                    </li>
                </ul>
            </NavbarStyled>
        </div>
    );
};

export default Navbar;
