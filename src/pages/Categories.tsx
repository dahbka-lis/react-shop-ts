import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CardItem } from '../@types/card';
import { Container, Main } from '../components/globalStyled';
import ProductItem from '../components/ProductItem';
import Skeleton from '../components/ProductItem/Skeleton';
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
    const { categoryName } = useParams();
    const [items, setItems] = useState<CardItem[] | null>(null);

    useEffect(() => {
        let ignore = false;
        setItems(null);

        const fetchCardItems = async () => {
            const cards = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);

            if (!ignore) setItems(cards.data);
        };

        if (categoryName && categories.includes(categoryName)) fetchCardItems();

        return () => {
            ignore = true;
        };
    }, [categoryName]);

    if (categoryName && !categories.includes(categoryName)) {
        return <NotFoundPage />;
    }

    return (
        <MainCategoriesStyled>
            <Container>
                <PageTitle>{!!categoryName && <h1>{capitalize(categoryName)}</h1>}</PageTitle>
                <hr />
                <PageInner>
                    {items
                        ? items.map(item => <ProductItem {...item} key={item.id} />)
                        : [...new Array(4)].map((_, i) => <Skeleton key={i} />)}
                </PageInner>
            </Container>
        </MainCategoriesStyled>
    );
};

export default CategoriesPage;
