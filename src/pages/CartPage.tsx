import { FC } from 'react';
import styled from 'styled-components';
import CartItem from '../components/CartItem';
import { CartIcon, Container, Main, MyLink, StyledButton, TrashIcon } from '../components/globalStyled';

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
    return (
        <Main>
            <Container>
                <PageInner>
                    <CartInfo>
                        <h1>
                            <CartIcon alt /> My cart
                        </h1>
                        <MyLink>
                            <TrashIcon />
                            Empty cart
                        </MyLink>
                    </CartInfo>

                    <hr />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <hr />
                    <CartTotal>
                        <h2>Total price: $123.5</h2>
                        <StyledButton>Go order</StyledButton>
                    </CartTotal>
                </PageInner>
            </Container>
        </Main>
    );
};

export default CartPage;

// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
