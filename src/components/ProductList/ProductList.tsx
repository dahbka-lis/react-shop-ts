import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardItem } from '../../@types/card';
import ProductItem from '../ProductItem';
import SkeletonList from '../ProductItem/SkeletonList';

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
    const [items, setItems] = useState<CardItem[] | null>(null);

    useEffect(() => {
        let ignore = false;
        setItems(null);

        const fetchCardItems = async () => {
            const cards = await axios.get(
                `https://fakestoreapi.com/products${!categoryName ? '' : `/category/${categoryName}`}`
            );

            if (!ignore) setItems(cards.data);
        };

        fetchCardItems();

        return () => {
            ignore = true;
        };
    }, [categoryName]);

    return (
        <ProductListStyled>
            {items ? items.map(item => <ProductItem {...item} key={item.id} />) : <SkeletonList />}
        </ProductListStyled>
    );
};

export default ProductList;
