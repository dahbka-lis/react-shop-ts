import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CardItem } from '../@types/card';
import { Container, Main } from '../components/globalStyled';
import LoaderPage from './Loader';

type IProductItemPageProps = {};

const PageInner = styled.div``;

const ProductItemPage: FC<IProductItemPageProps> = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<CardItem | null>(null);

    useEffect(() => {
        let ignore = false;

        const fetchProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            if (!ignore) setProduct(response.data);
        };

        fetchProduct();

        return () => {
            ignore = true;
        };
    }, [id]);

    if (product === null) {
        return <LoaderPage />;
    }

    return (
        <Main>
            <Container>
                <PageInner>{product.title}</PageInner>
            </Container>
        </Main>
    );
};

export default ProductItemPage;
