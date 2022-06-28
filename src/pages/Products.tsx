import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Main } from '../components/globalStyled';
import ProductList from '../components/ProductList';
import { capitalize } from '../helpers/helpers';
import NotFoundPage from './NotFound';

// - - - - - - STYLED-COMPONENTS
const ProductsMain = styled(Main)`
    padding-top: 0;
    background: url('https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
        no-repeat center / cover;
    background-attachment: fixed;

    hr {
        margin-top: 1rem;
        margin-bottom: 3rem;
        border: 1px solid var(--alt);
        opacity: 0.2;
    }
`;

const ProductsContainer = styled(Container)`
    background-color: var(--primary);
`;

const PageTitle = styled.section`
    h1 {
        padding-top: 1em;
        font-size: 3em;
        text-align: center;
    }
`;
// - - - - - - - - - - - - - - -

// Succes categories
const categories = ['', "women's clothing", "men's clothing", 'jewelery', 'electronics'];

const ProductsPage: FC = () => {
    const { categoryName = '' } = useParams<string>();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoryName]);

    if (!categories.includes(categoryName)) {
        return <NotFoundPage />;
    }

    return (
        <ProductsMain>
            <ProductsContainer>
                <PageTitle>
                    <h1>{!categoryName ? 'All products' : capitalize(categoryName)}</h1>
                </PageTitle>
                <hr />
                <ProductList categoryName={categoryName} />
            </ProductsContainer>
        </ProductsMain>
    );
};

export default ProductsPage;
