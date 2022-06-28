import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CardItem } from '../../@types/card';
import { Overlay, StyledLink } from '../globalStyled';

// - - - - - - STYLED-COMPONENTS
const StyledProductItem = styled.div`
    max-width: 500px;
    border-radius: 10px;
    margin-bottom: 4rem;
    position: relative;

    display: flex;
    flex-direction: column;
    flex: 1 1 50%;

    background-color: var(--primary);
    box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.22);

    hr {
        margin-block: 1rem;
        opacity: 0.4;
    }

    @media (max-width: 1100px) {
        width: 100%;
    }
`;

const ImageBlock = styled.div`
    max-height: 200px;

    img {
        width: 100%;
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
`;

const CardOverlay = styled(Overlay)`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    border-radius: 10px;
    cursor: pointer;

    opacity: 0;
    background-color: #00000070;
    transition: opacity 0.2s ease-in-out;

    &:hover {
        opacity: 1;
    }

    h3 {
        color: #fff;
        max-width: 380px;
        opacity: 1;
    }
`;
// - - - - - - - - - - - - - - -

const ProductItem: FC<CardItem> = ({ title, image, price, category, id }) => {
    const navigate = useNavigate();
    const url = `/products/current/${id}`;

    const onClickViewMore = () => {
        navigate(url);
    };

    return (
        <StyledProductItem>
            <ImageBlock>
                <img src={image} alt="" />
            </ImageBlock>
            <ProductInfo>
                <ProductBuy>
                    <span>$ {price}</span>
                    <StyledLink to={url}>View more</StyledLink>
                </ProductBuy>
            </ProductInfo>
            <CardOverlay onClick={onClickViewMore}>
                <h3>{title}</h3>
            </CardOverlay>
        </StyledProductItem>
    );
};

export default ProductItem;
