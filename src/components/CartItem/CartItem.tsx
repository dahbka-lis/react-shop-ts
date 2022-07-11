import React, { FC } from 'react';
import styled from 'styled-components';
import { IconClose, IconMinus, IconPlus } from '../globalStyled';

const CartItemStyled = styled.div`
    width: 100%;
    border-radius: 10px;

    display: flex;
    overflow: hidden;
    background-color: var(--primary);

    img {
        width: auto;
        max-height: min(15vw, 200px);
    }

    @media (max-width: 768px) {
        img {
            display: none;
        }
    }
`;

const CardInfo = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;

    & > span {
        padding-bottom: 0.3rem;
    }

    @media (max-width: 768px) {
        padding: 1rem;

        & > span {
            font-size: 0.75em;
        }
    }
`;

const CardTitle = styled.div`
    display: flex;
    flex-direction: column;

    span {
        font-size: 1.3rem;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        display: inline-block;
        max-width: 400px;
        margin-bottom: 0.25rem;
    }

    @media (max-width: 768px) {
        span {
            font-size: 0.8rem;
            max-width: min(30vw, 150px);
        }

        sub {
            display: none;
        }
    }
`;

const CardCount = styled.div`
    display: flex;
    gap: 1rem;

    & > span {
        font-size: 1.15rem;
    }

    @media (max-width: 768px) {
        gap: 0.3rem;

        & > span {
            font-size: 1rem;
        }
    }
`;

interface ICartItemProps {}

const CartItem: FC<ICartItemProps> = () => {
    return (
        <CartItemStyled>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
            <CardInfo>
                <CardTitle>
                    <span>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</span>
                    <sub>men's clothing</sub>
                </CardTitle>

                <CardCount>
                    <IconMinus />
                    <span>1</span>
                    <IconPlus />
                </CardCount>

                <span>$&nbsp;123.5</span>
                <IconClose />
            </CardInfo>
        </CartItemStyled>
    );
};

export default CartItem;
