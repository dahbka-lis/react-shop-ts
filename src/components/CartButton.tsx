import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CartIcon = styled.div`
    @media (max-width: 768px) {
        transform: scale(0.8);
        margin-right: 5px;
    }
    display: block;
    box-sizing: border-box;
    position: relative;
    transform: scale(var(--ggs, 1));
    width: 20px;
    height: 21px;
    margin-right: 10px;
    background: linear-gradient(to left, #fff 12px, transparent 0) no-repeat -1px 6px/18px 2px,
        linear-gradient(to left, #fff 12px, transparent 0) no-repeat 6px 14px/11px 2px,
        linear-gradient(to left, #fff 12px, transparent 0) no-repeat 0 2px/4px 2px,
        radial-gradient(circle, #fff 60%, transparent 40%) no-repeat 12px 17px/4px 4px,
        radial-gradient(circle, #fff 60%, transparent 40%) no-repeat 6px 17px/4px 4px;

    &::after,
    &::before {
        content: '';
        display: block;
        position: absolute;
        box-sizing: border-box;
        width: 2px;
        height: 14px;
        background: #fff;
        top: 2px;
        left: 4px;
        transform: skew(12deg);
    }
    &::after {
        height: 10px;
        top: 6px;
        left: 16px;
        transform: skew(-12deg);
    }
`;

const StyledButton = styled.button`
    &[data-cart] {
        padding: 1em 2em 1em 1.3em;
    }

    &[data-back] {
        padding: 1.107em 2em;
    }

    color: #fff;
    font-size: 1em;
    font-weight: 700;
    line-height: 1;
    border: none;
    border-radius: 50px;
    display: flex;
    align-items: center;
    background: #10b981;

    transition: background 0.1s ease-in-out;

    &:hover {
        background: #0c9b6b;
    }

    &:active {
        background: #1cca90;
    }

    & span {
        padding-top: 0.1em;
    }
    @media (max-width: 1024px) {
        margin-right: calc(50px + 1%);
    }

    @media (max-width: 768px) {
        font-size: 0.75em;
    }
`;

interface ICartButtonProps {}

const CartButton: FC<ICartButtonProps> = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const navigateToCart = (): void => navigate('/cart');
    const navigateBack = (): void => navigate(-1);

    if (pathname === '/cart') {
        return (
            <StyledButton onClick={navigateBack} data-back>
                <span>Go back</span>
            </StyledButton>
        );
    }

    return (
        <StyledButton onClick={navigateToCart} data-cart>
            <CartIcon />
            <span>$125</span>
        </StyledButton>
    );
};

export default CartButton;
