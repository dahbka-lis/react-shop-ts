import axios from 'axios';
import { FC, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CardItem } from '../@types/card';
import { Container, Main } from '../components/globalStyled';
import ProductItem from '../components/ProductItem';
import Skeleton from '../components/Skeleton';
import { capitalize } from '../helpers';
import NotFoundPage from './NotFoundPage';

// - - - - - - STYLED-COMPONENTS
const MainCategoriesPage = styled(Main)`
    padding-top: 2rem;

    hr {
        margin-top: 1rem;
        margin-bottom: 3rem;
        border: 1px solid var(--alt);
        opacity: 0.2;
    }
`;

const PageInner = styled.div`
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
    const { categoryName } = useParams(); // for fetch data.
    const [items, setItems] = useState<CardItem[] | null>(null); // rerender.

    // Async callback for fetch data.
    const fetchCardItems = useCallback(async () => {
        const cards = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
        setItems(cards.data);
    }, [categoryName]);

    // Get API data when page mount. IF for fetch when param !== null and param exist
    useEffect(() => {
        setItems(null);
        if (categoryName && categories.includes(categoryName)) fetchCardItems();
    }, [categoryName, fetchCardItems]);

    // If param does not exist (array succes categories - categories(42 line))
    if (categoryName && !categories.includes(categoryName)) {
        return <NotFoundPage />;
    }

    return (
        <MainCategoriesPage>
            <Container>
                <PageTitle>{!!categoryName && <h1>{capitalize(categoryName)}</h1>}</PageTitle>
                <hr />
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
