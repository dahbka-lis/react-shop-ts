import { FC } from 'react';
import styled from 'styled-components';
import { Container, Main } from '../components/globalStyled';

const PageInner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding-block: 2rem;
`;

const ProductCard = styled.div`
    width: 100%;
    border-radius: 0.75rem;
    display: flex;
    background-color: var(--primary);

    img {
        max-width: min(20vw, 9rem);
        max-height: min(20vw, 9rem);
        object-fit: cover;
        border-radius: 0.75rem 0 0 0.75rem;
    }
`;

const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    padding-inline: 1.5rem;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;

        & > span {
            justify-self: end;
            font-size: 0.8em;
            grid-column: 3/4;
            grid-row: 2/3;
        }

        & > svg {
            grid-column: 1/4;
            grid-row: 1/3;
        }
    }
`;

const CardTitle = styled.div`
    display: flex;
    flex-direction: column;

    span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media (max-width: 768px) {
        grid-column: 1/3;

        span {
            font-size: 0.7em;
        }

        sub {
            font-size: 0.5em;
        }
    }
`;

const IconStyled = styled.div`
    fill: var(--alt);
    transform: scale(1);
    cursor: pointer;

    @media (max-width: 768px) {
        transform: scale(0.6);
    }
`;

const CardCount = styled.div`
    display: flex;
    gap: 1rem;

    span {
        font-size: 1.3em;
    }

    @media (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 2/3;
        gap: 0.5rem;
        align-items: center;

        span {
            font-size: 0.8em;
        }
    }
`;

const CartPage: FC = () => {
    return (
        <Main>
            <Container>
                <PageInner>
                    <ProductCard>
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
                        <CardInfo>
                            <CardTitle>
                                <span>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</span>
                                <sub>men's clothing</sub>
                            </CardTitle>
                            <CardCount>
                                <IconStyled>
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z" />
                                    </svg>
                                </IconStyled>
                                <span>1</span>
                                <IconStyled>
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z" />
                                    </svg>
                                </IconStyled>
                            </CardCount>
                            <span>$ 123.5</span>
                            <IconStyled>
                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z" />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                                    />
                                </svg>
                            </IconStyled>
                        </CardInfo>
                    </ProductCard>
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
