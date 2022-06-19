import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, FooterToBottom } from './globalStyled';

// - - - - - - STYLED-COMPONENTS

const FooterOuter = styled.div`
    color: #fff;
    padding-block: 1.5rem;
    background-color: var(--primary);
`;

const FooterInner = styled.div`
    color: var(--alt);
    font-size: 0.8em;
    letter-spacing: 1px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
        font-size: 0.5em;
    }

    & a {
        color: var(--secondary);

        &:hover {
            color: var(--secondary-light);
        }
    }
`;

// - - - - - - - - - - - - - - -

interface IFooterProps {}

const Footer: FC<IFooterProps> = () => {
    return (
        <FooterToBottom>
            <FooterOuter>
                <Container>
                    <FooterInner>
                        <span>
                            {new Date().getFullYear()} <Link to="/">Gracechapel</Link>
                        </span>
                        <span>
                            This site is a test project. Made by{' '}
                            <a href="https://github.com/DaXBka" title="GitHub profile" target="_blank" rel="noreferrer">
                                DaXBka
                            </a>
                        </span>
                    </FooterInner>
                </Container>
            </FooterOuter>
        </FooterToBottom>
    );
};

export default Footer;
