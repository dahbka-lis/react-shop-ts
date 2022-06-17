import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Main } from '../components/globalStyled';

interface ICategoriesPageProps {}

const CategoriesPage: FC<ICategoriesPageProps> = () => {
    const { category } = useParams();

    return <Main>{category}</Main>;
};

export default CategoriesPage;
