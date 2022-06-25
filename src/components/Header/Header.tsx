import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartButton from '../Buttons/CartButton';
import { Container } from '../globalStyled';
import Navbar from '../Navbar';

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
`;
// - - - - - - - - - - - - - - -

type HeaderLogo = 'GRACECHAPEL' | 'GC';

const Header: FC = () => {
    const { pathname } = useLocation();
    let textLogo: HeaderLogo = 'GRACECHAPEL';

    if (window.innerWidth <= 540) textLogo = 'GC';

    return (
        <HeaderStyled>
            <Container>
                <HeaderInner>
                    <TextLogo>
                        <Link to="/">{textLogo}</Link>
                    </TextLogo>
                    <Navbar />
                    {!!pathname.slice(1) && <CartButton />}
                </HeaderInner>
            </Container>
        </HeaderStyled>
    );
};

export default Header;
