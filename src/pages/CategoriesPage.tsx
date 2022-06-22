import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CardItem } from '../@types/card';
import { Container, Main } from '../components/globalStyled';
import ProductItem from '../components/ProductItem';
import Skeleton from '../components/Skeleton';
import { capitalize } from '../helpers';

// - - - - - - STYLED-COMPONENTS
const MainCategoriesPage = styled(Main)`
    padding-top: 2rem;
`;

const PageInner = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;

    @media (max-width: 1100px) {
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
        justify-content: stretch;
    }
`;

const PageTitle = styled.section`
    h1 {
        font-size: 3em;
        text-align: center;
        margin-bottom: 1em;
        padding-bottom: 0.5em;
        border-bottom: 1px solid #ffffff61;
    }
`;
// - - - - - - - - - - - - - - -

const CategoriesPage: FC = () => {
    const { categoryName } = useParams();
    const [items, setItems] = useState<CardItem[] | null>(null);

    useEffect(() => {
        setItems(null);

        if (categoryName) {
            const url = `https://fakestoreapi.com/products/category/${categoryName}`;
            axios
                .get(url)
                .then(res => setItems(res.data))
                .catch(error => console.log(error));
        }
    }, [categoryName]);

    return (
        <MainCategoriesPage>
            <Container>
                <PageTitle>{!!categoryName && <h1>{capitalize(categoryName)}</h1>}</PageTitle>

                <PageInner>
                    {items
                        ? items.map(item => <ProductItem {...item} key={item.id} />)
                        : [...new Array(4)].map((_, i) => <Skeleton key={i} />)}
                </PageInner>
            </Container>
        </MainCategoriesPage>
    );
};

export default CategoriesPage;
