import { FC } from 'react';
import styled from 'styled-components';

const CartEmptyStyled = styled.li`
    width: 100%;
    height: 350px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    text-align: center;

    span {
        font-size: 3rem;
        margin-bottom: 0.4em;
    }

    h2 {
        font-size: 2em;
        margin-bottom: 0.5em;
    }

    p {
        font-size: 1.2em;
    }
`;

const CartEmpty: FC = () => {
    return (
        <CartEmptyStyled>
            <span>😎</span>
            <h2>Your cart is empty</h2>
            <p>Go to our products page and add something to your shopping cart.</p>
        </CartEmptyStyled>
    );
};

export default CartEmpty;
