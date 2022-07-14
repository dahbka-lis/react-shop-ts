import { FC, useEffect } from 'react';
import styled from 'styled-components';

import { useParams } from 'react-router-dom';

import { Container, Main, Overlay } from '../components/globalStyled';
import ProductList from '../components/ProductList';
import ScrollButton from '../components/Buttons/ScrollButton';

import { capitalize } from '../helpers';

import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchProducts } from '../redux/slices/productSlice';

import ErrorPage from './ErrorPage';
import NotFoundPage from './NotFoundPage';
import { useAppTheme } from '../hooks/useAppTheme';

// - - - - - - STYLED-COMPONENTS
const ProductsMain = styled(Main)`
    padding-top: 0;
    background: url('https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
        no-repeat center / cover fixed;

    hr {
        margin-top: 1rem;
        margin-bottom: 3rem;
        border: 1px solid var(--alt);
        opacity: 0.2;
    }
`;

const ProductsContainer = styled(Container)`
    position: relative;
    z-index: 9;
    background-color: var(--primary-light);
    box-shadow: 0 0 50px #00000021;

    @media (max-width: 1200px) {
        background-color: var(--primary-light);
    }
`;

const PageTitle = styled.section`
    h1 {
        margin-bottom: 0.4em;
        padding-top: 0.75em;
        font-size: 3em;
        text-align: center;
    }

    p {
        text-align: center;
        max-width: 800px;
        margin-inline: auto;
    }
`;
// - - - - - - - - - - - - - - -

// Succes categories
const categories = ['', "women's clothing", "men's clothing", 'jewelery', 'electronics'];

const ProductsPage: FC = () => {
    const { error, products, loading } = useAppSelector(state => state.product);
    const { categoryName = '' } = useParams<string>();
    const [theme] = useAppTheme();

    const dispatch = useAppDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);

        if (categories.includes(categoryName)) dispatch(fetchProducts(categoryName));
    }, [categoryName, dispatch]);

    if (!categories.includes(categoryName)) {
        return <NotFoundPage />;
    }

    if (error) {
        return <ErrorPage />;
    }

    return (
        <ProductsMain>
            <ProductsContainer>
                <PageTitle>
                    <h1>{!categoryName ? 'All products' : capitalize(categoryName)}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad quaerat hic nesciunt aliquid
                        voluptates aut, veniam, vel atque eveniet illo velit! Sapiente rem veniam natus voluptates, quis
                        voluptas ipsa!
                    </p>
                </PageTitle>
                <hr />
                <ProductList loading={loading} products={products} />
            </ProductsContainer>
            {theme === 'dark' && <Overlay />}
            <ScrollButton />
        </ProductsMain>
    );
};

export default ProductsPage;
