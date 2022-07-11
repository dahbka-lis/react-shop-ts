import { FC } from 'react';
import styled from 'styled-components';

import { useLocation } from 'react-router-dom';

import { ArrowIcon, CartIcon, StyledLink } from '../globalStyled';

// - - - - - - STYLED-COMPONENTS
const CartLink = styled(StyledLink)`
    @media (max-width: 1024px) {
        margin-right: calc(50px + 1%);
    }
    @media (max-width: 768px) {
        font-size: 0.75em;
    }
`;

const CountNumber = styled.span`
    display: inline-block;
    border-right: 1.5px solid #fff;
    padding-bottom: 1px;
    padding-right: 0.75em;
    margin-right: 0.75em;
`;
// - - - - - - - - - - - - - - -

const CartButton: FC = () => {
    const { pathname } = useLocation();

    if (pathname === '/cart') {
        return (
            <CartLink to="products">
                <ArrowIcon /> Back
            </CartLink>
        );
    }

    return (
        <CartLink to="cart">
            <CartIcon alt={false} />
            <CountNumber>2</CountNumber>
            <span>$125</span>
        </CartLink>
    );
};

export default CartButton;
