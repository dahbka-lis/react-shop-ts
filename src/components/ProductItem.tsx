import React, { FC } from 'react';
import styled from 'styled-components';
import { ICardItem } from '../pages/CategoriesPage';
import { StyledButton } from './globalStyled';

const StyledProductItem = styled.div`
    max-width: 490px;
    flex: 1 1 50%;
    border-radius: 10px;
    margin-bottom: 4rem;
    background-color: var(--primary);
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;

    hr {
        margin-block: 1rem;
        opacity: 0.4;
    }

    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const ImageBlock = styled.div`
    img {
        height: 200px;
        border-radius: 10px 10px 0 0;
        object-fit: cover;

        cursor: pointer;
        transition: opacity 0.2s ease;

        &:hover {
            opacity: 0.7;
        }
    }
`;

const ProductInfo = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const ProductBuy = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-self: flex-end;

    span {
        font-size: 1.2em;
    }
`;

const ProductItem: FC<ICardItem> = ({ title, description, image, price, rating }) => {
    return (
        <StyledProductItem>
            <ImageBlock>
                <img src={image} alt="" />
            </ImageBlock>

            <ProductInfo>
                <h3>{title}</h3>
                <hr />
                <ProductBuy>
                    <span>$ {price}</span>
                    <StyledButton>Add to cart</StyledButton>
                </ProductBuy>
            </ProductInfo>
        </StyledProductItem>
    );
};

export default ProductItem;
