import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IProduct } from '../../@types/product';
import { StyledButton } from '../globalStyled';

const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    padding-inline: 1.5rem;

    section {
        margin-bottom: 2rem;

        h1 {
            font-size: 1.5em;
        }

        hr {
            border-color: var(--alt);
            opacity: 0.5;
            margin-top: 1rem;
            margin-bottom: 0.75rem;
        }

        a {
            color: inherit;
            text-decoration: none;
            font-weight: 400;
            opacity: 0.7;

            &:hover {
                opacity: 1;
                text-decoration: underline;
            }
        }

        & > div {
            display: flex;
            flex-direction: column;

            @media (max-width: 768px) {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
        }
    }

    p {
        line-height: 1.75;
        margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
        padding: 1.5rem;
    }
`;

const Rating = styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.5em;

    svg {
        fill: var(--alt);
        margin-right: 0.5rem;
        transform: scale(1.1);
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        margin-bottom: 0;
    }
`;

const BuyInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 1.5rem;
    }
`;

type ProductAsideProps = {
    product: IProduct;
};

const ProductAside: FC<ProductAsideProps> = ({ product }) => {
    return (
        <Aside>
            <section>
                <h1>{product.title}</h1>
                <hr />

                <div>
                    <Rating>
                        <svg width="16" height="16" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        {product.rating.rate} ({product.rating.count})
                    </Rating>
                    <Link to={`/products/${product.category}`}>{product.category}</Link>
                </div>
            </section>
            <p>{product.description}</p>
            <BuyInfo>
                <span>$ {product.price}</span>
                <StyledButton>Add to cart</StyledButton>
            </BuyInfo>
        </Aside>
    );
};

export default ProductAside;
