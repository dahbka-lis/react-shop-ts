import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './globalStyled';

const FooterOuter = styled.div`
    color: #fff;
    background-color: var(--bg-footer);
    padding-block: 1.5rem;
`;

const FooterInner = styled.div`
    font-size: 0.8em;
    letter-spacing: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
        font-size: 0.5em;
    }

    & a {
        color: #10b981;

        &:hover {
            color: #1cca90;
        }
    }
`;

interface IFooterProps {}

const Footer: FC<IFooterProps> = () => {
    return (
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
    );
};

export default Footer;
