import { FC } from 'react';
import { useParams } from 'react-router-dom';

interface ICategoriesPageProps {}

const CategoriesPage: FC<ICategoriesPageProps> = () => {
    const { category } = useParams();

    return <div>{category}</div>;
};

export default CategoriesPage;
