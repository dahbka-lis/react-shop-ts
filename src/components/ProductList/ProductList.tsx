import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardItem } from '../../@types/card';
import ProductItem from '../ProductItem';
import SkeletonList from '../SkeletonList';

const ProductListStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;

    @media (max-width: 1100px) {
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
        justify-content: stretch;
    }
`;

type ProductListType = {
    categoryName: string;
};

const ProductList: FC<ProductListType> = ({ categoryName }) => {
    const [cards, setcards] = useState<CardItem[] | null>(null);

    useEffect(() => {
        let ignore = false;
        setcards(null);

        const fetchCardcards = async () => {
            const cards = await axios.get(
                `https://fakestoreapi.com/products${!categoryName ? '' : `/category/${categoryName}`}`
            );

            if (!ignore) setcards(cards.data);
        };

        fetchCardcards();

        return () => {
            ignore = true;
        };
    }, [categoryName]);

    return (
        <ProductListStyled>
            {cards ? cards.map(cards => <ProductItem {...cards} key={cards.id} />) : <SkeletonList />}
        </ProductListStyled>
    );
};

export default ProductList;
