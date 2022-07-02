import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CardItem } from '../@types/card';
import { ArrowIcon, Container, Main, StyledButton } from '../components/globalStyled';
import ProductAside from '../components/ProductAside';
import LoaderPage from './Loader';

// - - - - - - STYLED-COMPONENTS
const ProductMainStyled = styled(Main)`
    display: grid;
    place-items: center;

    & > div > button {
        margin-block: 1.5rem;
    }
`;

const PageInner = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 1 auto;

    padding: 2.5rem;
    border-radius: 10px;
    margin-bottom: 2rem;

    background-color: var(--primary);

    img {
        border-radius: 10px;
        width: 60%;
        height: auto;
        object-fit: cover;

        @media (max-width: 1200px) {
            width: 50%;
        }

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;
    }
`;
// - - - - - - - - - - - - - - -

const ProductItemPage: FC = () => {
    const navigate = useNavigate();
    const { id = '' } = useParams();
    const [product, setProduct] = useState<CardItem | null>(null);

    const navigateBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        let ignore = false;

        const fetchProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            if (!ignore) setProduct(response.data);
        };

        if (id !== '') fetchProduct();

        return () => {
            ignore = true;
        };
    }, [id]);

    if (product === null) {
        return <LoaderPage />;
    }

    return (
        <ProductMainStyled>
            <Container>
                <StyledButton onClick={navigateBack}>
                    <ArrowIcon /> Back
                </StyledButton>
                <PageInner>
                    <img src={product.image} alt="" />
                    <ProductAside product={product} />
                </PageInner>
            </Container>
        </ProductMainStyled>
    );
};

export default ProductItemPage;
