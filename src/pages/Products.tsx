import { FC } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Main } from '../components/globalStyled';
import ProductList from '../components/ProductList';
import { capitalize } from '../helpers/helpers';
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
const categories = ['', "women's clothing", "men's clothing", 'jewelery', 'electronics'];

const ProductsPage: FC = () => {
    const { categoryName = '' } = useParams<string>();

    if (!categories.includes(categoryName)) {
        return <NotFoundPage />;
    }

    return (
        <MainCategoriesStyled>
            <Container>
                <PageTitle>
                    <h1>{!categoryName ? 'All products' : capitalize(categoryName)}</h1>
                </PageTitle>
                <hr />
                <ProductList categoryName={categoryName} />
            </Container>
        </MainCategoriesStyled>
    );
};

export default ProductsPage;
