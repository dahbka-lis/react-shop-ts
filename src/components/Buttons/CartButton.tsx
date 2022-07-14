import { FC } from 'react';
import styled from 'styled-components';

import { useLocation, useNavigate } from 'react-router-dom';

import { ArrowIcon, CartIcon } from '../Icons';
import { StyledButton } from '../globalStyled';
import { useAppSelector } from '../../hooks/redux';

// - - - - - - STYLED-COMPONENTS
const CartButtonInner = styled(StyledButton)`
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
    const { totalPrice, totalCount } = useAppSelector(state => state.cart);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const navigateToCart = () => navigate('/cart');

    const navigateBack = () => navigate(-1);

    if (pathname === '/cart') {
        return (
            <CartButtonInner onClick={navigateBack}>
                <ArrowIcon /> Back
            </CartButtonInner>
        );
    }

    return (
        <CartButtonInner onClick={navigateToCart}>
            <CartIcon altColor={false} />
            <CountNumber>{totalCount}</CountNumber>
            <span>${totalPrice}</span>
        </CartButtonInner>
    );
};

export default CartButton;
