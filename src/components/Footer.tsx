import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, FooterToBottom } from './globalStyled';

// - - - - - - STYLED-COMPONENTS

const FooterOuter = styled.div`
    background-color: var(--primary);
    padding: 35px 0 20px;
    font-size: 14px;
    line-height: 24px;
    color: var(--alt);
`;

const FooterInner = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 0.25fr;
    grid-template-rows: 1fr 0.25fr;
    grid-column-gap: 3em;
    grid-row-gap: 3em;

    h6 {
        font-size: 1.3em;
        margin-bottom: 0.7em;
    }

    span,
    li,
    p,
    a {
        opacity: 0.7;
    }
`;

const AboutBlock = styled.div`
    grid-column: 1/2;
    /* max-width: 600px; */
`;

const CategoriesBlock = styled.div`
    grid-column: 2/3;

    & ul {
        list-style: none;
        display: flex;
        flex-direction: column;

        & a {
            color: inherit;
            text-decoration: none;
            transition: color 0.1s ease-in-out, opacity 0.1s ease-in-out;

            &:hover {
                color: var(--secondary);
                opacity: 0.9;
            }
        }
    }
`;

const ChangeThemeBlock = styled.div``;

const RightsBlock = styled.div`
    grid-column: 1/4;
    grid-row: 2/3;
    border-top: 1px var(--alt) solid;
    padding-top: 0.6em;
    opacity: 0.8;
`;

// - - - - - - - - - - - - - - -

interface IFooterProps {}

// <span>
//     {new Date().getFullYear()} <Link to="/">Gracechapel</Link>
// </span>
// <span>
//     This site is a test project. Made by{' '}
//     <a href="https://github.com/DaXBka" title="GitHub profile" target="_blank" rel="noreferrer">
//         DaXBka
//     </a>
// </span>

const Footer: FC<IFooterProps> = () => {
    return (
        <FooterToBottom>
            <FooterOuter>
                <Container>
                    <FooterInner>
                        <AboutBlock>
                            <h6>About</h6>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas natus voluptatibus,
                                repudiandae deleniti quos voluptate esse dolorem fuga aliquam tempore architecto
                                perspiciatis cumque excepturi, laudantium culpa nesciunt et eos explicabo.
                            </p>
                        </AboutBlock>
                        <CategoriesBlock>
                            <h6>Categories</h6>
                            <ul>
                                <li>
                                    <Link to="all">All</Link>
                                </li>
                                <li>
                                    <Link to="all">Women's</Link>
                                </li>
                                <li>
                                    <Link to="all">Men's</Link>
                                </li>
                                <li>
                                    <Link to="all">Jewelery</Link>
                                </li>
                                <li>
                                    <Link to="all">Electronics</Link>
                                </li>
                            </ul>
                        </CategoriesBlock>
                        <ChangeThemeBlock>Theme switch :*</ChangeThemeBlock>
                        <RightsBlock>
                            <span>Copyright © 2017 All Rights Reserved by Scanfcode.</span>
                        </RightsBlock>
                    </FooterInner>
                </Container>
            </FooterOuter>
        </FooterToBottom>
    );
};

export default Footer;
