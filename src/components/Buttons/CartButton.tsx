import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowIcon, StyledLink } from '../globalStyled';

// - - - - - - STYLED-COMPONENTS
const CartLink = styled(StyledLink)`
    @media (max-width: 1024px) {
        margin-right: calc(50px + 1%);
    }
    @media (max-width: 768px) {
        font-size: 0.75em;
    }
`;

const CartIcon = styled.div`
    display: block;
    width: 20px;
    height: 21px;
    margin-right: 10px;

    position: relative;
    transform: scale(var(--ggs, 1));
    background: linear-gradient(to left, #fff 12px, transparent 0) no-repeat -1px 6px/18px 2px,
        linear-gradient(to left, #fff 12px, transparent 0) no-repeat 6px 14px/11px 2px,
        linear-gradient(to left, #fff 12px, transparent 0) no-repeat 0 2px/4px 2px,
        radial-gradient(circle, #fff 60%, transparent 40%) no-repeat 12px 17px/4px 4px,
        radial-gradient(circle, #fff 60%, transparent 40%) no-repeat 6px 17px/4px 4px;

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

        background: #fff;
        transform: skew(12deg);
    }
    &::after {
        height: 10px;
        top: 6px;
        left: 16px;
        transform: skew(-12deg);
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
            <CartIcon />
            <CountNumber>2</CountNumber>
            <span>$125</span>
        </CartLink>
    );
};

export default CartButton;
