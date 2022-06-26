import axios from 'axios';
import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CardItem } from '../@types/card';
import { Container, Main } from '../components/globalStyled';

type IProductItemPageProps = {};

const PageInner = styled.div``;

const ProductItemPage: FC<IProductItemPageProps> = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<CardItem | null>(null);

    useEffect(() => {
        let ignore = false;

        const fetchProduct = async () => {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
        };

        if (!ignore) fetchProduct();

        return () => {
            ignore = true;
        };
    }, []);

    if (product === null) {
        return (
            <Main>
                <Container>
                    <h1>Wait!</h1>
                </Container>
            </Main>
        );
    }

    return (
        <Main>
            <Container>{product.title}</Container>
        </Main>
    );
};

export default ProductItemPage;
