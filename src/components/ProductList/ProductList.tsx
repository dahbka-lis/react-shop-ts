import { FC } from 'react';
import styled from 'styled-components';

import ProductItem from '../ProductItem';
import SkeletonList from '../SkeletonList';
import { IProduct } from '../../@types/product';

// - - - - - - STYLED-COMPONENTS
const ProductListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 2rem;
    justify-content: center;
`;
// - - - - - - - - - - - - - - -

type ProductListType = {
    products: IProduct[];
    loading: boolean;
};

const ProductList: FC<ProductListType> = ({ products, loading }) => {
    return (
        <ProductListStyled>
            {loading ? <SkeletonList /> : products.map(product => <ProductItem product={product} key={product.id} />)}
        </ProductListStyled>
    );
};

export default ProductList;
