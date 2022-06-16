import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

interface ICategoriesPageProps {}

const CategoriesPage: FC<ICategoriesPageProps> = () => {
    const { categorie } = useParams();

    return <div>{categorie}</div>;
};

export default CategoriesPage;
