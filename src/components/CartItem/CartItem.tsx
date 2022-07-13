import React, { FC } from 'react';
import styled from 'styled-components';
import { ICartItem } from '../../@types/product';
import { useAppDispatch } from '../../hooks/redux';
import { addItem, decrementItem, removeItem } from '../../redux/slices/cartSlice';
import { IconDelete, IconMinus, IconPlus } from '../Icons';

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

interface ICartItemProps {
    item: ICartItem;
}

const CartItem: FC<ICartItemProps> = ({ item }) => {
    const dispatch = useAppDispatch();

    const incrementItemCount = () => {
        dispatch(addItem(item));
    };

    const decrementItemCount = () => {
        dispatch(decrementItem(item.id));
    };

    const deleteItem = () => {
        if (window.confirm('Are you sure you want to remove this from your cart?')) {
            dispatch(removeItem(item.id));
        }
    };

    return (
        <CartItemStyled>
            <img src={item.image} alt="" />
            <CardInfo>
                <CardTitle>
                    <span>{item.title}</span>
                    <sub>{item.category}</sub>
                </CardTitle>

                <CardCount>
                    <IconMinus onClick={decrementItemCount} />
                    <span>{item.count}</span>
                    <IconPlus onClick={incrementItemCount} />
                </CardCount>

                <span>$&nbsp;{Math.round(item.price * item.count * 100) / 100}</span>
                <IconDelete onClick={deleteItem} />
            </CardInfo>
        </CartItemStyled>
    );
};

export default CartItem;
