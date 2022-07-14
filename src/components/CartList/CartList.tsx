import React, { FC } from 'react';
import styled from 'styled-components';
import { ICartItem } from '../../@types/product';
import CartEmpty from '../CartEmpty';
import CartItem from '../CartItem';

const CartListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    gap: clamp(1rem, 4vw, 2rem);
`;

interface ICartListProps {
    items: ICartItem[];
}

const CartList: FC<ICartListProps> = ({ items }) => {
    return (
        <CartListStyled>
            {items.length === 0 ? <CartEmpty /> : items.map(item => <CartItem key={item.id} item={item} />)}
        </CartListStyled>
    );
};

export default CartList;
