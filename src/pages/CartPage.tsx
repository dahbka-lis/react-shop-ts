import { FC } from 'react';
import styled from 'styled-components';
import CartList from '../components/CartList';
import { Container, Main, MyLink, StyledButton } from '../components/globalStyled';
import { TrashIcon, CartIcon } from '../components/Icons';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { clearCart } from '../redux/slices/cartSlice';

const PageInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding-block: 2rem;

    hr {
        opacity: 0.2;
    }
`;

const CartInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        display: flex;
        align-items: center;
        gap: 0.25em;

        div {
            transform: scale(1.4);
        }
    }

    & > a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
`;

const CartTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-size: 1.2rem;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 1rem;
        }
    }
`;

const CartPage: FC = () => {
    const { items, totalPrice } = useAppSelector(state => state.cart);
    const dispatch = useAppDispatch();

    const toEmptyCart = () => {
        if (window.confirm('Are you sure you want to empty the cart?')) {
            dispatch(clearCart());
        }
    };

    return (
        <Main>
            <Container>
                <PageInner>
                    <CartInfo>
                        <h1>
                            <CartIcon altColor /> My cart
                        </h1>
                        <MyLink onClick={toEmptyCart}>
                            <TrashIcon />
                            Empty cart
                        </MyLink>
                    </CartInfo>

                    <hr />

                    <CartList items={items} />

                    <hr />

                    <CartTotal>
                        <h2>Total price: ${totalPrice}</h2>
                        <StyledButton disabled={items.length === 0}>Go order</StyledButton>
                    </CartTotal>
                </PageInner>
            </Container>
        </Main>
    );
};

export default CartPage;
