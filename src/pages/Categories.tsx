import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CardItem } from '../@types/card';
import { Container, Main } from '../components/globalStyled';
import ProductItem from '../components/ProductItem';
import Skeleton from '../components/ProductItem/Skeleton';
import ProductList from '../components/ProductList';
import { capitalize } from '../helpers';
import NotFoundPage from './NotFound';

// - - - - - - STYLED-COMPONENTS
const MainCategoriesStyled = styled(Main)`
    padding-top: 2rem;

    hr {
        margin-top: 1rem;
        margin-bottom: 3rem;
        border: 1px solid var(--alt);
        opacity: 0.2;
    }
`;

const PageTitle = styled.section`
    h1 {
        font-size: 3em;
        text-align: center;
    }
`;
// - - - - - - - - - - - - - - -

// Succes categories
const categories = ["women's clothing", "men's clothing", 'jewelery', 'electronics'];

const CategoriesPage: FC = () => {
    const { categoryName = '' } = useParams<string>();

    if (categoryName && !categories.includes(categoryName)) {
        return <NotFoundPage />;
    }

    return (
        <MainCategoriesStyled>
            <Container>
                <PageTitle>{!!categoryName && <h1>{capitalize(categoryName)}</h1>}</PageTitle>
                <hr />
                <ProductList categoryName={categoryName} />
            </Container>
        </MainCategoriesStyled>
    );
};

export default CategoriesPage;
