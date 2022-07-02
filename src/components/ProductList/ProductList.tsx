import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardItem } from '../../@types/card';
import ProductItem from '../ProductItem';
import SkeletonList from '../SkeletonList';

// - - - - - - STYLED-COMPONENTS
const ProductListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 2rem;
    justify-content: center;
`;
// - - - - - - - - - - - - - - -

type ProductListType = {
    categoryName: string;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductList: FC<ProductListType> = ({ categoryName, setError }) => {
    const [cards, setCards] = useState<CardItem[] | null>(null);

    useEffect(() => {
        let ignore = false;

        setCards(null);
        setError(false);

        const fetchCardcards = async () => {
            try {
                const cards = await axios.get(
                    `https://fakestoreapi.com/products${!categoryName ? '' : `/category/${categoryName}`}`
                );

                if (!ignore) setCards(cards.data);
            } catch (error) {
                setError(true);
            }
        };

        fetchCardcards();

        return () => {
            ignore = true;
        };
    }, [categoryName, setError]);

    return (
        <ProductListStyled>
            {cards ? cards.map(cards => <ProductItem {...cards} key={cards.id} />) : <SkeletonList />}
        </ProductListStyled>
    );
};

export default ProductList;
