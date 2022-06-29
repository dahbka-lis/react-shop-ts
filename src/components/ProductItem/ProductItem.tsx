import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CardItem } from '../../@types/card';

// - - - - - - STYLED-COMPONENTS
const ProductItemStyled = styled.div`
    max-width: 500px;
    border-radius: 10px;
    margin-bottom: 4rem;
    position: relative;

    display: flex;
    flex-direction: column;
    flex: 1 1 50%;

    cursor: pointer;
    background-color: var(--primary);
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.116);

    hr {
        margin-block: 1rem;
        opacity: 0.4;
    }

    &:hover img {
        opacity: 0.7;
    }

    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const ImageBlock = styled.div`
    max-height: 250px;

    img {
        width: 100%;
        height: 250px;
        border-radius: 10px 10px 0 0;
        object-fit: cover;
        transition: opacity 0.2s ease;
    }
`;

const ProductInfo = styled.div`
    padding: 1.25rem;
    border-radius: 0 0 10px 10px;

    position: relative;
    z-index: 11;

    background-color: var(--primary);
`;

const ProductBuy = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 1.2em;
    }

    h3 {
        color: #fff;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 2em;
    }
`;
// - - - - - - - - - - - - - - -

const ProductItem: FC<CardItem> = ({ title, image, price, id }) => {
    const navigate = useNavigate();
    const url = `/products/current/${id}`;

    const onClickViewMore = () => navigate(url);

    return (
        <ProductItemStyled onClick={onClickViewMore}>
            <ImageBlock>
                <img src={image} alt="" />
            </ImageBlock>
            <ProductInfo>
                <ProductBuy>
                    <h3>{title}</h3>
                    <span>$&nbsp;{price}</span>
                </ProductBuy>
            </ProductInfo>
        </ProductItemStyled>
    );
};

export default ProductItem;
