import { FC, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CartButton from './CartButton';
import { Container } from './globalStyled';

// - - - - - - STYLED-COMPONENTS
const HeaderStyled = styled.header`
    color: var(--alt);

    padding-block: 1.2rem;

    position: sticky;
    top: 0;
    z-index: 20;

    background: var(--primary);
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.15);
`;

const TextLogo = styled.span`
    font: 700 1.5em 'Josefin Sans', sans-serif;

    padding-top: 0.3em;
    user-select: none;

    @media (max-width: 768px) {
        font-size: 1.2em;
    }

    & a {
        color: inherit;
        text-decoration: none;
    }
`;

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: relative;

    nav {
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

type HeaderLogo = 'GRACECHAPEL' | 'GC';

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();
    let textLogo: HeaderLogo = 'GRACECHAPEL';

    const toggleMenu = (): void => setIsOpen(state => !state);
    const closeMenu = (): void => {
        setTimeout(() => setIsOpen(false), 200);
    };

    if (window.innerWidth <= 768) textLogo = 'GC';

    return (
        <HeaderStyled>
            <Container>
                <HeaderInner>
                    <TextLogo>
                        <Link to="/">{textLogo}</Link>
                    </TextLogo>
                    <div>
                        <IconMenu onClick={toggleMenu} className={isOpen ? 'active' : ''}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </IconMenu>
                        <nav className={isOpen ? 'active' : ''}>
                            <ul>
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
                        </nav>
                    </div>
                    {!!pathname.slice(1) && <CartButton />}
                </HeaderInner>
            </Container>
        </HeaderStyled>
    );
};

export default Header;
